import type { ReactNode } from 'react'

import type { Metadata } from 'next'

import DarkModeSelector from '@/components/layout/dark-mode-selector'
import Header from '@/components/layout/header'

import MyAppProvider from '@/app/providers'
import { inter } from '@/fonts'

import './globals.css'

export const metadata: Metadata = {
    title: 'Yangis',
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
                        <div className="fixed w-full top-5 z-10 px-5 laptop:px-0">
                            <Header />
                        </div>
                        <main className="relative mb-20 laptop:mb-0 laptop:max-h-screen laptop:h-screen laptop:overflow-hidden">
                            {children}
                        </main>
                        <div className="fixed bottom-8 laptop:bottom-10 right-10">
                            <DarkModeSelector />
                        </div>
                    </div>
                </MyAppProvider>
            </body>
        </html>
    )
}
