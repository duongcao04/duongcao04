'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

import {
    FirebaseEntity,
    clientFirebaseService,
    firebaseService,
} from '@/lib/firebase/services'

// Hook để fetch dữ liệu một lần
export const useFirebaseData = <T extends FirebaseEntity>(path: string) => {
    const [data, setData] = useState<T[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                setError(null)
                const result = await firebaseService.getAll<T>(path)
                console.log(result)

                setData(result)
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Unknown error')
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [path])

    const refetch = useCallback(async () => {
        try {
            setLoading(true)
            setError(null)
            const result = await firebaseService.getAll<T>(path)
            setData(result)
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Unknown error')
        } finally {
            setLoading(false)
        }
    }, [path])

    return { data, loading, error, refetch }
}

// Hook để fetch dữ liệu theo ID
export const useFirebaseDataById = <T extends FirebaseEntity>(
    path: string,
    id: string | null
) => {
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        if (!id) {
            setData(null)
            setLoading(false)
            return
        }

        const fetchData = async () => {
            try {
                setLoading(true)
                setError(null)
                const result = await firebaseService.getById<T>(path, id)
                setData(result)
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Unknown error')
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [path, id])

    return { data, loading, error }
}

// Hook để fetch dữ liệu theo query
export const useFirebaseQuery = <T extends FirebaseEntity>(
    path: string,
    childPath: string,
    value: unknown,
    limitCount?: number
) => {
    const [data, setData] = useState<T[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                setError(null)
                const result = await firebaseService.getByQuery<T>(
                    path,
                    childPath,
                    value,
                    limitCount
                )
                setData(result)
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Unknown error')
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [path, childPath, value, limitCount])

    const refetch = useCallback(async () => {
        try {
            setLoading(true)
            setError(null)
            const result = await firebaseService.getByQuery<T>(
                path,
                childPath,
                value,
                limitCount
            )
            setData(result)
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Unknown error')
        } finally {
            setLoading(false)
        }
    }, [path, childPath, value, limitCount])

    return { data, loading, error, refetch }
}

// Hook để lắng nghe realtime data
export const useFirebaseRealtime = <T extends FirebaseEntity>(path: string) => {
    const [data, setData] = useState<T[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const unsubscribeRef = useRef<(() => void) | null>(null)

    useEffect(() => {
        try {
            setLoading(true)
            setError(null)

            // Subscribe to realtime updates
            const unsubscribe = clientFirebaseService.subscribe<T>(
                path,
                (newData) => {
                    setData(newData)
                    setLoading(false)
                }
            )

            unsubscribeRef.current = unsubscribe

            // Cleanup function
            return () => {
                if (unsubscribeRef.current) {
                    unsubscribeRef.current()
                }
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Unknown error')
            setLoading(false)
        }
    }, [path])

    return { data, loading, error }
}

// Hook để thực hiện các operations (CRUD)
export const useFirebaseOperations = <T extends FirebaseEntity>(
    path: string
) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const add = useCallback(
        async (data: Omit<T, 'id'>) => {
            try {
                setLoading(true)
                setError(null)
                const id = await firebaseService.push(path, data)
                return id
            } catch (err) {
                const errorMessage =
                    err instanceof Error ? err.message : 'Unknown error'
                setError(errorMessage)
                throw err
            } finally {
                setLoading(false)
            }
        },
        [path]
    )

    const update = useCallback(
        async (id: string, data: Partial<Omit<T, 'id'>>) => {
            try {
                setLoading(true)
                setError(null)
                await firebaseService.updateById(path, id, data)
            } catch (err) {
                const errorMessage =
                    err instanceof Error ? err.message : 'Unknown error'
                setError(errorMessage)
                throw err
            } finally {
                setLoading(false)
            }
        },
        [path]
    )

    const remove = useCallback(
        async (id: string) => {
            try {
                setLoading(true)
                setError(null)
                await firebaseService.removeById(path, id)
            } catch (err) {
                const errorMessage =
                    err instanceof Error ? err.message : 'Unknown error'
                setError(errorMessage)
                throw err
            } finally {
                setLoading(false)
            }
        },
        [path]
    )

    const set = useCallback(
        async (data: T) => {
            try {
                setLoading(true)
                setError(null)
                await firebaseService.set(`${path}/${data.id}`, data)
            } catch (err) {
                const errorMessage =
                    err instanceof Error ? err.message : 'Unknown error'
                setError(errorMessage)
                throw err
            } finally {
                setLoading(false)
            }
        },
        [path]
    )

    return {
        add,
        update,
        remove,
        set,
        loading,
        error,
    }
}

// Hook kết hợp để quản lý toàn bộ CRUD operations với realtime data
export const useFirebaseCollection = <T extends FirebaseEntity>(
    path: string
) => {
    const {
        data,
        loading: dataLoading,
        error: dataError,
    } = useFirebaseRealtime<T>(path)
    const {
        add,
        update,
        remove,
        set,
        loading: operationLoading,
        error: operationError,
    } = useFirebaseOperations<T>(path)

    return {
        data,
        loading: dataLoading || operationLoading,
        error: dataError || operationError,
        add,
        update,
        remove,
        set,
    }
}

// Hook để tìm kiếm và pagination
export const useFirebaseSearch = <T extends FirebaseEntity>() => {
    const [results, setResults] = useState<T[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const search = useCallback(
        async (
            path: string,
            childPath: string,
            value: unknown,
            limitCount = 10
        ) => {
            try {
                setLoading(true)
                setError(null)
                const result = await firebaseService.getByQuery<T>(
                    path,
                    childPath,
                    value,
                    limitCount
                )
                setResults(result)
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Unknown error')
            } finally {
                setLoading(false)
            }
        },
        []
    )

    const clear = useCallback(() => {
        setResults([])
        setError(null)
    }, [])

    return {
        results,
        loading,
        error,
        search,
        clear,
    }
}

// Hook để batch operations
export const useFirebaseBatch = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const batchUpdate = useCallback(
        async (
            operations: Array<{
                path: string
                data: unknown
                operation: 'set' | 'update' | 'remove'
            }>
        ) => {
            try {
                setLoading(true)
                setError(null)

                const promises = operations.map(
                    async ({ path, data, operation }) => {
                        switch (operation) {
                            case 'set':
                                return firebaseService.set(path, data)
                            case 'update':
                                return firebaseService.update(
                                    path,
                                    data as Partial<unknown>
                                )
                            case 'remove':
                                return firebaseService.remove(path)
                            default:
                                throw new Error(
                                    `Unknown operation: ${operation}`
                                )
                        }
                    }
                )

                await Promise.all(promises)
            } catch (err) {
                const errorMessage =
                    err instanceof Error ? err.message : 'Unknown error'
                setError(errorMessage)
                throw err
            } finally {
                setLoading(false)
            }
        },
        []
    )

    return {
        batchUpdate,
        loading,
        error,
    }
}
