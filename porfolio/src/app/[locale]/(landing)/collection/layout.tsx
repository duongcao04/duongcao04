import { type ReactNode, Suspense } from 'react'

import type { Metadata } from 'next'

import AppLoader from '@/app/loading'

export const metadata: Metadata = {
    title: 'Collection | Yangis.dev',
    description: 'Faster website building tools.',
}

export default function CollectionLayout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    return <Suspense fallback={<AppLoader />}>{children}</Suspense>
}
