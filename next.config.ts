import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.freepik.com',
                pathname: '/**',
            },
        ],
    },
}

export default nextConfig
