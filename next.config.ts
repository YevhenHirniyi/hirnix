import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/cz', destination: '/websites/cz', permanent: true },
    ];
  },
};

export default nextConfig;
