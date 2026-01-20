'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/server'

export async function createPost(formData: FormData) {
    const supabase = createClient()

    // 1. Extract and format fields
    // Note: We remove category_ids/tag_ids from the main insert if they are handled by junction tables
    const postData = {
        id: crypto.randomUUID(),
        title: formData.get('title') as string,
        slug: formData.get('slug') as string,
        excerpt: formData.get('excerpt') as string,
        content: formData.get('content') as string,
        author_id: formData.get('authorId') as string,
        thumbnail_url: formData.get('thumbnailUrl') as string,
        is_published: formData.get('isPublished') === 'true',
        featured: formData.get('featured') === 'true',
        updated_at: formData.get('updatedAt') || new Date().toISOString(),
        created_at: formData.get('createdAt') || new Date().toISOString(),
    }

    // 2. Insert the Post
    const { data: post, error: postError } = await supabase
        .from('posts')
        .insert([postData])
        .select()
        .single()

    if (postError) {
        console.error('Post creation error:', postError)
        return { success: false, error: postError.message }
    }

    // 3. Handle Many-to-Many Relations (Junction Tables)
    const tagIds = formData.getAll('tags') as string[]
    const catalogIds = formData.getAll('catalogs') as string[]

    // Insert Tags
    if (tagIds.length > 0) {
        const tagJoins = tagIds.map((tagId) => ({
            post_id: post.id,
            tag_id: tagId,
        }))
        const { error: tagError } = await supabase
            .from('post_tags')
            .insert(tagJoins)
        if (tagError) console.error('Tag join error:', tagError)
    }

    // Insert Catalogs
    if (catalogIds.length > 0) {
        const catalogJoins = catalogIds.map((catId) => ({
            post_id: post.id,
            catalog_id: catId,
        }))
        const { error: catError } = await supabase
            .from('post_catalogs')
            .insert(catalogJoins)
        if (catError) console.error('Catalog join error:', catError)
    }

    revalidatePath('/blog')
    revalidatePath('/admin/post')
    redirect(`/admin/post/${post.id}`)
}

/**
 * Delete Post using Supabase Client
 */
export async function deletePost(id: string) {
    const supabase = await createClient()

    try {
        // If your DB has "On Delete Cascade" on foreign keys,
        // this will automatically clear junction tables.
        const { error } = await supabase.from('posts').delete().eq('id', id)

        if (error) throw error

        revalidatePath('/admin/post')
        revalidatePath('/blog')
        return { success: true }
    } catch (error: any) {
        console.error('Delete Error:', error)
        return {
            success: false,
            error: error.message || 'Failed to delete post',
        }
    }
}
