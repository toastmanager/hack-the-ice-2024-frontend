import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  publicRuntimeConfig: {
    backendUrl: process.env.BACKEND_URL
  }
};

export default nextConfig;
