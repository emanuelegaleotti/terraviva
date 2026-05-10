import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  sassOptions: {
    // Allows @use 'abstracts/variables' etc. from any .scss file
    includePaths: [path.join(process.cwd(), "src/styles")],
  },
};

export default nextConfig;
