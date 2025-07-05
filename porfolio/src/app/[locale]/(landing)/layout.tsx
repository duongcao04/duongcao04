import { type ReactNode } from 'react'

import { Metadata } from 'next'

import dynamic from 'next/dynamic'

const Header = dynamic(() => import('@/components/layout/header'))
const Footer = dynamic(() => import('@/components/layout/footer'))
const DarkModeSelector = dynamic(
    () => import('@/components/layout/DarkModeSelector')
)

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
            <main>{children}</main>
            <div className="fixed bottom-8 laptop:bottom-10 right-10">
                <DarkModeSelector />
            </div>
            <Footer />
        </>
    )
}
