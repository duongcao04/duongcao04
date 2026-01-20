import { type ReactNode, Suspense } from 'react'

import type { Metadata } from 'next'

import AppLoader from '@/app/loading'

export const metadata: Metadata = {
    title: 'Work | Yangis.dev',
    description:
        'Web developer specializing in React, Node.js, and TypeScript. Based in Vietnam. Explore my portfolio showcasing web applications, mobile development, and cloud solutions.',
}

export default function WorkLayout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    return (
        <Suspense fallback={<AppLoader />}>
            <div className="-mt-20">
                <div className="min-h-screen w-full bg-background relative overflow-hidden scroll-smooth">
                    {/* Background Texture/Noise */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none z-0"></div>
                    {children}
                </div>
            </div>
        </Suspense>
    )
}
