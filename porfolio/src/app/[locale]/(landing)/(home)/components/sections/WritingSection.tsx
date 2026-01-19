'use client'

import { Spinner } from '@heroui/react'
import { useQuery } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'

import { IPost } from '@/shared/interfaces'
import { postsListOptions } from '@/shared/queries'

import PostCard from '../cards/PostCard'
import SectionTag from '../section-tag'

export default function WritingSection() {
    const tTag = useTranslations()
    const { data, isLoading } = useQuery({ ...postsListOptions() })
    const posts = data?.posts || []

    return (
        <>
            <SectionTag title={tTag('writing')} seeMore />
            {!isLoading && (
                <div className="mt-5 flex flex-col tablet:grid tablet:grid-cols-2 gap-8">
                    {posts?.map((post: IPost) => (
                        <PostCard key={post.id} data={post} />
                    ))}
                </div>
            )}
            {isLoading && (
                <div className="w-full h-full flex items-center justify-center">
                    <Spinner size="lg" />
                </div>
            )}
        </>
    )
}
