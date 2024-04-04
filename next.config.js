/** @type {import('next').NextConfig} */
const nextConfig = {
  // distDir: "_next",
  // output: "export",
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  images: {
    // loader: "custom",
    // loaderFile: "./my-loader.js",
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "strapi.gidebilirmiyim.com",
        pathname: "/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;
