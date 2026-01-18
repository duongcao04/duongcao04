'use client'

import { use } from 'react'

import { Skeleton } from '@heroui/react'
import { useLocale } from 'next-intl'

import TableOfContent from '@/shared/components/TableOfContent'

import { useProjectDetail, useProjects } from '@/shared/queries/useProject'

import ProjectDetailBreadcrumbs from './components/ProjectDetailBreadcrumbs'
import RelatedProjects from './components/RelatedProjects'

export default function ProjectDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const locale = useLocale()
    const { projects, isLoading: loadingProjects } = useProjects()
    const { slug } = use(params)
    const { project, isLoading } = useProjectDetail(slug)
    const content = project?.content ?? ''
    const projectName = project?.displayName ?? ''
    const projectDetailHref = `/projects/${slug}`
    const projectDescription =
        locale === 'vi' ? project?.viDescription : project?.description

    return (
        <div className="max-w-[1200px] pt-14 pb-16 px-8 mx-auto min-h-screen h-full">
            <div className="space-y-5">
                <Skeleton
                    isLoaded={!isLoading}
                    className="w-[500px] h-5 rounded-md"
                >
                    <ProjectDetailBreadcrumbs
                        label={projectName}
                        href={projectDetailHref}
                    />
                </Skeleton>
                <Skeleton
                    isLoaded={!isLoading}
                    className="w-[60%] h-full rounded-md"
                >
                    <h1 className="text-4xl font-bold">{projectName}</h1>
                </Skeleton>
                <Skeleton
                    isLoaded={!isLoading}
                    className="size-full rounded-md"
                >
                    <p className="text-lg">{projectDescription}</p>
                </Skeleton>
            </div>
            {/* <div>
                <Image
                    src={project?.thumbnailUrl}
                    alt={project?.displayName}
                    rootClassName="w-full aspect-video object-cover"
                    className="size-full rounded-md"
                    preview={false}
                />
                <h1>{project?.displayName}</h1>
            </div> */}
            <div className="mt-20 grid grid-cols-[250px_1fr_400px] gap-5 h-full">
                <div className="sticky top-24">
                    <TableOfContent source={content} />
                </div>
                <div className="max-w-[1200px] mx-auto bg-white">
                    {/* <MarkdownContent source={content} /> */}
                </div>
            </div>
            <RelatedProjects data={projects} isLoading={loadingProjects} />
        </div>
    )
}
