import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ['three'],
  images: {
    domains: ["images.unsplash.com"], // ✅ Allow Unsplash images
  },
};



export default nextConfig;
