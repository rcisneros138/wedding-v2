/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Image optimization configuration
  images: {
    // Add any remote image domains if needed
    remotePatterns: [],
  },
}

module.exports = nextConfig
