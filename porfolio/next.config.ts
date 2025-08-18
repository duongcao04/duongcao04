import type { NextConfig } from 'next'

import createMDX from '@next/mdx'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()
const withMDX = createMDX()

const nextConfig: NextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    /* config options here */
    images: {
        domains: [
            "api.microlink.io", // Microlink Image Preview
        ],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ]
    },
    transpilePackages: ['next-mdx-remote'],
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}

export default withMDX(withNextIntl(nextConfig))
