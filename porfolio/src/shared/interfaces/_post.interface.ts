import { IAuthor } from './_author.interface'
import { ITag } from './_tag.interface'

export interface IPost {
    id: string
    slug: string
    title: string
    excerpt: string
    content: string

    thumbnail_url: string | null

    published_at: string
    is_published: boolean

    // SEO / UI helpers
    reading_time: string | null
    featured: boolean

    created_at: string
    updated_at: string

    author_id: string

    // Relations
    related_posts?: IPost[]

    author?: IAuthor
    tags?: ITag[]
    catalogs?: IPostCatalog[]
}

export interface IPostCatalog {
    id: string
    name: string
    display_name: string
    description: string | null

    // Relations
    posts?: IPost[]
}
