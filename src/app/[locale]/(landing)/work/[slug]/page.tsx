import { PROJECTS } from '@/data/projects'
import { MotionH1 } from '@/lib/motion'

import ImageCarousel from './components/image-carousel'
import ProjectDetailMDX from './components/project-detail-mdx'

export default async function ProjectDetail({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const slug = (await params).slug
    const project = PROJECTS.find((item) => item.slug === slug)

    return (
        <div className="container mt-14 space-y-10">
            <MotionH1 className="text-2xl font-preahvihear tracking-wider bg-gradient-to-br from-primary-900 via-primary-600 to-primary-900 bg-clip-text text-transparent">
                {project?.feature_project}: {project?.name}
            </MotionH1>
            <section>
                <ImageCarousel data={project?.screenshots} />
            </section>
            <section>
                <ProjectDetailMDX data={project?.project_detail} />
            </section>
        </div>
    )
}
