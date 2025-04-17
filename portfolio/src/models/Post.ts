import mongoose, { Document, Model } from 'mongoose'

export interface Post {
    _id: string
    title: string
    description: string
    author: string
    thumbnail: string
    content: string
    tagName: string
    slug: string
    isPublished: boolean
    createdAt: string
    updatedAt: string
}

// extend Mongoose Document to get _id, createdAt, updatedAt, etc.
interface PostDocument extends Document {
    title: string
    description: string
    author: string
    thumbnail: string
    content: string
    tagName: string
    slug: string
    isPublished: boolean
    createdAt: Date
    updatedAt: Date
}

const PostSchema = new mongoose.Schema<PostDocument>(
    {
        title: {
            type: String,
            required: [true, 'Please provide a title.'],
            maxlength: [60, 'Title cannot be more than 60 characters'],
        },
        slug: {
            type: String,
            required: [true, 'Please provide slug for this post.'],
            maxlength: [100, 'Slug cannot be more than 100 characters'],
            unique: true,
        },
        description: {
            type: String,
            required: [
                true,
                'Please provide a short description for this post.',
            ],
            maxlength: [255, 'Description cannot be more than 255 characters'],
        },
        content: {
            type: String,
            required: [true, 'Please provide content.'],
        },
        author: {
            type: String,
            required: [true, 'Please provide the author name.'],
        },
        tagName: {
            type: String,
            required: [true, 'Please provide a tagName for this post.'],
        },
        thumbnail: {
            type: String,
            required: [true, 'Please provide thumbnail for this post.'],
        },
        isPublished: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true, // adds createdAt and updatedAt as Date fields
    }
)

const PostModel: Model<PostDocument> =
    mongoose.models.Post || mongoose.model<PostDocument>('Post', PostSchema)

export default PostModel
