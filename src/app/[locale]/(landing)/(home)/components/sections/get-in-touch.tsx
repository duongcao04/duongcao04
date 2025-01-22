import React from 'react'

import { useTranslations } from 'next-intl'

import Call from '@/components/icons/call'
import MailGun from '@/components/icons/main-gun'
import GithubSocialOutline from '@/components/icons/social-icons/github-social-outline'

import { MotionH2 } from '@/lib/motion'

import CopyTooltipCustomize from '../copy-tooltip-customize'
import ContactForm from '../forms/contact-form'

export const CONTACT_INFO = [
    { id: 1, icon: MailGun, value: 'contact@yangis.dev', canCopy: true },
    { id: 2, icon: Call, value: '(+84) 862 248 332', canCopy: false },
    {
        id: 3,
        icon: GithubSocialOutline,
        value: 'duongcao04',
        canCopy: false,
    },
]
function GetInTouch() {
    const t = useTranslations('home.getInTouch')

    return (
        <div className="mt-5">
            <div className="space-y-2 font-preahvihear">
                <MotionH2 className="text-2xl desktop:text-4xl">
                    {t('title')}
                </MotionH2>
                <p className='text-text-secondary'>{t('desc')}</p>
            </div>
            <div className="mt-8 desktop:mt-5 flex flex-col-reverse desktop:grid desktop:grid-cols-2 gap-10">
                <ul className="mt-5 flex flex-col items-start gap-8">
                    {CONTACT_INFO.map((item) => (
                        <li key={item.id}>
                            <div className="flex items-center justify-center gap-1">
                                <div className="bg-primary-100 text-primary p-3 rounded-full">
                                    <item.icon className="size-5 desktop:size-6" />
                                </div>
                                <CopyTooltipCustomize content={item.value} />
                            </div>
                        </li>
                    ))}
                </ul>
                <ContactForm />
            </div>
        </div>
    )
}

export default GetInTouch
