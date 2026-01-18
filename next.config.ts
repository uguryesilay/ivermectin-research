import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
  },

  // Compression
  compress: true,

  // Production optimizations

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },

  // Headers for caching and security
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Redirects for broken links and 404s
  async redirects() {
    return [
      {
        source: '/blog/how-to-take-ivermectin',
        destination: '/how-to-take-ivermectin-timing-food-interactions-best-practices',
        permanent: true,
      },
      {
        source: '/blog/ivermectin-cancer-research',
        destination: '/ivermectin-for-inflammation-research-anti-inflammatory-effects',
        permanent: true,
      },
      // Redirect 'www' to non-www (handled by Vercel usually, but good practice if self-hosting)
      // Note: Vercel handles domain redirects at the edge, so we focus on path redirects here.
    ];
  },
};

export default nextConfig;
