import dbConnect from '@/lib/mongodb'
import Post from '@/models/Post'

export async function GET() {
    try {
        await dbConnect()
        const posts = await Post.find(
            {}
        ) /* find all the data in our database */
        return new Response(JSON.stringify(posts), {
            status: 200,
        })
    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify({ status: 'failed' }), {
            status: 200,
        })
    }
}
