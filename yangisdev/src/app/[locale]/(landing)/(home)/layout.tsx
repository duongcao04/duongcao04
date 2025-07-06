import { Suspense } from 'react'

import AppLoader from '@/app/loading'

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return <Suspense fallback={<AppLoader />}>{children}</Suspense>
}
