import { Project } from "./_project.interface"

export interface Tag {
	id: string
	code: string
	hexColor?: string
	displayName: string
	viDisplayName?: string
	description?: string
	viDescription?: string
	projects?: string[] | Project[]
}