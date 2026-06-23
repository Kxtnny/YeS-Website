import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/join",
        destination: "https://luma.com/yesevents",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
