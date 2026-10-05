// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 95], // Explicitly authorize 95% quality
  },
};

export default nextConfig;