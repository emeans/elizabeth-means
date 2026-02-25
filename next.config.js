/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: 'https', hostname: 'placehold.co', pathname: '/**' }],
  },
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: false,
  },
}

module.exports = nextConfig
