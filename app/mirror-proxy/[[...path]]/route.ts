import fs from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

const mirrorRoot = path.join(process.cwd(), "public", "mirror");
const origin = "https://www.improvemeinstitute.com";

const mimeTypes: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf"
};

function fixNextImageFallbacks(html: string) {
  let fixed = html.replace(/\/_next\/image\/\?/g, "/_next/image?");

  // Some mirrored Next.js pages include <img ... src="/_next/image/">
  // where the real file path only exists in srcSet query params.
  fixed = fixed.replace(/<img[^>]*>/gi, (imgTag) => {
    if (!imgTag.includes('src="/_next/image/"')) {
      return imgTag;
    }
    const encodedMatch = imgTag.match(/url=([^"&\s]+)/i);
    if (!encodedMatch?.[1]) {
      return imgTag;
    }
    const decoded = decodeURIComponent(encodedMatch[1]).replace(/^https?:\/\/[^/]+/i, "");
    const safePath = decoded.startsWith("/") ? decoded : `/${decoded}`;
    return imgTag.replace('src="/_next/image/"', `src="${safePath}"`);
  });

  return fixed;
}

async function serveMirror(slug: string[]) {
  const requested = slug.join("/");
  const hasExt = /\.[a-z0-9]+$/i.test(requested);
  const safe = requested.replace(/\.\./g, "");

  const candidates = hasExt
    ? [path.join(mirrorRoot, safe)]
    : [
        path.join(mirrorRoot, safe || "", "index.html"),
        path.join(mirrorRoot, `${safe}.html`),
        path.join(mirrorRoot, "index.html")
      ];

  for (const file of candidates) {
    try {
      const stat = await fs.stat(file);
      if (!stat.isFile()) continue;
      const body = await fs.readFile(file);
      const ext = path.extname(file).toLowerCase();
      const contentType = mimeTypes[ext] ?? "application/octet-stream";
      if (ext === ".html") {
        const fixedHtml = fixNextImageFallbacks(body.toString("utf8"));
        return new NextResponse(fixedHtml, {
          headers: {
            "content-type": contentType,
            "cache-control": "no-store, max-age=0"
          }
        });
      }
      return new NextResponse(body, { headers: { "content-type": contentType } });
    } catch {
      // continue
    }
  }

  return NextResponse.json({ error: "Not found in local mirror. Run `npm run mirror:pull`." }, { status: 404 });
}

async function fetchAndCacheFromOrigin(pathname: string, search = "") {
  const originUrl = new URL(`${pathname}${search}`, origin).toString();
  const response = await fetch(originUrl);
  if (!response.ok) {
    return NextResponse.json({ error: `Upstream fetch failed (${response.status})` }, { status: response.status });
  }

  const contentType = response.headers.get("content-type") ?? "application/octet-stream";
  const bytes = Buffer.from(await response.arrayBuffer());

  // Cache only non-query requests to stable disk paths.
  if (!search) {
    const clean = pathname.replace(/^\/+/, "");
    const hasExt = /\.[a-z0-9]+$/i.test(clean);
    const target = hasExt ? path.join(mirrorRoot, clean) : path.join(mirrorRoot, clean || "", "index.html");
    try {
      await fs.mkdir(path.dirname(target), { recursive: true });
      await fs.writeFile(target, bytes);
    } catch {
      // If cache write fails, still serve the response.
    }
  }

  const headers: Record<string, string> = { "content-type": contentType };
  if (contentType.includes("text/html")) {
    headers["cache-control"] = "no-store, max-age=0";
  }
  return new NextResponse(bytes, { headers });
}

export async function GET(req: Request, context: { params: { path?: string[] } }) {
  const slug = context.params.path ?? [];
  const local = await serveMirror(slug);
  if (local.status !== 404) {
    return local;
  }

  const reqUrl = new URL(req.url);
  const pathname = `/${slug.join("/")}`;
  return fetchAndCacheFromOrigin(pathname, reqUrl.search);
}
