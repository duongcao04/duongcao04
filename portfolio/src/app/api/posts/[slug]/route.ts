import dbConnect from '@/lib/mongodb'
import Post from '@/models/Post'

export async function GET(slug: string) {
    try {
        await dbConnect()
        const post = await Post.findOne({ slug }).lean()

        if (!post) {
            return new Response(
                JSON.stringify({
                    message: `Post with slug "${slug}" not found.`,
                }),
                { status: 404, headers: { 'Content-Type': 'application/json' } }
            )
        }

        return new Response(JSON.stringify(post), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        })
    } catch (error) {
        console.error(error)
        return new Response(JSON.stringify({ status: 'failed' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        })
    }
}
