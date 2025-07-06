import React from 'react'

import { Image } from 'antd'
import Link from 'next/link'

import { Tool } from '@/types/tool'

import ToolTag from './tool-tag'

function ToolCard({ data: tool }: { data: Tool }) {
    return (
        <div className="shadow-md border-border hover:shadow-lg transition-shadow duration-200 rounded-xl">
            <div className="block w-full max-h-[223px] rounded-t-xl">
                <Image
                    src={tool.thumbnail!}
                    alt={tool.name!}
                    className="w-full max-h-[223px] object-contain rounded-t-xl"
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
                <p className="my-4 text-sm leading-loose tracking-wide line-clamp-3">
                    {tool.description!}
                </p>
                {tool.tag!.map((tag, idx) => {
                    return <ToolTag title={tag} key={idx} />
                })}
            </div>
        </div>
    )
}

export default ToolCard
