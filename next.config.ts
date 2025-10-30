/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true, // si usas server actions
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // permite imágenes externas
      },
    ],
  },
};

export default nextConfig;