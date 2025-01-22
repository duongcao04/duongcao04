import { heroui } from '@heroui/theme'
import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

export default {
    darkMode: ['selector', 'class'],
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
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
            gridTemplateColumns: {
                // Navbar colum template
                navbar: '1fr minmax(0, 1440px) 1fr',
            },
            animation: {
                scrolldown: 'scrolldown 1.5s infinite',
                scroll: 'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
            },
            keyframes: {
                scrolldown: {
                    '0%': { opacity: '0', transform: 'translate(0, -8px)' },
                    '50%': { opacity: '1', transform: 'translate(0, 0)' },
                    '100%': { opacity: '0', transform: 'translate(0, 8px)' },
                },
                scroll: {
                    to: {
                        transform: 'translate(calc(-50% - 0.5rem))',
                    },
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
                wallground: 'var(--wallground)', // #fff
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                text: {
                    primary: 'var(--primary-text)',
                    secondary: 'var(--secondary-text)',
                },
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
                h2: {
                    fontSize: theme('fontSize.4xl'),
                    fontWeight: theme('fontWeight.bold'),
                },
                h3: {
                    fontSize: theme('fontSize.xl'),
                    fontWeight: theme('fontWeight.medium'),
                },
            })
        }),
        heroui(),
        addVariablesForColors,
    ],
} satisfies Config

function addVariablesForColors({ addBase, theme }: any) {
    let allColors = flattenColorPalette(theme('colors'))
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    )

    addBase({
        ':root': newVars,
    })
}
function flattenColorPalette(colors: any) {
    const result: Record<string, string> = {}

    function recurse(obj: any, currentKey: string) {
        for (const key in obj) {
            const value = obj[key]
            const newKey = currentKey ? `${currentKey}-${key}` : key
            if (typeof value === 'object' && value !== null) {
                recurse(value, newKey)
            } else {
                result[newKey] = value
            }
        }
    }

    recurse(colors, '')
    return result
}
