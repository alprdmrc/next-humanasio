/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "_next",
  output: "export",
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "strapi.gidebilirmiyim.com",
        port: "1337",
        pathname: "/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;
