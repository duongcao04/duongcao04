import { Inter, Pacifico, Preahvihear, Roboto } from 'next/font/google'
import localFont from 'next/font/local'

export const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800'],
})

export const roboto = Roboto({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})

export const pacifico = Pacifico({
    weight: '400',
    style: 'normal',
    variable: '--font-pacifico',
    subsets: ['latin'],
})

export const preahvihear = Preahvihear({
    weight: '400',
    style: 'normal',
    variable: '--font-preahvihear',
    subsets: ['latin'],
})

export const LexendDeca = localFont({
    src: './LexendDeca.ttf',
    variable: '--font-lexendDeca',
    adjustFontFallback: 'Arial',
    preload: true,
})

export const playwrite = localFont({
    src: './Playwrite.ttf',
    variable: '--font-playwrite',
    adjustFontFallback: 'Arial',
    preload: true,
})

export const raynelth = localFont({
    src: './Raynelth.ttf',
    variable: '--font-raynelth',
    adjustFontFallback: 'Arial',
    preload: true,
})

export const saira = localFont({
    src: './Saira.ttf',
    variable: '--font-saira',
    adjustFontFallback: 'Arial',
    preload: true,
})
