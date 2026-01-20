import { type ReactNode, Suspense } from 'react'

import type { Metadata } from 'next'

import AppLoader from '@/app/loading'

export const metadata: Metadata = {
    title: 'Blog | Yangis.dev',
    description:
        'Web developer specializing in React, Node.js, and TypeScript. Based in Vietnam. Explore my portfolio showcasing web applications, mobile development, and cloud solutions.',
}

export default function PostsLayout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    return (
        <Suspense fallback={<AppLoader />}>
            <div className="-mt-20">
                <div className="min-h-screen w-full bg-background relative">
                    {/*  Diagonal Cross Top Right Fade Grid Background */}
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `
        linear-gradient(45deg, transparent 49%, var(--text-disabled) 49%, var(--text-disabled) 51%, transparent 51%),
        linear-gradient(-45deg, transparent 49%, var(--text-disabled) 49%, var(--text-disabled) 51%, transparent 51%)
      `,
                            backgroundSize: '40px 40px',
                            WebkitMaskImage:
                                'radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)',
                            maskImage:
                                'radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)',
                        }}
                    />
                    <div className="pt-20">{children}</div>
                </div>
            </div>
        </Suspense>
    )
}
