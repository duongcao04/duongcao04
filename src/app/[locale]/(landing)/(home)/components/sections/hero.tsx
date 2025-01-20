import React from 'react'

import { useTranslations } from 'next-intl'

import Arrow from '@/components/icons/arrow'

import { MotionH1, MotionH2, MotionH3 } from '@/lib/motion'

import Avatar from '../avatar'

function Hero() {
    const t = useTranslations('home.hero')

    return (
        <>
            <div className="relative flex justify-start items-center gap-20">
                <Avatar />

                <div className="absolute top-5 left-64 flex items-start">
                    <Arrow />
                    <p className="mt-6 -ml-3 font-preahvihear text-lg">
                        {t('hello.prefix')}{' '}
                        <span className="text-primary">
                            {t('hello.fullName')}
                        </span>
                    </p>
                </div>

                <div className="flex flex-col justify-start">
                    <div className="mt-20 font-preahvihear space-y-3">
                        <MotionH2 className="text-xl underline underline-offset-2">
                            {t('slogan.head')}
                        </MotionH2>
                        <MotionH1 className="text-5xl leading-snug max-w-[550px]">
                            {t('slogan.body')}{' '}
                        </MotionH1>
                        <MotionH3 className="text-lg">
                            {t('slogan.foot')}
                        </MotionH3>
                    </div>
                </div>
            </div>

            <div className="mt-20">
                <MotionH1 className="text-5xl leading-snug font-preahvihear">
                    {t('about.title')}
                </MotionH1>
                <MotionH3 className="mt-5 text-xl leading-relaxed tracking-wider font-preahvihear max-w-[1000px]">
                    {t('about.desc.content')}
                </MotionH3>
                <MotionH3 className="mt-3 text-xl leading-relaxed tracking-wider font-preahvihear">
                    {t('about.desc.conclusion')}
                </MotionH3>
            </div>
        </>
    )
}

export default Hero
