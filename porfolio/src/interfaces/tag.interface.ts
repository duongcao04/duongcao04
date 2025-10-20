import { Project } from "./project.interface"

export interface Tag {
	id: string
	displayName: string
	viDisplayName?: string
	description?: string
	viDescription?: string
	projects?: string[] | Project[]
}