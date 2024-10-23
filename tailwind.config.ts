import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
                border: 'rgba(255, 255, 255, 0.04)',
            },
        },
    },
    plugins: [],
}
export default config
