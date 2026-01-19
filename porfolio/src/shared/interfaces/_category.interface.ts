import { IProjectCategory } from './_project.interface'

export interface ICategory {
    id: string
    code: string
    display_name: string
    description: string | null
    hex_color: string | null

    // Relations
    project_categories?: IProjectCategory[]
}
