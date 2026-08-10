import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // GitHub Pages only serves static files, so export the whole App Router site.
  output: "export",
  trailingSlash: true,
  basePath,
  images: {
    // The default Next.js image optimizer requires a server runtime.
    unoptimized: true,
  },
};

export default nextConfig;
