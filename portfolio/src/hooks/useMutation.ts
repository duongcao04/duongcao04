import { useCallback, useState } from 'react'

import type { MutationResult } from '@/types/firebase'

export type MutationFunction<TData> = (...args: unknown[]) => Promise<TData>

export const useMutation = <TData>(
    mutationFn: MutationFunction<TData>
): MutationResult<TData> => {
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<Error | null>(null)
    const [data, setData] = useState<TData | null>(null)

    const mutate = useCallback(
        async (...args: unknown[]): Promise<TData> => {
            try {
                setLoading(true)
                setError(null)
                const result = await mutationFn(...args)
                setData(result)
                return result
            } catch (err) {
                const error =
                    err instanceof Error ? err : new Error('Mutation failed')
                setError(error)
                throw error
            } finally {
                setLoading(false)
            }
        },
        [mutationFn]
    )

    const reset = useCallback((): void => {
        setData(null)
        setError(null)
        setLoading(false)
    }, [])

    return {
        mutate,
        loading,
        error,
        data,
        reset,
    }
}
