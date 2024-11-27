import type { ReactNode } from 'react'
import type { Metadata } from 'next'

import './globals.css'

import { inter } from '@/fonts'

import Header from '@/components/layout/header'

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
        <html lang="en">
            <body className={`${inter.className} antialiased scroll-smooth`}>
                <Header />
                <main className="relative max-h-[calc(100vh-44px)] h-[calc(100vh-44px)] overflow-hidden">
                    {children}
                </main>
            </body>
        </html>
    )
}
