import { type ReactNode } from 'react'

import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Admin Site | Yangis.dev',
}

export default function LandingLayout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    return (
        <div className="w-screen h-screen max-h-screen max-w-screen overflow-hidden">
            {children}
        </div>
    )
}
