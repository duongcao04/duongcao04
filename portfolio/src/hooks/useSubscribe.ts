'use client'

import { useCallback, useEffect, useState } from 'react'

import { EventType, get, off, onValue, ref } from 'firebase/database'

import { database } from '@/lib/firebase/config'
import type { SubscribeOptions, SubscribeResult } from '@/types/firebase'

export const useSubscribe = <T>(
    path: string | null,
    options: SubscribeOptions<T> = {}
): SubscribeResult<T> => {
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<Error | null>(null)
    const [connected, setConnected] = useState<boolean>(true)

    const {
        transform = (data: unknown): T => data as T,
        enabled = true,
        onError = null,
        onConnected = null,
        onDisconnected = null,
    } = options

    useEffect(() => {
        if (!enabled || !path) {
            setLoading(false)
            return
        }

        setLoading(true)
        setError(null)

        const dbRef = ref(database, path)

        const unsubscribe = onValue(
            dbRef,
            (snapshot) => {
                try {
                    setLoading(false)
                    setError(null)
                    setConnected(true)

                    if (!snapshot.exists()) {
                        setData(null)
                        return
                    }

                    const rawData = snapshot.val() as unknown
                    const transformedData = transform(rawData)
                    setData(transformedData)

                    if (onConnected) {
                        onConnected()
                    }
                } catch (err) {
                    const error =
                        err instanceof Error
                            ? err
                            : new Error('Unknown error occurred')
                    setError(error)
                    setLoading(false)
                    if (onError) {
                        onError(error)
                    }
                }
            },
            (err) => {
                const error =
                    err instanceof Error
                        ? err
                        : new Error('Firebase connection error')
                setError(error)
                setLoading(false)
                setConnected(false)
                if (onError) {
                    onError(error)
                }
                if (onDisconnected) {
                    onDisconnected()
                }
            }
        )

        return () => {
            off(dbRef, unsubscribe as unknown as EventType | undefined)
        }
    }, [path, enabled, transform, onError, onConnected, onDisconnected])

    const refresh = useCallback(async (): Promise<void> => {
        if (!path) return

        try {
            setLoading(true)
            setError(null)
            const dbRef = ref(database, path)
            const snapshot = await get(dbRef)

            if (snapshot.exists()) {
                const rawData = snapshot.val() as unknown
                const transformedData = transform(rawData)
                setData(transformedData)
            } else {
                setData(null)
            }
        } catch (err) {
            const error =
                err instanceof Error ? err : new Error('Failed to refresh data')
            setError(error)
            if (onError) {
                onError(error)
            }
        } finally {
            setLoading(false)
        }
    }, [path, transform, onError])

    return {
        data,
        loading,
        error,
        connected,
        refresh,
    }
}
