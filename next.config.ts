import createNextIntlPlugin from 'next-intl/plugin'
import createMDX from '@next/mdx'
import type { NextConfig } from 'next'

const withNextIntl = createNextIntlPlugin()
const withMDX = createMDX()

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
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx']
}

export default withMDX(withNextIntl(nextConfig))
