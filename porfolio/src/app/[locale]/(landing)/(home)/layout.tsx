import { Suspense } from 'react'

import AppLoader from '@/app/loading'

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <Suspense fallback={<AppLoader />}>
            <div className="pb-24">{children}</div>
        </Suspense>
    )
}
