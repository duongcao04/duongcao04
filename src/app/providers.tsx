'use client'

import React from 'react'

import { HeroUIProvider } from '@heroui/react'

import { ThemeProvider } from '@/app/_providers'

function MyAppProvider({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <HeroUIProvider>{children}</HeroUIProvider>
        </ThemeProvider>
    )
}

export default MyAppProvider
