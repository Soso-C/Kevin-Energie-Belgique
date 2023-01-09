/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: false,
  },
  images: {
    domains: ["www.kd-energie.be", "localhost", "kd-energie.be"],
    deviceSizes: [420, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
