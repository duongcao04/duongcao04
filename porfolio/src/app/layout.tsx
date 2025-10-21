import { type ReactNode, Suspense } from 'react'

import { Viewport } from 'next'

import { getTranslations } from 'next-intl/server'
import { ToastContainer } from 'react-toastify'

import ScrollToTop from '@/components/layout/ScrollToTop'

import MyAppProvider from '@/app/providers'
import { inter, saira } from '@/fonts'

import './globals.css'
import AppLoader from './loading'

export async function generateMetadata({
    params,
}: {
    params: { locale: string }
}) {
    const t = await getTranslations({
        locale: params.locale,
    })

    return {
        title: t('metadata.title'),
        description: t('metadata.description'),
        keywords: t('metadata.keywords'),
        openGraph: {
            title: t('metadata.ogTitle'),
            description: t('metadata.ogDescription'),
            url: 'https://yangis.dev',
            siteName: 'Yangis.dev',
            images: [
                {
                    url: 'https://yangis.dev/og-image.jpg',
                    width: 1200,
                    height: 630,
                    alt: 'Yangis.dev',
                },
            ],
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: t('metadata.twitterTitle'),
            description: t('metadata.twitterDescription'),
            images: ['https://yangis.dev/twitter-card.jpg'],
        },
    }
}

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
}

export default function RootLayout({
    children,
    params: { locale },
}: Readonly<{
    children: ReactNode
    params: { locale: string }
}>) {
    return (
        <html
            lang={locale}
            className={` ${saira.className} ${inter.className}`}
            suppressHydrationWarning
        >
            <body
                className="antialiased scroll-smooth bg-wallground text-text-primary"
                suppressHydrationWarning
            >
                <MyAppProvider>
                    <div id="page w-screen min-h-screen">
                        <ScrollToTop />
                        <ToastContainer />
                        <Suspense fallback={<AppLoader />}>{children}</Suspense>
                    </div>
                </MyAppProvider>
            </body>
        </html>
    )
}
