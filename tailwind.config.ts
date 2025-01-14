import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

export default {
    darkMode: 'selector',
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
            animation: {
                scrolldown: 'scrolldown 1.5s infinite',
            },
            keyframes: {
                scrolldown: {
                    '0%': { opacity: '0', transform: 'translate(0, -8px)' },
                    '50%': { opacity: '1', transform: 'translate(0, 0)' },
                    '100%': { opacity: '0', transform: 'translate(0, 8px)' },
                },
            },
            screens: {
                mobile: '375px',
                // => @media (min-width: 375px) { ... }

                tablet: '640px',
                // => @media (min-width: 640px) { ... }

                laptop: '1024px',
                // => @media (min-width: 1024px) { ... }

                desktop: '1280px',
                // => @media (min-width: 1280px) { ... }
            },
            boxShadow: {
                square: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
            },
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                card: {
                    DEFAULT: 'var(--card)',
                    foreground: 'var(--card-foreground)',
                },
                popover: {
                    DEFAULT: 'var(--popover)',
                    foreground: 'var(--popover-foreground)',
                },
                primary: {
                    '50': '#fff1f2',
                    '100': '#ffe4e6',
                    '200': '#fecdd3',
                    '300': '#fda4af',
                    '400': '#fb7185',
                    '500': '#f43f5e',
                    '600': '#e11d48',
                    '700': '#be123c',
                    '800': '#9f1239',
                    '900': '#881337',
                    '950': '#4c0519',
                    DEFAULT: 'var(--primary)',
                    foreground: 'var(--primary-foreground)',
                },
                sky: {
                    50: '#D9EDFD',
                    100: '#C5E4FC',
                    200: '#9ED3FA',
                    300: '#78C1F8',
                    400: '#51AFF6',
                    500: '#2A9DF4',
                    600: '#0B81DB',
                    700: '#0962A5',
                    800: '#064270',
                    900: '#03233B',
                    950: '#021320',
                    DEFAULT: '#2A9DF4',
                    foreground: 'var(--primary-foreground)',
                },
                secondary: {
                    DEFAULT: 'var(--secondary)',
                    foreground: 'var(--secondary-foreground)',
                },
                muted: {
                    DEFAULT: 'var(--muted)',
                    foreground: 'var(--muted-foreground)',
                },
                accent: {
                    DEFAULT: 'var(--accent)',
                    foreground: 'var(--accent-foreground)',
                },
                destructive: {
                    DEFAULT: 'var(--destructive)',
                    foreground: 'var(--destructive-foreground)',
                },
                border: 'var(--border)',
                input: 'var(--input)',
                ring: 'var(--ring)',
                chart: {
                    '1': 'var(--chart-1)',
                    '2': 'var(--chart-2)',
                    '3': 'var(--chart-3)',
                    '4': 'var(--chart-4)',
                    '5': 'var(--chart-5)',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
        },
    },
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    plugins: [
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        require('tailwindcss-animate'),
        plugin(function ({ addBase, theme }) {
            addBase({
                h1: {
                    fontSize: theme('fontSize.5xl'),
                    fontWeight: theme('fontWeight.bold'),
                },
                h2: { fontSize: theme('fontSize.4xl'), fontWeight: theme('fontWeight.bold') },
                h3: {
                    fontSize: theme('fontSize.xl'),
                    fontWeight: theme('fontWeight.medium'),
                },
            })
        }),
    ],
} satisfies Config
