/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.wsj.net', 'image.cnbcfm.com', 'cdn.benzinga.com', 'www.reuters.com'],
  }
}

module.exports = nextConfig
