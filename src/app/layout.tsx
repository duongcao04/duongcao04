import type { ReactNode } from 'react'

import type { Metadata } from 'next'

import DarkModeSelector from '@/components/layout/dark-mode-selector'
import Header from '@/components/layout/header'

import MyAppProvider from '@/app/providers'
import { inter } from '@/fonts'

import './globals.css'

export const metadata: Metadata = {
    title: 'Yangis Portfolio',
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
            <body className="antialiased scroll-smooth">
                <MyAppProvider>
                    <div id="page" className="relative">
                        <div className="absolute w-full top-5 z-10">
                            <Header />
                        </div>
                        <main className="relative max-h-[calc(100vh-44px)] h-[calc(100vh-44px)] overflow-hidden">
                            {children}
                        </main>
                        <div className="absolute bottom-10 right-10">
                            <DarkModeSelector />
                        </div>
                    </div>
                </MyAppProvider>
            </body>
        </html>
    )
}
