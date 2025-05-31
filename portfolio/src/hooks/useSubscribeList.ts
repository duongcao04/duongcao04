'use client'

import { useCallback } from 'react'

import type {
    DatabaseDocument,
    SubscribeListOptions,
    SubscribeResult,
} from '@/types/firebase'

import { useSubscribe } from './useSubscribe'

type FirebaseRecord = Record<string, unknown>

export const useSubscribeList = <T extends DatabaseDocument>(
    path: string | null,
    options: SubscribeListOptions<T> = {}
): SubscribeResult<T[]> => {
    const {
        orderBy = 'createdAt',
        orderDirection = 'desc',
        filter = null,
        limit = null,
        ...otherOptions
    } = options

    const transform = useCallback(
        (data: unknown): T[] => {
            if (!data || typeof data !== 'object') return []

            const firebaseData = data as FirebaseRecord
            let items: T[] = Object.keys(firebaseData).map((key) => {
                const itemData = firebaseData[key]
                if (typeof itemData !== 'object' || itemData === null) {
                    throw new Error(`Invalid data structure for item ${key}`)
                }
                return {
                    id: key,
                    ...(itemData as Record<string, unknown>),
                } as T
            })

            if (filter && typeof filter === 'function') {
                items = items.filter(filter)
            }

            if (orderBy && typeof orderBy === 'string') {
                items.sort((a, b) => {
                    const aVal = (a as Record<string, unknown>)[orderBy] as
                        | number
                        | string
                        | undefined
                    const bVal = (b as Record<string, unknown>)[orderBy] as
                        | number
                        | string
                        | undefined

                    const aValue = aVal ?? 0
                    const bValue = bVal ?? 0

                    if (
                        typeof aValue === 'number' &&
                        typeof bValue === 'number'
                    ) {
                        return orderDirection === 'desc'
                            ? bValue - aValue
                            : aValue - bValue
                    }

                    const aStr = String(aValue)
                    const bStr = String(bValue)
                    return orderDirection === 'desc'
                        ? bStr.localeCompare(aStr)
                        : aStr.localeCompare(bStr)
                })
            }

            if (limit && typeof limit === 'number' && limit > 0) {
                items = items.slice(0, limit)
            }

            return items
        },
        [orderBy, orderDirection, filter, limit]
    )

    return useSubscribe<T[]>(path, {
        ...otherOptions,
        transform,
    })
}
