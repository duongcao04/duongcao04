'use client'

import React from 'react'

import { useHtmlParser } from '../hooks/use-html-parser'

interface HtmlViewerProps {
    content: string
}

export function HtmlViewer({ content }: HtmlViewerProps) {
    // All logic is now handled inside the hook
    const { parsedContent } = useHtmlParser(content)

    return (
        <div className="lg:col-span-8">
            <div
                className="prose prose-invert prose-lg text-text-default max-w-none 
          prose-headings:text-text-default 
          prose-headings:font-bold
          prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
          prose-p:text-text-7 dark:prose-p:text-text-2 prose-p:leading-relaxed
          prose-li:text-text-7 dark:prose-li:text-text-2
          prose-strong:text-text-default prose-strong:font-semibold
          prose-a:text-primary-400 prose-a:underline hover:prose-a:text-primary-300
          prose-hr:border-white/10 prose-hr:my-12
          prose-blockquote:border-l-primary-500 prose-blockquote:bg-white/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:not-italic prose-blockquote:rounded-r-lg"
            >
                {parsedContent}
            </div>
        </div>
    )
}
