/* eslint-disable @typescript-eslint/no-explicit-any */
// ------------------------------------------------------------------
// 1. DATA TRANSFORMATION HELPER
// ------------------------------------------------------------------
// Supabase returns: { project_tags: [ { tag: { name: "React" } } ] }
import { queryOptions } from '@tanstack/react-query'

import { createClient } from '@/lib/supabase/client'
import { IProject } from '@/shared/interfaces'

// We want: { tags: [ { name: "React" } ] }
const transformProject = (row: any): IProject => {
    return {
        ...row,
        // 1. Flatten the Categories (Junction -> Category)
        // Check if array exists, then map to get the inner 'category' object
        category: row.project_categories?.map((pc: any) => pc.category) || [],

        // 2. Flatten the Tags (Junction -> Tag)
        tags: row.project_tags?.map((pt: any) => pt.tag) || [],

        // 3. (Optional) Remove the raw junction data to clean up the object
        project_categories: undefined,
        project_tags: undefined,
    }
}

// ------------------------------------------------------------------
// 2. FETCH FUNCTIONS
// ------------------------------------------------------------------
const fetchProjects = async () => {
    const supabase = createClient()

    const { data, error } = await supabase
        .from('projects')
        .select(
            `
			*,
			project_categories (
				category:categories ( * )
			),
			project_tags (
				tag:tags ( * )
			)
		`
        )
        .order('created_at', { ascending: false })

    if (error) {
        throw new Error(error.message)
    }

    // Apply the transformation here
    return data?.map(transformProject) || []
}

const fetchProjectBySlug = async (slug: string) => {
    const supabase = createClient()

    const { data, error } = await supabase
        .from('projects')
        .select(
            `
			*,
			project_categories (
				category:categories ( * )
			),
			project_tags (
				tag:tags ( * )
			)
		`
        )
        .eq('slug', slug)
        .single() // Important: Expect only one result

    if (error) throw new Error(error.message)

    return transformProject(data)
}

export const projectsListOptions = () =>
    queryOptions({
        queryKey: ['projects'],
        queryFn: fetchProjects,
        staleTime: 1000 * 60 * 5, // 5 minutes
    })

export const projectOptions = (slug: string) =>
    queryOptions({
        queryKey: ['project', slug],
        queryFn: () => fetchProjectBySlug(slug),
        enabled: !!slug, // Only run if slug exists
        staleTime: 1000 * 60 * 30, // 30 minutes (details change less often)
    })
