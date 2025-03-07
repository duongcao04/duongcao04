import { type ReactNode } from 'react'

import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Home | Yangis.dev',
}

export default function HomeLayout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    return children
}
