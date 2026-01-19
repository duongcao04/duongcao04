import { ReactNode, Suspense } from 'react'

import AppLoader from '../../../loading'

export function generateStaticParams() {
    const locales = ['en', 'vi'] // Add your supported languages here

    return locales.map((locale) => ({
        locale: locale,
    }))
}

export default function BuildWebsitePage({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    return <Suspense fallback={<AppLoader />}>{children}</Suspense>
}
