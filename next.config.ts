import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets-us-01.kc-usercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'preview-assets-us-01.kc-usercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'assets.kontent.ai',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.kc-usercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
