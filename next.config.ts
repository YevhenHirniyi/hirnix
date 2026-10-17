import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old single-page price URL and the earlier Czech prefix.
      { source: "/pricing", destination: "/conditions", permanent: true },
      { source: "/cz", destination: "/cs", permanent: true },
      { source: "/cz/:path*", destination: "/cs/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
