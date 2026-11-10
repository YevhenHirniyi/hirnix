import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // app/global-not-found.tsx: the site has two root layouts ((uk) and [lang]).
    globalNotFound: true,
  },
  async headers() {
    // Unlisted onboarding video: reachable by direct link only, never indexed.
    const noIndex = [{ key: "X-Robots-Tag", value: "noindex, nofollow" }];
    return [
      { source: "/onboarding", headers: noIndex },
      { source: "/video/onboarding.mp4", headers: noIndex },
    ];
  },
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
