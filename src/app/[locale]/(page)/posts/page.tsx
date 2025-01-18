import React from 'react'

import { Button } from '@/components/ui/button'

import { MotionH1, MotionH3 } from '@/lib/motion'
import { formatSemiFullDate } from '@/utils/format'

import PostCard from './components/cards/post-card'

function Posts() {
    const currentDate = new Date()
    const formattedCurrentDate = formatSemiFullDate(currentDate)

    return (
        <div className="mt-20 container">
            <MotionH1 className="font-preahvihear tracking-wider">
                Posts
            </MotionH1>
            <MotionH3 className="text-base opacity-70 tracking-widest">
                {formattedCurrentDate} · 3 posts
            </MotionH3>

            <div className="mt-20 space-y-20">
                <PostCard />
                <PostCard />
                <PostCard />

                <div className="flex items-center justify-center">
                    <Button size={'lg'}>Load more</Button>
                </div>
            </div>
        </div>
    )
}

export default Posts
