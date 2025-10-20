import { Tag } from "./tag.interface"
import { Technology } from "./technology.interface"

export interface Project {
	id: string | number
	name: string
	displayName?: string
	description?: string
	viDescription?: string
	thumbnailUrl?: string
	screenshotUrls?: string[]
	referenceUrl?: string
	slug: string
	technologies?: string[] | Technology[]
	tags?: string[] | Tag[]
	content: string
	order?: number
	startedAt: string
	completedAt: string
	createdAt: string
	updatedAt: string
}
