import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { type Tool } from '@/data/tools'

import ToolTag from './tool-tag'

function ToolCard({ data: tool }: { data: Tool }) {
    return (
        <div className="shadow-md border-border hover:shadow-lg transition-shadow duration-200 rounded-xl">
            <Link href={tool.website} className="block" target="_blank">
                <Image
                    src={tool.thumbnail}
                    alt={tool.name}
                    className="w-full max-h-[223px] object-contain rounded-t-xl"
                />
            </Link>
            <div className="bg-wallground p-3 rounded-b-xl">
                <Link href={tool.website} target="_blank">
                    <p className="font-semibold">{tool.name}</p>
                </Link>
                <p className="my-4 text-sm leading-loose tracking-wide line-clamp-3">
                    {tool.desc}
                </p>
                <ToolTag title={tool.tag} />
            </div>
        </div>
    )
}

export default ToolCard
