import {
    addDoc,
    collection,
    getDocs,
    orderBy,
    query,
    serverTimestamp,
    where,
} from 'firebase/firestore'

import { db } from '@/lib/firebase'
import { IPost } from '@/shared/interfaces'

export const PostService = {
    // Lấy tất cả bài viết của user hiện tại
    getAll: async (): Promise<IPost[]> => {
        try {
            const postsRef = collection(db, 'posts')
            // Tạo query: tìm theo userId, sắp xếp mới nhất
            const q = query(postsRef, orderBy('createdAt', 'desc'))

            const snapshot = await getDocs(q)

            // Map dữ liệu trả về
            return snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }))
        } catch (error) {
            console.error('Error fetching posts:', error)
            throw error
        }
    },

    getDetail: async (slug: string) => {
        try {
            const postsRef = collection(db, 'posts')
            // Tạo query: tìm theo userId, sắp xếp mới nhất
            const q = query(
                postsRef,
                where('slug', '==', slug),
                orderBy('createdAt', 'desc')
            )

            const snapshot = await getDocs(q)

            // Map dữ liệu trả về
            return snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }))
        } catch (error) {
            console.error('Error fetching posts:', error)
            throw error
        }
    },

    // Tạo bài viết mới
    create: async (
        userId: string,
        data: { title: string; content: string }
    ) => {
        try {
            const docRef = await addDoc(collection(db, 'posts'), {
                ...data,
                userId,
                createdAt: serverTimestamp(), // Dùng giờ server của Google
            })
            return docRef.id
        } catch (error) {
            console.error('Error creating post:', error)
            throw error
        }
    },
}
