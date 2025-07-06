'use client'

import React from 'react'

import { Spinner } from '@heroui/react'
import { useTranslations } from 'next-intl'

import { useFirebaseData } from '@/hooks/useFirebase'

import { Post } from '@/types/post'

import PostCard from '../cards/PostCard'
import SectionTag from '../section-tag'

export default function WritingSection() {
    const tTag = useTranslations('app.common.tag')

    const { data: allPosts, loading } = useFirebaseData<Post>('posts')

    console.log(allPosts)

    return (
        <>
            <SectionTag title={tTag('writing')} seeMore />
            {!loading && (
                <div className="mt-5 flex flex-col tablet:grid tablet:grid-cols-2 gap-8">
                    {allPosts?.map((post: Post) => (
                        <PostCard key={post.id} data={post} />
                    ))}
                </div>
            )}
            {loading && (
                <div className="w-full h-full flex items-center justify-center">
                    <Spinner size="lg" />
                </div>
            )}
        </>
    )
}
