'use client'

import { useRef, useState } from 'react'

import { Divider } from '@heroui/react'
import ReactQuill from 'react-quill-new'
import 'react-quill-new/dist/quill.snow.css'

import { MotionDiv, cn } from '@/lib'

import { ScrollArea, ScrollBar } from '../ui/scroll-area'
import { EditorToolbar, formats, modules } from './EditorToolbar'
import { FloatingToolbar } from './FloatingToolbar'

interface QuillEditorProps {
    value: string
    onChange: (value: string) => void
    classNames?: {
        base?: string
        wrapper?: string
        scrollarea?: string
    }
    scrollable?: boolean
}

export default function QuillEditor({
    value,
    onChange,
    classNames,
    scrollable = true,
}: QuillEditorProps) {
    const quillRef = useRef<ReactQuill>(null)

    // State for Floating Toolbar (Bubble)
    const [floatingPos, setFloatingPos] = useState({
        top: 0,
        left: 0,
        visible: false,
    })

    // Handle Selection for Floating Toolbar
    const handleSelectionChange = (range: any, source: string, editor: any) => {
        if (source === 'silent') return
        if (range && range.length > 0) {
            const bounds = editor.getBounds(range.index, range.length)
            setFloatingPos({
                top: bounds.top,
                left: bounds.left + bounds.width / 2,
                visible: true,
            })
        } else {
            setFloatingPos((prev) => ({ ...prev, visible: false }))
        }
    }

    const Comp = scrollable ? ScrollArea : MotionDiv

    return (
        <div
            className={cn(
                'w-full rounded-lg shadow-2xl bg-background text-text-default border border-border-muted',
                classNames?.base
            )}
        >
            <Comp className={classNames?.scrollarea}>
                {scrollable && <ScrollBar orientation="horizontal" />}
                {scrollable && <ScrollBar orientation="vertical" />}
                {/* 1. FIXED TOOLBAR (Top) */}
                <EditorToolbar quillRef={quillRef} />

                <Divider />

                {/* 2. FLOATING TOOLBAR (Bubble) */}
                <div
                    className={cn(
                        'relative max-w-4xl mx-auto',
                        classNames?.wrapper
                    )}
                >
                    <FloatingToolbar
                        position={floatingPos}
                        quillRef={quillRef}
                    />

                    {/* 3. EDITOR AREA */}
                    <ReactQuill
                        ref={quillRef}
                        theme="snow"
                        value={value}
                        onChange={onChange}
                        onChangeSelection={handleSelectionChange}
                        modules={modules}
                        formats={formats}
                        className="custom-dark-editor prose prose-invert prose-lg text-text-default max-w-none prose-headings:text-text-default prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-p:text-text-7 dark:prose-p:text-text-2 prose-p:leading-relaxed prose-li:text-text-7 dark:prose-li:text-text-2 prose-strong:text-text-default prose-strong:font-semibold prose-a:text-primary-400 prose-a:underline hover:prose-a:text-primary-300 prose-hr:border-white/10 prose-hr:my-12 prose-blockquote:border-l-primary-500 prose-blockquote:bg-white/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:not-italic prose-blockquote:rounded-r-lg"
                        placeholder="Start writing..."
                    />
                </div>

                {/* 4. CSS Overrides for Dark Mode / Clean Look */}
                <style jsx global>{`
                    /* Remove Default Borders */
                    .custom-dark-editor .ql-container.ql-snow {
                        border: none !important;
                        font-family: 'Inter', sans-serif;
                    }

                    /* Hide the native Quill tooltip (we have our own UI) */
                    .ql-tooltip {
                        z-index: 100 !important;
                    }
                `}</style>
            </Comp>
        </div>
    )
}
