import { Tag } from './_tag.interface'

export interface IPost {
    id: string
    title: string
    slug: string
    shortDescription?: string
    viShortDescription?: string
    description?: string
    viDescription?: string
    keywords?: string[]
    thumbnailUrl?: string
    bgCoverUrl?: string
    content: string
    tags?: string[] | Tag[]
    countView?: number
    createdAt?: string
    updatedAt?: string
}
