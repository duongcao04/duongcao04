import { type ReactNode } from 'react'

import dynamic from 'next/dynamic'

const Header = dynamic(() => import('@/components/layout/header'))
const Footer = dynamic(() => import('@/components/layout/footer'))
const DarkModeSelector = dynamic(
    () => import('@/components/layout/dark-mode-selector')
)

export default function LandingLayout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    return (
        <>
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
        </>
    )
}