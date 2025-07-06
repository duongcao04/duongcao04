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
    return <Suspense fallback={<AppLoader />}>{children}</Suspense>
}
