import type { ReactNode } from 'react'

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Yangis',
    description:
        'Web developer specializing in React, Node.js, and TypeScript. Based in Vietnam. Explore my portfolio showcasing web applications, mobile development, and cloud solutions.',
}

export default function HomeLayout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    return <div className="one-page">{children}</div>
}
