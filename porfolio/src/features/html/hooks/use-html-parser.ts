'use client'

import { createElement, useEffect, useMemo, useState } from 'react'

import parse, { DOMNode, Element, domToReact } from 'html-react-parser'

export interface TocItem {
    id: string
    text: string
    level: number
}

// Helper to slugify text
const slugify = (text: string) => {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
}

export const useHtmlParser = (content: string) => {
    const [activeId, setActiveId] = useState<string>('')

    // 1. Parse Content & Build TOC
    const { parsedContent, toc } = useMemo(() => {
        const items: TocItem[] = []
        const options = {
            replace: (domNode: DOMNode) => {
                if (
                    domNode instanceof Element &&
                    domNode.name.match(/^h[1-6]$/)
                ) {
                    const text = domToReact(
                        domNode.children as DOMNode[]
                    ).toString()

                    const id = slugify(text)
                    const level = parseInt(domNode.name.replace('h', ''))

                    items.push({ id, text, level })

                    return createElement(
                        domNode.name,
                        { id, className: 'scroll-mt-24' },
                        domToReact(domNode.children as DOMNode[], options)
                    )
                }
            },
        }

        const parsed = parse(content, options)
        return { parsedContent: parsed, toc: items }
    }, [content])

    // 2. Scroll Spy Logic
    useEffect(() => {
        if (toc.length === 0) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id)
                    }
                })
            },
            { rootMargin: '-20% 0px -35% 0px' }
        )

        toc.forEach((item) => {
            const element = document.getElementById(item.id)
            if (element) observer.observe(element)
        })

        return () => observer.disconnect()
    }, [toc])

    return { parsedContent, toc, activeId }
}
