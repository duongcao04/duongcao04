import { ICategory } from './_category.interface'
import { ITag } from './_tag.interface'

export interface IProject {
    id: string
    slug: string
    title: string

    // Details
    role: string | null
    client: string | null
    platform: string | null
    description: string | null
    long_description: string | null

    // Case Study Sections
    challenge: string | null
    solution: string | null
    content: string | null
    features: string | null // or string[] if you parse the JSON/string

    // Media & URLs
    thumbnail_url: string | null
    deploy_url: string | null
    repository_url: string | null

    // Arrays
    services: string[]
    screenshot_urls: string[]

    // Dates (ISO Strings for JSON)
    started_at: string | null
    ended_at: string | null
    created_at: string
    updated_at: string

    categories: ICategory[]
    tags: ITag[]

    // Relations
    project_categories?: IProjectCategory[]
    project_tags?: IProjectTag[]
}

export interface IProjectCategory {
    project_id: string
    category_id: string

    // Relations
    project?: IProject
    category?: ICategory
}

export interface IProjectTag {
    project_id: string
    tag_id: string

    // Relations
    project?: IProject
    tag?: ITag
}
