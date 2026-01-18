'use client'

import { useQuery } from '@tanstack/react-query'

import { Project } from '@/shared/interfaces/_project.interface'
import { axiosClient } from '@/lib/axios'

export const useProjects = () => {
    const { data, isFetching, isLoading } = useQuery({
        queryKey: ['projects'],
        queryFn: async () => await axiosClient.get<Project[]>('/projects'),
        select: (res) => res?.data,
    })
    return {
        projects: data ?? new Array(2).fill(null),
        isLoading: isFetching || isLoading,
    }
}

export const useProjectDetail = (slug?: string) => {
    const { data, isFetching, isLoading } = useQuery({
        queryKey: ['projects', 'slug', slug],
        queryFn: () => {
            if (!slug) {
                return undefined
            }
            return axiosClient.get<Project>(`/projects/slug/${slug}`)
        },
        enabled: !!slug,
        select: (res) => res?.data,
    })
    return {
        project: data,
        isLoading: isFetching || isLoading,
    }
}
