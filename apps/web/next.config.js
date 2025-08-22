/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable experimental features for better performance
    experimental: {
        appDir: true,
        serverComponentsExternalPackages: ['@prisma/client'],
    },

    // Image optimization for financial charts and logos
    images: {
        domains: [
            'localhost',
            'api.fingenius.com',
            'charts.static.alphavantage.co',
            'logo.clearbit.com',
        ],
        formats: ['image/webp', 'image/avif'],
    },

    // Environment variables
    env: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
        NEXT_PUBLIC_WS_URL: process.env.NEXT_PUBLIC_WS_URL,
    },

    // Security headers for financial application
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'origin-when-cross-origin',
                    },
                    {
                        key: 'Permissions-Policy',
                        value: 'camera=(), microphone=(), geolocation=()',
                    },
                ],
            },
        ];
    },

    // Webpack configuration for better bundle optimization
    webpack: (config, { isServer }) => {
        // Optimize bundle size
        if (!isServer) {
            config.resolve.fallback = {
                ...config.resolve.fallback,
                fs: false,
                net: false,
                tls: false,
            };
        }

        return config;
    },
};

module.exports = nextConfig;
