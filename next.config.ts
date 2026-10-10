import type { NextConfig } from "next";

// GitHub Pages serves this repository under /ssc-prep.
// Local development remains available at http://localhost:3000.
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPages ? "/ssc-prep" : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
