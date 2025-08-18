import { DocumentData, Query, getDocs } from 'firebase/firestore'

import { postsCollection } from '@/lib/firebase/config'
import { Post } from '@/types/article'

export async function index(query?: Query): Promise<Post[]> {
    let querySnapshot = null

    if (query) {
        querySnapshot = await getDocs(query)
    } else {
        querySnapshot = await getDocs(postsCollection)
    }

    const localPosts = querySnapshot.docs.map((doc: DocumentData) => {
        return { ...doc.data(), id: doc.id }
    })

    return localPosts as Post[]
}
