import { DocumentData, Query, getDocs } from 'firebase/firestore'

import { postsCollection } from '@/lib/firebase/config'
import { Tool } from '@/types/tool'

export async function index(query?: Query): Promise<Tool[]> {
    let querySnapshot = null

    if (query) {
        querySnapshot = await getDocs(query)
    } else {
        querySnapshot = await getDocs(postsCollection)
    }

    const loadTools = querySnapshot.docs.map((doc: DocumentData) => {
        return { ...doc.data(), id: doc.id }
    })

    return loadTools as Tool[]
}
