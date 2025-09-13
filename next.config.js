/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    unoptimized: true,
  },
  trailingSlash: true,
  output: 'export',
}

module.exports = nextConfig
