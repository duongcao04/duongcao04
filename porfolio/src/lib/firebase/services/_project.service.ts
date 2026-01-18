import {
    addDoc,
    collection,
    getDocs,
    query,
    serverTimestamp,
    where,
} from 'firebase/firestore'

import { db } from '@/lib/firebase'

export const ProjectService = {
    // Lấy tất cả dự án của user
    getAll: async (userId: string) => {
        try {
            const projectsRef = collection(db, 'projects')
            const q = query(projectsRef, where('userId', '==', userId))

            const snapshot = await getDocs(q)

            return snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }))
        } catch (error) {
            console.error('Error fetching projects:', error)
            throw error
        }
    },

    // Tạo dự án mới
    create: async (
        userId: string,
        data: { name: string; description?: string }
    ) => {
        try {
            const docRef = await addDoc(collection(db, 'projects'), {
                ...data,
                userId,
                status: 'active',
                createdAt: serverTimestamp(),
            })
            return docRef.id
        } catch (error) {
            console.error('Error creating project:', error)
            throw error
        }
    },
}
