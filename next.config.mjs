/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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

export default nextConfig;
