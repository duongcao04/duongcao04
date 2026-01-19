import { type ReactNode, Suspense } from 'react'

import type { Metadata } from 'next'

import AppLoader from '@/app/loading'

export const metadata: Metadata = {
    title: 'Contact | Yangis.dev',
    description:
        'Web developer specializing in React, Node.js, and TypeScript. Based in Vietnam. Explore my portfolio showcasing web applications, mobile development, and cloud solutions.',
}

export default function ContactLayout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    return (
        <Suspense fallback={<AppLoader />}>
            <div className="-mt-20">
                <div className="pt-20 min-h-screen w-full bg-background selection:bg-purple-500 selection:text-text-default relative overflow-hidden pb-20">
                    {/* --- Background Effects --- */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none z-0"></div>
                    {/* Top Left Glow */}
                    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none"></div>
                    {/* Bottom Right Glow */}
                    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-600/10 blur-[120px] rounded-full pointer-events-none"></div>

                    {children}
                </div>
            </div>
        </Suspense>
    )
}
