import React from 'react'

import { useLocale, useTranslations } from 'next-intl'

import { Button } from '@/components/ui/button'

import { MotionH1, MotionH4 } from '@/lib/motion'
import { formatSemiFullDate } from '@/utils/format'

import PostCard from './components/cards/post-card'
import PostSearchbar from './components/post-searchbar'

export default function WritingPage() {
    const t = useTranslations('posts')
    const locale = useLocale()

    const currentDate = new Date()
    const formattedCurrentDate = formatSemiFullDate(currentDate, locale)

    return (
        <div className="container pb-28">
            <div className="mt-20 desktop:mt-44 w-full flex flex-col gap-2">
                <MotionH1 className="bg-gradient-to-r from-primary-600 via-orange-600 to-yellow-600 inline-block text-transparent bg-clip-text text-7xl leading-normal">
                    {t('title')}
                </MotionH1>
                <MotionH4 className="mt-5 desktop:mt-9 mb-2 text-base text-text-secondary font-medium">
                    {formattedCurrentDate} · 3{' '}
                    <span className="lowercase">{t('title')}</span>
                </MotionH4>
                <PostSearchbar />
            </div>

            <div className="mt-20 space-y-20">
                <PostCard />
                <PostCard />
                <PostCard />

                <div className="flex items-center justify-center">
                    <Button size={'lg'}>{t('loadMoreButton')}</Button>
                </div>
            </div>
        </div>
    )
}
