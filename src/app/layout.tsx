import type { ReactNode } from 'react'
import type { Metadata } from 'next'

import './globals.css'

import { inter } from '@/fonts'

import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

export const metadata: Metadata = {
    title: 'Yang Portfolio',
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
                {children}
                <Footer />
            </body>
        </html>
    )
}
