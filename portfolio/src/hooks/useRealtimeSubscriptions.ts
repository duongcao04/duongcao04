'use client'

import { useCallback } from 'react'

import type {
    DatabaseDocument,
    FilterFunction,
    SubscribeListOptions,
    SubscribeOptions,
    SubscribeResult,
} from '@/types/firebase'

import { useSubscribe } from './useSubscribe'
import { useSubscribeList } from './useSubscribeList'

export interface SubscriptionHookReturn<T extends DatabaseDocument> {
    useSubscribeAll: (options?: SubscribeListOptions<T>) => SubscribeResult<T[]>
    useSubscribeOne: (
        id: string | null,
        options?: SubscribeOptions<T | null>
    ) => SubscribeResult<T | null>
    useSubscribeFiltered: (
        filterFn: FilterFunction<T> | null,
        options?: SubscribeListOptions<T>
    ) => SubscribeResult<T[]>
}

export const useRealtimeSubscriptions = <T extends DatabaseDocument>(
    basePath: string
): SubscriptionHookReturn<T> => {
    // Subscribe to all documents
    const useSubscribeAll = useCallback(
        (options: SubscribeListOptions<T> = {}): SubscribeResult<T[]> => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            return useSubscribeList<T>(basePath, options)
        },
        [basePath]
    )

    // Subscribe to single document
    const useSubscribeOne = useCallback(
        (
            id: string | null,
            options: SubscribeOptions<T | null> = {}
        ): SubscribeResult<T | null> => {
            const path = id ? `${basePath}/${id}` : null
            // eslint-disable-next-line react-hooks/rules-of-hooks
            return useSubscribe<T | null>(path, {
                ...options,
                transform: (data: unknown) => {
                    if (!data || typeof data !== 'object') return null
                    return { id, ...(data as Record<string, unknown>) } as T
                },
            })
        },
        [basePath]
    )

    // Subscribe with custom filter
    const useSubscribeFiltered = useCallback(
        (
            filterFn: FilterFunction<T> | null,
            options: SubscribeListOptions<T> = {}
        ): SubscribeResult<T[]> => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            return useSubscribeList<T>(basePath, {
                ...options,
                filter: filterFn as ((item: T) => boolean) | undefined,
            })
        },
        [basePath]
    )

    return {
        useSubscribeAll,
        useSubscribeOne,
        useSubscribeFiltered,
    }
}
