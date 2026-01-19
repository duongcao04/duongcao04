import { IPost } from './_post.interface'

export interface IAuthor {
    id: string
    name: string
    role: string | null
    avatar_url: string | null
    bio: string | null

    // Relations
    posts?: IPost[]
}
