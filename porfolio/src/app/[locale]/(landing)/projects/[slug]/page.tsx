import React, { use } from 'react'

export default function ProjectDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = use(params)
    console.log(slug)

    return <div>ProjectDetailPage</div>
}
