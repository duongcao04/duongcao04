import { type ReactNode } from 'react'

import { Metadata } from 'next'

import DarkModeSelector from '@/shared/components/layout/DarkModeSelector'
import Footer from '@/shared/components/layout/footer'
import Header from '@/shared/components/layout/header'

export const metadata: Metadata = {
    title: 'Yangis.dev',
}

export default function LandingLayout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    return (
        <>
            <Header />
            <div>{children}</div>
            <div className="fixed bottom-8 laptop:bottom-10 right-10 z-9999">
                <DarkModeSelector />
            </div>
            <Footer />
        </>
    )
}
