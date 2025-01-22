import React from 'react'

import { HeroUIProvider } from '@heroui/react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

import { ThemeProvider } from '@/app/_providers'

export default async function MyAppProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const messages = await getMessages()

    return (
        <NextIntlClientProvider messages={messages}>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <AppRouterCacheProvider>
                    <HeroUIProvider>{children}</HeroUIProvider>
                </AppRouterCacheProvider>
            </ThemeProvider>
        </NextIntlClientProvider>
    )
}
