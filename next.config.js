/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["via.placeholder.com", "kd-energie.be"],
  },
};

module.exports = nextConfig;
