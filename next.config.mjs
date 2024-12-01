/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? 'https://stacyrays.github.io/river/' : '',
  basePath: isProd ? 'https://stacyrays.github.io/river' : '',
  output: 'export'
};

export default nextConfig;
