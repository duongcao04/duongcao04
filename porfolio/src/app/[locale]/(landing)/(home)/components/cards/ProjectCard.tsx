'use client'

import { Skeleton } from '@heroui/react'
import { Image } from 'antd'
import { encode } from 'querystring'

import { Link } from '@/i18n/navigation'
import { Project } from '@/shared/interfaces/_project.interface'

import TagCard from './TagCard'

type Props = {
    data?: Project
    isLoading?: boolean
    useRealtimeThumbnail?: boolean
}
export default function ProjectCard({
    data,
    isLoading = false,
    useRealtimeThumbnail = false,
}: Props) {
    const detailUrl = `/projects/${data?.slug}`
    const params = encode({
        url: data?.referenceUrl,
        screenshot: true,
        meta: false,
        embed: 'screenshot.url',
        colorScheme: 'dark',
        'viewport.isMobile': true,
        'viewport.deviceScaleFactor': 1,
    })

    const realtimeThumb = `https://api.microlink.io/?${params}`

    const projectThumbnail = useRealtimeThumbnail
        ? realtimeThumb
        : data?.thumbnailUrl

    return (
        <div className="border border-transparent hover:border-border hover:bg-gray-100 rounded-3xl transition duration-300">
            <div className="w-full h-fit bg-gray-100 rounded-3xl p-5 shadow-sm">
                <Skeleton
                    isLoaded={!isLoading}
                    className="size-full aspect-[4/2] rounded-2xl"
                >
                    <Image
                        src={projectThumbnail}
                        alt={data?.displayName}
                        rootClassName="size-full aspect-[4/2] shadow-sm"
                        className="size-full aspect-[4/2] rounded-2xl"
                        preview={false}
                    />
                </Skeleton>
            </div>
            <div className="px-5 py-4">
                <Skeleton
                    isLoaded={!isLoading}
                    className="w-full h-[24px] rounded-md mt-5"
                >
                    <div className="flex items-center justify-start gap-3 flex-wrap flex-shrink-0">
                        {data?.tags?.map((tag, idx) => {
                            return <TagCard key={idx} data={tag} />
                        })}
                    </div>
                </Skeleton>
                <Skeleton
                    isLoaded={!isLoading}
                    className="w-[80%] h-[24px] rounded-md mt-3"
                >
                    <Link href={detailUrl}>
                        <p className="text-lg font-semibold line-clamp-2 leading-inherit">
                            {data?.displayName}
                        </p>
                    </Link>
                </Skeleton>
            </div>
        </div>
    )
}
