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
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "react/compiler-runtime": "react-compiler-runtime"
    };

    return config;
  }
};

export default nextConfig;
