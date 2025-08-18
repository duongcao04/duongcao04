import React from 'react'

import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import { encode } from 'querystring'

import { Work } from '@/types/work'

type Props = {
    data: Work
}

export default function RecentWorkCard({ data }: Props) {
    const params = encode({
        url: data.originalUrl!,
        screenshot: true,
        meta: false,
        embed: 'screenshot.url',
        colorScheme: 'dark',
        'viewport.isMobile': true,
        'viewport.deviceScaleFactor': 1,
    })

    const workThumbnail =
        data.thumbnailUrl &&
        typeof data.thumbnailUrl === 'string' &&
        data.thumbnailUrl?.length === 0
            ? `https://api.microlink.io/?${params}`
            : (data.thumbnailUrl as string | StaticImport)

    return (
        <div className="border border-transparent hover:border-border hover:bg-gray-100 rounded-3xl transition duration-300">
            <div className="w-full h-fit bg-gray-100 rounded-3xl p-5 shadow-sm">
                <div className="size-full shadown-sm">
                    <Image
                        src={workThumbnail}
                        alt={data.name!}
                        width={1440}
                        height={500}
                    />
                </div>
            </div>
            <div className="mt-5 px-5 py-4">
                <div className="flex items-center justify-start gap-3 flex-wrap flex-shrink-0">
                    {data.tags.map((tag, idx) => {
                        return <WorkTag key={idx} tagName={tag} />
                    })}
                </div>
                <div className="mt-3">
                    <p className="text-lg font-semibold line-clamp-2 leading-inherit">
                        {data.name} - {data.title}
                    </p>
                </div>
            </div>
        </div>
    )
}

function WorkTag({ tagName }: { tagName: string }) {
    return (
        <div className="px-3 py-0.5 text-sm font-semibold border-[1px] border-black rounded-lg">
            {tagName}
        </div>
    )
}
