import mongoose from 'mongoose'

export interface Post {
    _id: string
    title: string
    description: string
    thumbnail: string
    content: string
    slug: string
    is_publish: boolean
    created_at: string
}

/* PostSchema will correspond to a collection in your MongoDB database. */
const PostSchema = new mongoose.Schema<Post>({
    title: {
        type: String,
        required: [true, 'Please provide a title.'],
        maxlength: [60, 'Title cannot be more than 60 characters'],
    },
    slug: {
        type: String,
        required: [true, 'Please provide slug for this post.'],
        maxlength: [100, 'slug cannot be more than 100 characters'],
    },
    description: {
        type: String,
        required: [true, 'Please provide a short description for this post.'],
        maxlength: [255, 'Description cannot be more than 255 characters'],
    },
    content: {
        type: String,
        required: [true, 'Please provide content.'],
    },
    is_publish: {
        type: Boolean,
        default: false,
    },
    thumbnail: {
        type: String,
        required: [true, 'Please provide thumbnail for this post.'],
    },
    created_at: {
        required: [true, 'Please provide time created post.'],
        type: String,
    },
})

export default mongoose.models.Post || mongoose.model<Post>('Post', PostSchema)
