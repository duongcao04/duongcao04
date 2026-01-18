'use client'

import { useCallback } from 'react'

import { useSearchParams } from 'next/navigation'

import { usePathname, useRouter } from '@/i18n/navigation'

export function useSearchParam() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()

    const setSearchParams = useCallback(
        (
            params: Record<string, string | null | undefined>,
            options: { replace?: boolean } = {}
        ) => {
            const newSearchParams = new URLSearchParams(searchParams)

            Object.entries(params).forEach(([key, value]) => {
                if (value === null || value === undefined || value === '') {
                    newSearchParams.delete(key)
                } else {
                    newSearchParams.set(key, value)
                }
            })

            const queryString = newSearchParams.toString()
            const newUrl = queryString ? `${pathname}?${queryString}` : pathname

            if (options.replace) {
                router.replace(newUrl)
            } else {
                router.push(newUrl)
            }
        },
        [searchParams, router, pathname]
    )

    const getSearchParam = useCallback(
        (key: string) => {
            return searchParams.get(key)
        },
        [searchParams]
    )

    const getAllSearchParams = useCallback(() => {
        return Object.fromEntries(searchParams.entries())
    }, [searchParams])

    const removeSearchParam = useCallback(
        (paramKey: string, options: { replace?: boolean } = {}) => {
            const newSearchParams = new URLSearchParams(searchParams)
            newSearchParams.delete(paramKey)

            const queryString = newSearchParams.toString()
            const newUrl = queryString ? `${pathname}?${queryString}` : pathname

            if (options.replace) {
                router.replace(newUrl)
            } else {
                router.push(newUrl)
            }
        },
        [searchParams, router, pathname]
    )

    const removeSearchParams = useCallback(
        (paramKeys: string[], options: { replace?: boolean } = {}) => {
            const newSearchParams = new URLSearchParams(searchParams)

            paramKeys.forEach((key) => {
                newSearchParams.delete(key)
            })

            const queryString = newSearchParams.toString()
            const newUrl = queryString ? `${pathname}?${queryString}` : pathname

            if (options.replace) {
                router.replace(newUrl)
            } else {
                router.push(newUrl)
            }
        },
        [searchParams, router, pathname]
    )

    const removeAllSearchParams = useCallback(
        (options: { replace?: boolean } = {}) => {
            if (options.replace) {
                router.replace(pathname)
            } else {
                router.push(pathname)
            }
        },
        [router, pathname]
    )

    const hasSearchParam = useCallback(
        (key: string) => {
            return searchParams.has(key)
        },
        [searchParams]
    )

    const toggleSearchParam = useCallback(
        (key: string, value: string, options: { replace?: boolean } = {}) => {
            const currentValue = searchParams.get(key)

            if (currentValue === value) {
                removeSearchParam(key, options)
            } else {
                setSearchParams({ [key]: value }, options)
            }
        },
        [searchParams, setSearchParams, removeSearchParam]
    )

    const updateSearchParam = useCallback(
        (
            key: string,
            value: string | null | undefined,
            options: { replace?: boolean } = {}
        ) => {
            setSearchParams({ [key]: value }, options)
        },
        [setSearchParams]
    )

    const getSearchParamAsArray = useCallback(
        (key: string, separator: string = ',') => {
            const value = searchParams.get(key)
            return value ? value.split(separator).filter(Boolean) : []
        },
        [searchParams]
    )

    const setSearchParamAsArray = useCallback(
        (
            key: string,
            values: string[],
            separator: string = ',',
            options: { replace?: boolean } = {}
        ) => {
            const value = values.length > 0 ? values.join(separator) : null
            setSearchParams({ [key]: value }, options)
        },
        [setSearchParams]
    )

    const isEmpty = useCallback(() => {
        return searchParams.toString() === ''
    }, [searchParams])

    return {
        searchParams,
        setSearchParams,
        getSearchParam,
        getAllSearchParams,
        removeSearchParam,
        removeSearchParams,
        removeAllSearchParams,
        hasSearchParam,
        toggleSearchParam,
        updateSearchParam,
        getSearchParamAsArray,
        setSearchParamAsArray,
        isEmpty,
    }
}
