import { useQuery } from '@tanstack/react-query'

import { projectOptions, projectsListOptions } from './options/project-queries'

export const useProjects = () => {
    return useQuery(projectsListOptions())
}

export const useProjectDetail = (slug: string) => {
    return useQuery(projectOptions(slug))
}
