import type { ReactNode } from 'react'

import type { Metadata } from 'next'

import FooterNavigate from '@/components/common/footer-navigate'

export const metadata: Metadata = {
    title: 'Processes | Yangis Portfolio',
    description:
        'Web developer specializing in React, Node.js, and TypeScript. Based in Vietnam. Explore my portfolio showcasing web applications, mobile development, and cloud solutions.',
}

export default function ProcessesLayout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    return (
        <>
            {children}
            <div className="fixed bottom-8 left-[50%] -translate-x-[50%] laptop:bottom-10">
                <FooterNavigate previousPage="/about" />
            </div>
        </>
    )
}
