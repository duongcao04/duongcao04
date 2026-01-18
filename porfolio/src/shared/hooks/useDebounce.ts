import { useEffect, useRef, useState } from 'react'

export function useDebounce<T>(value: T, delay: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value)
    const isFirstRun = useRef(true)

    useEffect(() => {
        // Skip debounce on the first render
        if (isFirstRun.current) {
            isFirstRun.current = false
            setDebouncedValue(value)
            return
        }

        // Do not debounce if input is empty
        if (value === '' || value === null || value === undefined) {
            setDebouncedValue(value)
            return
        }

        const timer = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => clearTimeout(timer)
    }, [value, delay])

    return debouncedValue
}
