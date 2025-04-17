'use client'

import { useEffect, useState } from 'react'

function usePreLoader() {
    const [isLoading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        setLoading(true)

        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])
    return { isLoading }
}

export default usePreLoader
