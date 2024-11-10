import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };



/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
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