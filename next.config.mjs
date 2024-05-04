/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "strapi.humanas.io",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
