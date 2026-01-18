import { compileMDX } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import Link from 'next/link'

import ReturnBackButton from '@/shared/components/common/ReturnBackButton'

import { PROJECTS } from '@/shared/data/projects'
import { MotionH1 } from '@/lib/motion'

export default async function WorkDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const slug = (await params).slug
    const project = PROJECTS.find((item) => item.slug === slug)
    const { frontmatter } = await compileMDX<{
        title: string
        author: string
    }>({
        source: `
        ---
    title: RSC Frontmatter Example
    author: Duong
    ---
    # Hello World
    ---
    This is from Server Components!
    `,
        options: { parseFrontmatter: false },
    })

    return (
        <div className="mb-24">
            <section id="detail-page-heading" className="container mt-3">
                <ReturnBackButton />
                <MotionH1 className="mt-12 text-6xl font-lexendDeca font-semibold tracking-wider leading-normal bg-gradient-to-br from-primary-900 via-primary-600 to-primary-900 bg-clip-text text-transparent">
                    {project?.name}
                </MotionH1>
                <div className="mt-32">
                    <p>Link</p>
                    <Link href={'https://shop.yangis.dev'}>View website</Link>
                </div>
            </section>

            {project?.thumbnail && (
                <section className="mt-8">
                    <Image
                        src={project?.thumbnail}
                        alt={project?.name}
                        className="w-full aspect-video object-cover"
                        quality={100}
                    ></Image>
                </section>
            )}
            <section className="container mt-16">
                {/* <CustomMDX source={content} /> */}
            </section>
            <p>{frontmatter.author}</p>
        </div>
    )
}
