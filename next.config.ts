import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "standalone",
  outputFileTracingRoot: path.join(__dirname, "./"),
  turbopack: {},
  webpack: (config) => {
    return config;
  },
  env: {
    CURRENT_SITE_DOMAIN: process.env.CURRENT_SITE_DOMAIN || "www.sanmartinsquarelima.com",
  },
};

export default nextConfig;
