/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.onc-prod.intergalactic.space'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com'
      },
      {
        protocol: 'https',
        hostname: 'avatar.vercel.sh'
      },
      {
        protocol: 'https',
        hostname: 'aoc.ouc.edu.cn'
      }
    ]
  },
  // output: 'export',
}

module.exports = nextConfig
