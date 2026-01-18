import { StaticImageData } from 'next/image'
import { IconType } from 'react-icons/lib'

import UkFlag from '@/assets/img/flag/uk_flag.svg'
import VietnamFlag from '@/assets/img/flag/vietnam_flag.svg'
import { SupportLanguages } from '@/i18n/routing'
import Facebook from '@/shared/components/icons/social-icons/facebook'
import GithubSocial from '@/shared/components/icons/social-icons/github-social'
import Linkedin from '@/shared/components/icons/social-icons/linkedin'

export const appName = 'Yangis'

export const TECHSTACKS = [
    'web developer',
    'software developer',
    'mobile developer',
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

export type Socials = 'facebook' | 'gmail' | 'tel' | 'github' | 'linkedin'
export const SOCIAL_NETWORKS: Record<Socials, string> = {
    facebook: 'https://www.facebook.com/duongcaodev',
    gmail: 'contact@yangis.dev',
    tel: '0862248332',
    github: 'https://www.github.com/duongcao04',
    linkedin: '#',
}

type FooterContact = {
    id: number | string
    title: Socials
    icon: IconType
    path: string
}
export const FOOTER_CONTACTS: FooterContact[] = [
    {
        id: 1,
        title: 'facebook',
        icon: Facebook,
        path: SOCIAL_NETWORKS['facebook'],
    },
    {
        id: 2,
        title: 'github',
        icon: GithubSocial,
        path: SOCIAL_NETWORKS['github'],
    },
    {
        id: 3,
        title: 'linkedin',
        icon: Linkedin,
        path: SOCIAL_NETWORKS['linkedin'],
    },
]
