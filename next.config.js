/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Increased from the 60s default for local builds on slower machines
  staticPageGenerationTimeout: 300,
};

module.exports = nextConfig;
