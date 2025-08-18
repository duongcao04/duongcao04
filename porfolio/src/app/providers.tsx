import React from 'react'

import { AntdRegistry } from '@ant-design/nextjs-registry'
import { HeroUIProvider } from '@heroui/react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { ConfigProvider } from 'antd'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

import { ThemeProvider } from '@/app/_providers'
import theme from '@/theme/themeConfig'

export default async function MyAppProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const messages = await getMessages()

    return (
        <AntdRegistry>
            <ConfigProvider theme={theme}>
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
            </ConfigProvider>
        </AntdRegistry>
    )
}
