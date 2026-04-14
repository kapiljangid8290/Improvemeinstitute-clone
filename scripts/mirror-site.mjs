import fs from "node:fs/promises";
import path from "node:path";

const ORIGIN = "https://www.improvemeinstitute.com";
const OUTPUT_DIR = path.join(process.cwd(), "public", "mirror");
const seeds = ["/", "/about/", "/courses/", "/curriculum/", "/blogs/", "/contact/"];

const pageQueue = [...seeds];
const assetQueue = [];
const seenPages = new Set();
const seenAssets = new Set();

const HTML_LINK_RE = /(?:href|src)=["']([^"'#][^"']*)["']/gi;
const CSS_URL_RE = /url\((['"]?)([^'")]+)\1\)/gi;

function normalizePathname(pathname) {
  if (!pathname) return "/";
  if (!pathname.startsWith("/")) return `/${pathname}`;
  return pathname;
}

function isSameOrigin(url) {
  return url.origin === ORIGIN;
}

function isAssetPath(pathname) {
  return /\.[a-z0-9]{2,8}$/i.test(pathname);
}

function shouldSkipPath(pathname) {
  return pathname.startsWith("/_next/image");
}

async function ensureDir(filePath) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
}

function pagePathToFile(pathname) {
  const clean = pathname === "/" ? "/index" : pathname.replace(/\/$/, "/index");
  return path.join(OUTPUT_DIR, `${clean}.html`);
}

function assetPathToFile(pathname) {
  return path.join(OUTPUT_DIR, pathname);
}

function rewriteToLocal(raw) {
  if (!raw || raw.startsWith("data:") || raw.startsWith("mailto:") || raw.startsWith("tel:") || raw.startsWith("javascript:")) {
    return raw;
  }

  const parsed = new URL(raw, ORIGIN);
  if (!isSameOrigin(parsed)) {
    return raw;
  }

  const p = normalizePathname(parsed.pathname);
  const query = parsed.search ?? "";
  if (isAssetPath(p)) {
    return `${p}${query}`;
  }

  if (p === "/") {
    return "/";
  }

  return `${p.endsWith("/") ? p : `${p}/`}${query}`;
}

function collectFromHtml(html, basePath) {
  let match;
  while ((match = HTML_LINK_RE.exec(html)) !== null) {
    const raw = match[1];
    if (!raw) continue;
    const absolute = new URL(raw, new URL(basePath, ORIGIN));
    if (!isSameOrigin(absolute)) continue;
    const pathname = normalizePathname(absolute.pathname);
    if (shouldSkipPath(pathname)) continue;
    if (isAssetPath(pathname)) {
      if (!seenAssets.has(pathname)) assetQueue.push(pathname);
    } else {
      const finalPath = pathname.endsWith("/") ? pathname : `${pathname}/`;
      if (!seenPages.has(finalPath)) pageQueue.push(finalPath);
    }
  }
}

function collectFromCss(css, basePath) {
  let match;
  while ((match = CSS_URL_RE.exec(css)) !== null) {
    const raw = match[2];
    if (!raw || raw.startsWith("data:") || raw.startsWith("#")) continue;
    const absolute = new URL(raw, new URL(basePath, ORIGIN));
    if (!isSameOrigin(absolute)) continue;
    const pathname = normalizePathname(absolute.pathname);
    if (shouldSkipPath(pathname)) continue;
    if (!seenAssets.has(pathname)) assetQueue.push(pathname);
  }
}

function rewriteHtml(html, basePath) {
  return html.replace(/(?:href|src)=["']([^"']+)["']/gi, (full, urlValue) => {
    const local = rewriteToLocal(new URL(urlValue, new URL(basePath, ORIGIN)).href);
    return full.replace(urlValue, local);
  });
}

async function fetchText(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed ${url}: ${res.status}`);
  }
  return res.text();
}

async function fetchBuffer(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed ${url}: ${res.status}`);
  }
  const ab = await res.arrayBuffer();
  return Buffer.from(ab);
}

async function pullPages() {
  while (pageQueue.length) {
    const pathname = pageQueue.shift();
    if (!pathname || seenPages.has(pathname)) continue;
    seenPages.add(pathname);

    const url = new URL(pathname, ORIGIN).href;
    const html = await fetchText(url);
    const rewritten = rewriteHtml(html, pathname);
    collectFromHtml(html, pathname);

    const target = pagePathToFile(pathname);
    await ensureDir(target);
    await fs.writeFile(target, rewritten, "utf8");
    console.log(`page ${pathname}`);
  }
}

async function pullAssets() {
  while (assetQueue.length) {
    const pathname = assetQueue.shift();
    if (!pathname || seenAssets.has(pathname)) continue;
    seenAssets.add(pathname);

    const url = new URL(pathname, ORIGIN).href;
    try {
      const buffer = await fetchBuffer(url);
      const target = assetPathToFile(pathname);
      await ensureDir(target);
      await fs.writeFile(target, buffer);
      console.log(`asset ${pathname}`);

      if (pathname.endsWith(".css")) {
        const css = buffer.toString("utf8");
        collectFromCss(css, pathname);
      }
    } catch (error) {
      console.warn(`skip asset ${pathname}: ${error instanceof Error ? error.message : "fetch failed"}`);
    }
  }
}

async function main() {
  await fs.rm(OUTPUT_DIR, { recursive: true, force: true });
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  await pullPages();
  await pullAssets();
  console.log(`done pages=${seenPages.size} assets=${seenAssets.size}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
