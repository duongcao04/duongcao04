'use client'

import React from 'react'

import { ThemeProvider } from '@/app/_providers'

function MyAppProvider({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
    )
}

export default MyAppProvider
