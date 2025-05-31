import React from 'react'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

import { ContainerTextFlip } from '@/components/ui/container-text-flip'

import Avatar from '@/assets/img/avatar.jpg'
import { TECHSTACKS } from '@/constants/appConstants'
import { MotionButton, MotionH1 } from '@/lib/motion'

export default function HeroSection() {
    const tButton = useTranslations('app.common.button')
    const tHero = useTranslations('home.hero')

    return (
        <div className="2xl:flex flex-col items-center justify-start">
            <div className="space-y-6">
                <div className="flex flex-col items-start 2xl:flex-row 2xl:items-center justify-start gap-5">
                    <MotionH1 className="text-5xl tablet:text-7xl inline-block font-lexendDeca font-bold tracking-wider">{`Hello, I'm `}</MotionH1>
                    <div className="flex items-center justify-start gap-6">
                        <Image
                            src={Avatar}
                            alt="avatar"
                            className="size-24 object-cover rounded-tl-[22px] rounded-tr-[28px] rounded-b-[30px] ring-2 ring-offset-2 ring-border shadow-square"
                        />
                        <MotionH1 className="text-5xl tablet:text-7xl font-lexendDeca font-bold bg-gradient-to-r from-primary-600 via-orange-600 to-orange-500 text-transparent bg-clip-text tracking-wider">
                            Duong Cao!
                        </MotionH1>
                    </div>
                </div>
                <MotionH1 className="text-5xl tablet:text-7xl inline-block font-lexendDeca font-bold text-[#8f9194] leading-snug 2xl:text-center tracking-wider">
                    {`I'm a `} <ContainerTextFlip words={TECHSTACKS} />
                </MotionH1>
            </div>
            <div className="mt-6 2xl:mt-10 max-w-[900px]">
                <p className="text-lg text-text-secondary 2xl:text-center tracking-wide leading-relaxed">
                    {tHero('slogan')}
                </p>
            </div>
            <div className="mt-10 flex flex-col items-start 2xl:flex-row 2xl:items-center justify-start gap-5">
                <Link href={'/build-website'} className="block">
                    <MotionButton className="shadow-md hover:shadow-2xl dark:hover:shadow-gray-800 text-lg px-8 py-3 border border-border rounded-full bg-primary-500 hover:bg-primary-600 transition duration-250 text-white capitalize">
                        {tButton('buildWebsite')}
                    </MotionButton>
                </Link>
                <Link href={'/info'} className="block">
                    <MotionButton className="shadow-sm hover:shadow-lg dark:hover:shadow-gray-800 text-lg px-8 py-3 border border-border rounded-full transition duration-250 bg-white dark:bg-black text-neutral-500">
                        {tButton('exploreNow')}
                    </MotionButton>
                </Link>
            </div>
        </div>
    )
}
