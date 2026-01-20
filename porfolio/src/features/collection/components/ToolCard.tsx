import React from 'react'

import { Image } from 'antd'
import Link from 'next/link'
import { encode } from 'querystring'

import { Tool } from '@/shared/types/_tool.type.'

import ToolTag from './ToolTag'

export default function ToolCard({ data: tool }: { data: Tool }) {
    const params = encode({
        url: tool.ref!,
        screenshot: true,
        meta: false,
        embed: 'screenshot.url',
        colorScheme: 'dark',
        'viewport.isMobile': true,
        'viewport.deviceScaleFactor': 1,
    })

    const toolThumbnail =
        tool.thumbnail?.length === 0
            ? `https://api.microlink.io/?${params}`
            : tool.thumbnail

    return (
        <div className="shadow-md border-border hover:shadow-lg transition-shadow duration-200 rounded-xl">
            <div className="block w-full aspect-video rounded-t-xl">
                <Image
                    src={toolThumbnail}
                    alt={tool.name!}
                    className="size-full aspect-video object-cover rounded-t-xl"
                />
            </div>
            <div className="bg-wallground p-3 rounded-b-xl">
                <Link
                    href={tool.ref!}
                    target="_blank"
                    className="hover:underline transition hover:text-blue-600 w-fit"
                >
                    <p className="font-semibold w-fit">{tool.name}</p>
                </Link>
                <p className="my-4 text-sm leading-loose min-h-22 tracking-wide line-clamp-3 min-h-">
                    {tool.description!}
                </p>
                <div className="flex items-center flex-wrap gap-2">
                    {tool.tag!.map((tag, idx) => {
                        return <ToolTag title={tag} key={idx} />
                    })}
                </div>
            </div>
        </div>
    )
}
