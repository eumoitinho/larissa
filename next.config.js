/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  experimental: {
    forceSwcTransforms: true,
  },
  swcMinify: false,
}

module.exports = nextConfig