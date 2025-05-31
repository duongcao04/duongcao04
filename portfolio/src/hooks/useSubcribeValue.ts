'use client'

import { useCallback } from 'react'

import type { SubscribeResult, SubscribeValueOptions } from '@/types/firebase'

import { useSubscribe } from './useSubscribe'

export const useSubscribeValue = <T>(
    path: string | null,
    options: SubscribeValueOptions<T> = {}
): SubscribeResult<T> => {
    const { defaultValue, ...otherOptions } = options

    const transform = useCallback(
        (data: unknown): T => {
            if (data !== null && data !== undefined) {
                return data as T
            }
            if (defaultValue !== undefined) {
                return defaultValue
            }
            return null as T
        },
        [defaultValue]
    )

    return useSubscribe<T>(path, {
        ...otherOptions,
        transform,
    })
}
