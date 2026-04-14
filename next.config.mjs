/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.improvemeinstitute.com"
      }
    ]
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/",
          destination: "/mirror-proxy"
        },
        {
          source: "/:path((?!_next/image).*)",
          destination: "/mirror-proxy/:path*"
        }
      ]
    };
  }
};

export default nextConfig;
