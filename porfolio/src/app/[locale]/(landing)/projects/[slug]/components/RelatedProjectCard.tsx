'use client'

import { Skeleton } from '@heroui/react'
import { Image } from 'antd'
import { useLocale } from 'next-intl'

import { Project } from '@/shared/interfaces/_project.interface'

type Props = {
    data: Project
    isLoading?: boolean
}

export default function RelatedProjectCard({ data, isLoading = false }: Props) {
    const locale = useLocale()
    const thumbnailUrl = data?.verticalThumbnailUrl ?? ''
    const projectName = data?.displayName ?? ''
    const projectDescription =
        locale === 'vi' ? data?.viDescription : data?.description

    return (
        <div className="size-full rounded-lg p-2 border border-black">
            <Skeleton
                isLoaded={!isLoading}
                className="size-full aspect-video rounded-lg"
            >
                <Image
                    src={thumbnailUrl}
                    alt={projectName}
                    rootClassName="size-full rounded-lg object-cover border-1 border-black"
                    className="w-full !aspect-video rounded-lg object-cover"
                    preview={false}
                />
            </Skeleton>
            <div className="mt-1 space-y-2">
                <Skeleton
                    isLoaded={!isLoading}
                    className="w-[80%] h-full rounded-md"
                >
                    <p>{projectName}</p>
                </Skeleton>
                <Skeleton
                    isLoaded={!isLoading}
                    className="size-full rounded-md"
                >
                    <p className="line-clamp-2">{projectDescription}</p>
                </Skeleton>
            </div>
        </div>
    )
}
