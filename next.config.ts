import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ["localhost"], // ← これを追加！！
  },
};

export default nextConfig;
