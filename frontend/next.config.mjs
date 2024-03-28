/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["*"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
};

export default nextConfig;
