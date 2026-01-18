import { Tag } from "./_tag.interface"
import { Technology } from "./_technology.interface"

export interface Project {
	id?: string | number
	name?: string
	displayName?: string
	description?: string
	viDescription?: string
	thumbnailUrl?: string
	verticalThumbnailUrl?: string
	screenshotUrls?: string[]
	referenceUrl?: string
	slug?: string
	technologies?: string[] | Technology[]
	tags?: string[] | Tag[]
	content?: string
	order?: number
	startedAt?: string
	completedAt?: string
	createdAt?: string
	updatedAt?: string
}
