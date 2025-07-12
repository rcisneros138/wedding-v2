/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for Cloudflare Pages
  output: 'export',

  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Image optimization configuration
  images: {
    // Disable image optimization for static export
    unoptimized: true,
    // Add any remote image domains if needed
    remotePatterns: [],
  },
}

module.exports = nextConfig
