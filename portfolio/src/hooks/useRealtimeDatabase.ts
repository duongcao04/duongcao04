'use client'

import { push, ref, remove, set } from 'firebase/database'

import { database } from '@/lib/firebase/config'
import type { DatabaseDocument, MutationResult } from '@/types/firebase'

import { useMutation } from './useMutation'

export interface CreateDocumentData extends Record<string, unknown> {
    [key: string]: unknown
}

export interface UpdateDocumentParams<
    T extends CreateDocumentData = CreateDocumentData,
> {
    id: string
    data: Partial<T>
}

export interface DatabaseHookReturn<T extends DatabaseDocument> {
    createDocument: MutationResult<T>
    updateDocument: MutationResult<T>
    deleteDocument: MutationResult<string>
}

export const useRealtimeDatabase = <T extends DatabaseDocument>(
    basePath: string
): DatabaseHookReturn<T> => {
    // Create document mutation
    const createDocument = useMutation<T>(async (...args: unknown[]) => {
        const [data] = args
        if (!data || typeof data !== 'object') {
            throw new Error('Invalid data provided for document creation')
        }

        const createData = data as CreateDocumentData
        const dbRef = ref(database, basePath)
        const timestamp = Date.now()
        const newDocRef = await push(dbRef, {
            ...createData,
            createdAt: timestamp,
            updatedAt: timestamp,
        })

        if (!newDocRef.key) {
            throw new Error('Failed to create document - no key returned')
        }

        return {
            id: newDocRef.key,
            ...createData,
            createdAt: timestamp,
            updatedAt: timestamp,
        } as T
    })

    // Update document mutation
    const updateDocument = useMutation<T>(async (...args: unknown[]) => {
        const [params] = args
        if (!params || typeof params !== 'object') {
            throw new Error('Invalid parameters provided for document update')
        }

        const { id, data } = params as UpdateDocumentParams
        if (!id || typeof id !== 'string') {
            throw new Error('Valid document ID is required for update')
        }

        const docRef = ref(database, `${basePath}/${id}`)
        const updateData = {
            ...data,
            updatedAt: Date.now(),
        }
        await set(docRef, updateData)
        return {
            id,
            ...updateData,
        } as T
    })

    // Delete document mutation
    const deleteDocument = useMutation<string>(async (...args: unknown[]) => {
        const [id] = args
        if (!id || typeof id !== 'string') {
            throw new Error('Valid document ID is required for deletion')
        }

        const docRef = ref(database, `${basePath}/${id}`)
        await remove(docRef)
        return id
    })

    return {
        createDocument,
        updateDocument,
        deleteDocument,
    }
}
