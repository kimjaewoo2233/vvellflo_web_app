import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d2oduisms75fa1.cloudfront.net",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
