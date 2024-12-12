/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const repositoryName = 'barware.io'; // Replace with your actual repository name

const nextConfig = {
  basePath: isProd ? `/${repositoryName}` : '',
  assetPrefix: isProd ? `/${repositoryName}/` : '',
  output: 'export', // This enables static export
  images: {
    unoptimized: true,
    path: isProd ? `/${repositoryName}/_next/image` : '/_next/image',
  },
};

export default nextConfig;