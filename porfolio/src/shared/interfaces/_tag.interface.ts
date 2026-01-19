import { IPost } from './_post.interface'
import { IProjectTag } from './_project.interface'

export interface ITag {
    id: string
    code: string
    display_name: string
    hex_color: string | null

    // Relations
    project_tags?: IProjectTag[]
    posts?: IPost[]
}
