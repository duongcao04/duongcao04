import React from 'react'

import { useTranslations } from 'next-intl'
import Image from 'next/image'

import Arrow from '@/components/icons/arrow'

import AVATAR from '@/assets/my_avatar.png'
import { MotionH1, MotionH2, MotionH3 } from '@/lib/motion'

function Avatar() {
    return (
        <div className="relative">
            <div className="w-[230px] h-[275px] desktop:w-[385px] desktop:h-[430px] bg-red-500 blur-3xl rounded-full"></div>
            <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                <div className="relative">
                    <div className="size-[300px] bg-[#fffff063] blur-3xl"></div>
                    <Image
                        src={AVATAR}
                        alt="My avatar"
                        width={260}
                        height={260}
                        className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] size-[180px] desktop:size-[260px] rounded-full"
                    />
                </div>
            </div>
        </div>
    )
}

function FloatingSayHi({
    hello,
    prefix,
    fullName,
}: {
    hello: string
    prefix: string
    fullName: string
}) {
    return (
        <>
            <div className="absolute flex items-start -top-11 left-28 desktop:top-5 desktop:left-64">
                <Arrow />
                <p className="mt-6 -ml-3 font-preahvihear text-base desktop:text-lg">
                    <span>{hello} </span>
                    <span>{prefix} </span>
                    <span className="text-primary block desktop:inline-block">
                        {fullName}
                    </span>
                </p>
            </div>
        </>
    )
}

function Hero() {
    const t = useTranslations('home.hero')

    return (
        <>
            <div className="relative flex flex-col desktop:flex-row justify-start items-start desktop:items-center desktop:gap-20">
                <Avatar />
                <FloatingSayHi
                    hello={t('hello.hello')}
                    prefix={t('hello.prefix')}
                    fullName={t('hello.fullName')}
                />

                <div className="-mt-10 desktop:mt-0 flex flex-col justify-start">
                    <div className="mt-20 font-preahvihear space-y-2 desktop:space-y-3">
                        <MotionH2 className="text-base desktop:text-xl underline underline-offset-2">
                            {t('slogan.head')}
                        </MotionH2>
                        <MotionH1 className="text-3xl desktop:text-5xl desktop:leading-snug max-w-[550px]">
                            {t('slogan.body')}{' '}
                        </MotionH1>
                        <MotionH3 className="text-base desktop:text-lg">
                            {t('slogan.foot')}
                        </MotionH3>
                    </div>
                </div>
            </div>

            <hr className="mt-10 mb-5 desktop:hidden" />
            <div className="desktop:mt-20">
                <MotionH1 className="text-3xl leading-snug desktop:text-5xl desktop:leading-snug font-preahvihear">
                    {t('about.title')}
                </MotionH1>
                <MotionH3 className="mt-5 text-base leading-relaxed tracking-wider desktop:text-xl desktop:leading-relaxed desktop:tracking-wider font-preahvihear max-w-[1000px]">
                    {t('about.desc.content')}
                </MotionH3>
                <MotionH3 className="mt-3 text-base leading-relaxed tracking-wider desktop:text-xl desktop:leading-relaxed desktop:tracking-wider font-preahvihear">
                    {t('about.desc.conclusion')}
                </MotionH3>
            </div>
        </>
    )
}

export default Hero
