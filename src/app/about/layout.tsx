import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import FooterNavigate from '@/components/common/footer-navigate'

export const metadata: Metadata = {
    title: 'Yangis Portfolio',
    description:
        'Web developer specializing in React, Node.js, and TypeScript. Based in Vietnam. Explore my portfolio showcasing web applications, mobile development, and cloud solutions.',
}

export default function AboutLayout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    return (
        <main className="relative max-h-[calc(100vh-44px)] h-[calc(100vh-44px)] overflow-hidden">
            {children}
            <div className="absolute bottom-8 -translate-x-[50%] left-[50%]">
                <FooterNavigate />
            </div>
        </main>
    )
}
