import { type ReactNode } from 'react'

import { Metadata } from 'next'

import { AdminHeader } from '../../../shared/components/layout/admin/AdminHeader'
import { AdminSidebar } from '../../../shared/components/layout/admin/AdminSidebar'

export const metadata: Metadata = {
    title: 'Admin Site | Yangis.dev',
}

export default function LandingLayout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    return (
        <div className="w-screen h-screen max-h-screen max-w-screen overflow-hidden">
            <AdminSidebar />

            {/* Main Content Area */}
            <div className="lg:pl-64 flex flex-col min-h-screen">
                <AdminHeader />
                <main className="flex-1 p-6 md:p-7">{children}</main>
            </div>
        </div>
    )
}
