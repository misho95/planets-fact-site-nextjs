import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/",
        destination: "/mercury",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
