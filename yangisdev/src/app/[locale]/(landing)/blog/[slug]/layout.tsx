import { Post } from '@/types/post'

// Fix: generateStaticParams phải là server-side và không thể dùng hooks
export async function generateStaticParams() {
    try {
        // Thay vì dùng hook, gọi trực tiếp firebaseService
        const { firebaseService } = await import('@/lib/firebase/services')
        const posts: Post[] = await firebaseService.getAll('posts')

        return posts.map((post) => ({
            slug: post.slug,
        }))
    } catch (error) {
        console.error('Error generating static params:', error)
        return []
    }
}

// Fix: generateMetadata cần được sửa để fetch đúng data
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    try {
        const { slug } = await params
        const { firebaseService } = await import('@/lib/firebase/services')
        const posts: Post[] = await firebaseService.getByQuery(
            'posts',
            'slug',
            slug,
            1
        )
        const post = posts[0]

        if (!post) {
            return { title: 'Post Not Found' }
        }

        return {
            title: post.title,
            description: post.description,
            openGraph: {
                title: post.title,
                description: post.description,
                images: [post.thumbnail], // Fix: images phải là array
            },
        }
    } catch (error) {
        console.error('Error generating metadata:', error)
        return { title: 'Post Not Found' }
    }
}

export default function DetailPostLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
