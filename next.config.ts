import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'preview-assets-us-01.kc-usercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'assets-us-01.kc-usercontent.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
