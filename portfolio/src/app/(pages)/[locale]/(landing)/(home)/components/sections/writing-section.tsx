'use client'

import React from 'react'

import { useTranslations } from 'next-intl'

import { useRealtimeSubscriptions } from '@/hooks/useRealtimeSubscriptions'

import { Post } from '@/types/post'

import PostCard from '../cards/PostCard'
import SectionTag from '../section-tag'

export default function WritingSection() {
    const tTag = useTranslations('app.common.tag')

    const { useSubscribeAll } = useRealtimeSubscriptions<Post>(`posts`)
    const { data: allPosts, loading } = useSubscribeAll({
        orderBy: 'createdAt',
    })

    console.log(allPosts)

    if (loading) return <p>Loading...</p>
    return (
        <>
            <SectionTag title={tTag('writing')} seeMore />
            <div className="mt-5 flex flex-col tablet:grid tablet:grid-cols-2 gap-8">
                <div>
                    {allPosts?.map((post: Post) => (
                        <PostCard key={post.id} data={post} />
                    ))}
                </div>
            </div>
        </>
    )
}
