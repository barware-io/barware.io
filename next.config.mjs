/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '' : '',
  assetPrefix: isProd ? '' : '',
  output: 'export', // This enables static export
  images: {
    unoptimized: true,
    path: isProd ? `/_next/image` : '',
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
};

export default nextConfig;