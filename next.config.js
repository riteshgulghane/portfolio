/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    unoptimized: true,
  },
  trailingSlash: true,
  output: 'standalone',
}

module.exports = nextConfig
