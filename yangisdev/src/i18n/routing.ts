import { defineRouting } from 'next-intl/routing'

export type SupportLanguages = 'vi' | 'en'

export const routing = defineRouting({
    locales: ['en', 'vi'],
    defaultLocale: 'vi',
})
