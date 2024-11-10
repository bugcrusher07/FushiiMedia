import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };



/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Enable experimental serverless features if needed
  experimental: {
    serverActions: true,
  },
  // Add custom webpack config if needed
  webpack: (config: { resolve: { fallback: any; }; }, { isServer }: any) => {
    if (!isServer) {
      // Don't bundle prisma with client
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
}

module.exports = nextConfig;
export default nextConfig;