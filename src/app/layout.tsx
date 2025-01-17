import type { ReactNode } from 'react'

import type { Metadata } from 'next'

import { ToastContainer } from 'react-toastify'

import DarkModeSelector from '@/components/layout/dark-mode-selector'
import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import ScrollToTop from '@/components/layout/scroll-to-top'

import MyAppProvider from '@/app/providers'
import { inter } from '@/fonts'

import './globals.css'

export const metadata: Metadata = {
    title: 'Cao Hai Duong',
    description:
        'Web developer specializing in React, Node.js, and TypeScript. Based in Vietnam. Explore my portfolio showcasing web applications, mobile development, and cloud solutions.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    return (
        <html lang="en" className={inter.className} suppressHydrationWarning>
            <body
                className="antialiased scroll-smooth"
                suppressHydrationWarning
            >
                <MyAppProvider>
                    <div id="page w-screen">
                        <ScrollToTop />
                        <ToastContainer />
                        <div className="w-full fixed z-10">
                            <Header />
                        </div>
                        <main className="pt-[80px] min-h-[calc(100vh-64px)]">
                            {children}
                        </main>
                        <div className="fixed bottom-8 laptop:bottom-10 right-10">
                            <DarkModeSelector />
                        </div>
                        <Footer />
                    </div>
                </MyAppProvider>
            </body>
        </html>
    )
}
