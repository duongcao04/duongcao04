import { queryOptions } from '@tanstack/react-query'

import { createClient } from '../../../lib/supabase/client'
import { IPost } from '../../interfaces'
import { PostFilters, postKeys } from '../keys/posts.keys'

const supabase = createClient()

// --- 1. FETCH SINGLE POST ---
export const getPostBySlug = async (slug: string) => {
    const { data, error } = await supabase
        .from('posts')
        .select(
            `
      *,
      author:authors(*),
      tags(*),
      catalogs:post_catalogs(*)
    `
        )
        .eq('slug', slug)
        .single()

    if (error) throw error
    return data as IPost
}

// --- 2. FETCH LIST OF POSTS ---
export const getPosts = async ({
    search,
    catalog,
    tag,
    page = 1,
    pageSize = 9,
}: PostFilters) => {
    // Start building the query
    // Note: We select author, tags, and catalogs.
    // If filtering by catalog/tag, we must use "!inner" to ensure we only get posts that have them.
    let query = supabase
        .from('posts')
        .select(
            `
        *,
        author:authors(*),
        tags${tag ? '!inner' : ''}(*),
        catalogs:post_catalogs${catalog ? '!inner' : ''}(*)
    `,
            { count: 'exact' }
        )
        .eq('is_published', true)
        .order('published_at', { ascending: false })

    // Apply Filters
    if (search) {
        query = query.or(`title.ilike.%${search}%,excerpt.ilike.%${search}%`)
    }

    if (catalog) {
        query = query.eq('post_catalogs.name', catalog)
    }

    if (tag) {
        query = query.eq('tags.code', tag)
    }

    // Pagination
    const from = (page - 1) * pageSize
    const to = from + pageSize - 1
    query = query.range(from, to)

    const { data, error, count } = await query

    if (error) throw error

    return {
        data: data as IPost[],
        count,
    }
}

// --- 3. QUERY OPTIONS FACTORY ---
// This is the "UserQuery" pattern you asked for.
// You can pass these directly to useQuery() or prefetchQuery().

export const postQueries = {
    detail: (slug: string) =>
        queryOptions({
            queryKey: postKeys.detail(slug),
            queryFn: () => getPostBySlug(slug),
            enabled: !!slug, // Don't fetch if no slug
        }),

    list: (filters: PostFilters = {}) =>
        queryOptions({
            queryKey: postKeys.list(filters),
            queryFn: () => getPosts(filters),
            placeholderData: (prev) => prev, // Keep previous data while fetching new page
        }),
}
