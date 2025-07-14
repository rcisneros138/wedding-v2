/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Image optimization configuration
  images: {
    // Add any remote image domains if needed
    remotePatterns: [],
  },

  // Temporarily allow builds with ESLint errors
  // TODO: Remove this after fixing all ESLint errors
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
