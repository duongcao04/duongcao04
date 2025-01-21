import React from 'react'

import { useLocale, useTranslations } from 'next-intl'

import { Button } from '@/components/ui/button'

import { MotionH1, MotionH3 } from '@/lib/motion'
import { formatSemiFullDate } from '@/utils/format'

import PostCard from './components/cards/post-card'

function PostsPage() {
    const t = useTranslations('posts')
    const locale = useLocale()

    const currentDate = new Date()
    const formattedCurrentDate = formatSemiFullDate(currentDate, locale)

    return (
        <div className="mt-20 container">
            <MotionH1 className="font-preahvihear tracking-wider">
                {t('title')}
            </MotionH1>
            <MotionH3 className="text-base opacity-70 tracking-widest">
                {formattedCurrentDate} · 3{' '}
                <span className="lowercase">{t('title')}</span>
            </MotionH3>

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

export default PostsPage
