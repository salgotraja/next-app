import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.vecteezy.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
