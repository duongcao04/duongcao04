import { type ReactNode, Suspense } from 'react'

import { Viewport } from 'next'

import { getTranslations } from 'next-intl/server'
import { ToastContainer } from 'react-toastify'

import ScrollToTop from '@/components/layout/ScrollToTop'

import MyAppProvider from '@/app/providers'
import { inter } from '@/fonts'

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
        title: t('app.metadata.title'),
        description: t('app.metadata.description'),
        keywords: t('app.metadata.keywords'),
        openGraph: {
            title: t('app.metadata.ogTitle'),
            description: t('app.metadata.ogDescription'),
            url: 'https://yangis.dev',
            siteName: 'Yangis Portfolio',
            images: [
                {
                    url: 'https://yangis.dev/og-image.jpg',
                    width: 1200,
                    height: 630,
                    alt: 'Yangis Portfolio',
                },
            ],
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: t('app.metadata.twitterTitle'),
            description: t('app.metadata.twitterDescription'),
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
            className={inter.className}
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
