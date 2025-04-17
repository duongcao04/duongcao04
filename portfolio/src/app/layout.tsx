import { type ReactNode } from 'react'

import type { Metadata } from 'next'

import { ToastContainer } from 'react-toastify'

import ScrollToTop from '@/components/layout/ScrollToTop'

import MyAppProvider from '@/app/providers'
import { inter } from '@/fonts'
import '@/server'

import './globals.css'

export const metadata: Metadata = {
    title: 'Yangis.dev',
    description:
        'Web developer specializing in React, Node.js, and TypeScript. Based in Vietnam. Explore my portfolio showcasing web applications, mobile development, and cloud solutions.',
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
                        {children}
                    </div>
                </MyAppProvider>
            </body>
        </html>
    )
}
