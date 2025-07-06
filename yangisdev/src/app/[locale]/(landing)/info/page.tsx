import React from 'react'

import { useTranslations } from 'next-intl'
import Image from 'next/image'

import Avatar from '@/assets/img/avatar.jpg'

import AboutMeTabs from './components/about-me-tabs'

export default function InfoPage() {
    const t = useTranslations('aboutMe')
    const AVATAR_SIZE = 140

    return (
        <>
            <div
                id="Cover"
                className="container relative desktop:mt-10 aspect-[8/2] bg-gradient-to-r from-primary-500 via-orange-500 to-yellow-400 rounded-2xl"
            >
                <Image
                    id="Avatar"
                    src={Avatar}
                    alt="Avatar"
                    style={{ width: AVATAR_SIZE, bottom: -(AVATAR_SIZE / 2) }}
                    className="absolute aspect-square left-[50%] -translate-x-[50%] rounded-full ring-[3px] ring-offset-4 ring-green-500"
                />
            </div>
            <div
                style={{ marginTop: AVATAR_SIZE / 2 + 24 }}
                className="container mb-2"
            >
                <p className="text-center font-bold text-3xl">
                    {t('fullName')}
                </p>
                <p className="mt-3 text-center text-sm font-pacifico font-medium italic tracking-widest before:content-['\201D'] before:mr-2 after:ml-1 after:content-['\201C']">
                    Be all you can be.
                </p>
            </div>
            <AboutMeTabs />
            <div className="h-10 w-full bg-background"></div>
        </>
    )
}
