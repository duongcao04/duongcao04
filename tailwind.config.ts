import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        container: {
            center: true,
            padding: '1rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            boxShadow: {
                custom: 'rgba(14, 16, 17, 0.4) 0px 20px 60px 60px',
            },
            width: {
                navbar: '960px',
            },
            height: {
                navbar: '72px',
            },
            colors: {
                background: 'var(--background)',
                textBlur: '#525252',
                foreground: 'var(--foreground)',
                border: 'var(--border)',
            },
        },
    },
    plugins: [nextui()],
}
export default config
