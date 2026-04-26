import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",  // add this too for regular unsplash images
      },
      {
        protocol: "https",
        hostname: "media.istockphoto.com",  // add this too for regular istockphoto images
      },
    ],
  },
};

export default nextConfig;
