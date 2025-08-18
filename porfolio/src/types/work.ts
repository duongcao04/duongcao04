import { StaticImport } from 'next/dist/shared/lib/get-img-props'

export type Work = {
    id: string | number
    name: string
    title?: string
    description?: string
    thumbnailUrl?: string | StaticImport
    screenshotUrls?: string[]
    originalUrl: string
    slug: string
    technologies: string[]
    tags: string[]
    content: string
    startedAt: string
    completedAt: string
    createdAt: string
    updatedAt: string
}
