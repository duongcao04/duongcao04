import React from 'react'

import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Dashboard | Yangis.dev',
}

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
