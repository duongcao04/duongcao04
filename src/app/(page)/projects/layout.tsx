import type { ReactNode } from 'react'

import type { Metadata } from 'next'

import FooterNavigate from '@/components/common/footer-navigate'

export const metadata: Metadata = {
    title: 'Projects | Yangis',
    description:
        'Web developer specializing in React, Node.js, and TypeScript. Based in Vietnam. Explore my portfolio showcasing web applications, mobile development, and cloud solutions.',
}

export default function ProjectsLayout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    return (
        <div className="pb-40">
            <div className="container px-5 mt-20 laptop:mt-32">{children}</div>
            <div className="fixed bottom-8 left-[50%] -translate-x-[50%] laptop:bottom-10">
                <FooterNavigate previousPage="/processes" nextPage="/goodbye" />
            </div>
        </div>
    )
}
