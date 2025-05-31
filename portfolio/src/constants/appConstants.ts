import { StaticImageData } from 'next/image'

import UkFlag from '@/assets/img/flag/uk_flag.svg'
import VietnamFlag from '@/assets/img/flag/vietnam_flag.svg'
import { SupportLanguages } from '@/i18n/routing'

import { NAVIGATES } from './navigates'

export const TECHSTACKS = [
    'Web developer',
    'Software Engineer',
    'Mobile Developer',
]

export type AppLanguage = {
    id: number | string
    locale: SupportLanguages
    name: string
    icon: StaticImageData
}
export const APP_LANGUAGES: AppLanguage[] = [
    {
        id: 1,
        locale: 'en',
        name: 'English',
        icon: UkFlag,
    },
    {
        id: 2,
        locale: 'vi',
        name: 'Tiếng Việt',
        icon: VietnamFlag,
    },
]

export { NAVIGATES }
