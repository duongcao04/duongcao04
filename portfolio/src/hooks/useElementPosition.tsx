import { useCallback, useState } from 'react'

interface ElementPosition {
    left: number | undefined
    right: number | undefined
    top: number | undefined
    bottom: number | undefined
}

export const useElementPosition = (): [
    ElementPosition,
    (node: HTMLElement | null) => void,
] => {
    const [position, setPosition] = useState<ElementPosition>({
        left: undefined,
        right: undefined,
        top: undefined,
        bottom: undefined,
    })

    const ref = useCallback((node: HTMLElement | null) => {
        if (node !== null) {
            const rect = node.getBoundingClientRect()
            setPosition({
                top: rect.top,
                bottom: rect.bottom,
                left: rect.left,
                right: rect.right,
            })
        }
    }, [])

    return [position, ref]
}
