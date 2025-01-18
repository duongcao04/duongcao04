import createNextIntlPlugin from 'next-intl/plugin'
import type { NextConfig } from 'next'

const withNextIntl = createNextIntlPlugin()

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
    }
}

export default withNextIntl(nextConfig)
