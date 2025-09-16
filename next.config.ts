import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  devIndicators: false,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
  // Remove assetPrefix to use relative paths
  basePath: '',
  // Ensure CSS is properly processed
  experimental: {
    optimizeCss: false,
  },
  // Configure webpack for relative paths
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.output.publicPath = './_next/';
    }
    return config;
  },
};
export default nextConfig;
 