import React from 'react'

import { useTranslations } from 'next-intl'

import Call from '@/components/icons/call'
import MailGun from '@/components/icons/main-gun'
import GithubSocialOutline from '@/components/icons/social-icons/github-social-outline'

import { MotionH2 } from '@/lib/motion'

import CopyTooltipCustomize from '../copy-tooltip-customize'
import ContactForm from '../forms/contact-form'

function GetInTouch() {
    const t = useTranslations('home.getInTouch')
    const email = 'contact@yangis.dev'

    const INFO = [
        { id: 1, icon: MailGun, value: email, canCopy: true },
        { id: 2, icon: Call, value: '(+84) 862 248 332', canCopy: false },
        {
            id: 3,
            icon: GithubSocialOutline,
            value: 'duongcao04',
            canCopy: false,
        },
    ]

    return (
        <div className="mt-5">
            <div className="space-y-2 font-preahvihear">
                <MotionH2>{t('title')}</MotionH2>
                <p>{t('desc')}</p>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-10">
                <ul className="mt-5 flex flex-col items-start gap-8">
                    {INFO.map((item) => (
                        <li key={item.id}>
                            <div className="flex items-center justify-center gap-1">
                                <div className="bg-primary-100 text-primary p-3 rounded-full">
                                    <div className="size-[24px]">
                                        <item.icon className="w-full h-full" />
                                    </div>
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
