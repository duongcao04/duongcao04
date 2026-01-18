import React from 'react'

import { HeroUIProvider } from '@heroui/react'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

import AntdProvider from './AntProvider'
import TanstackQueryProvider from './TanstackQueryProvider'
import ThemeProvider from './ThemeProvider'

export default async function AppProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const messages = await getMessages()

    return (
        <TanstackQueryProvider>
            <NextIntlClientProvider messages={messages}>
                <ThemeProvider>
                    <AntdProvider>
                        <HeroUIProvider>{children}</HeroUIProvider>
                    </AntdProvider>
                </ThemeProvider>
            </NextIntlClientProvider>
        </TanstackQueryProvider>
    )
}
