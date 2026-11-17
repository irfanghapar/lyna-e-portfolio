import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [{ source: "/entries/gather-town", destination: "/entries/assemblr-edu", permanent: false }];
  },
};

export default nextConfig;
