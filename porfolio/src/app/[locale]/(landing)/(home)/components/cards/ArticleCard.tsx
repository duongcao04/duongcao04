import React from 'react'

import { Image } from 'antd'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'

import { Article } from '@/types/article'

dayjs.extend(localizedFormat)

type Props = {
    data: Article
}
export default function ArticleCard({ data }: Props) {
    return (
        <div className="w-[520px] bg-slate-100 rounded-2xl shadow-sm">
            <Image
                src={data.thumbnailUrl}
                alt={data.title}
                rootClassName="size-full rounded-2xl"
                className="size-full rounded-2xl"
                preview={false}
            />
            <div className="px-5 pt-3 pb-5 rounded-2xl">
                <p className="opacity-75">
                    {dayjs(data.createdAt).format('MMMM DD, YYYY').toString()} -
                    2 min read
                </p>
                <p className="my-2.5 text-2xl font-medium line-clamp-2">
                    {data.title}
                </p>
                <p className="text-base line-clamp-3">
                    {data.shortDescription}
                </p>
            </div>
        </div>
    )
}
