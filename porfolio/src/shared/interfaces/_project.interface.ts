import { ICategory } from './_category.interface'
import { ITag } from './_tag.interface'

export interface IProject {
    id: string
    slug: string
    title: string
    category: ICategory[]
    role?: string
    started_at?: '2026/07/25'
    ended_at?: '2026/01/19'
    client?: string
    platform?: string
    services?: string[]
    description?: string
    long_description?: string
    challenge?: string
    solution?: string
    content?: string
    features?: string[]
    thumbnail_url?: string
    screenshot_urls?: string[]
    tags: ITag[]
    deploy_url?: string
    repository_url?: string
}
