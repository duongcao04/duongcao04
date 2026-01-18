import { Project } from '@/shared/interfaces/_project.interface'

import RelatedProjectCard from './RelatedProjectCard'

type Props = {
    data: Project[]
    isLoading?: boolean
}

export default function RelatedProjects({ data, isLoading = false }: Props) {
    return (
        <div className="size-full">
            <h2 className="text-xl font-semibold">Related projects</h2>
            <div className="size-full mt-3 grid grid-cols-3 gap-5">
                {data.map((project) => {
                    return (
                        <RelatedProjectCard
                            key={project?.id}
                            data={project}
                            isLoading={isLoading}
                        />
                    )
                })}
            </div>
        </div>
    )
}
