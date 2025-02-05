import type { ReactNode } from 'react'

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Collection | Yangis.dev',
    description: 'Faster website building tools.',
}

export default function CollectionLayout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    return children
}
