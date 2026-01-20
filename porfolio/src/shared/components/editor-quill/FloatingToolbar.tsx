'use client'

import React from 'react'

import { AnimatePresence, motion } from 'framer-motion'
import {
    Bold,
    Code,
    Italic,
    Link as LinkIcon,
    Strikethrough,
    Underline,
} from 'lucide-react'
import ReactQuill from 'react-quill-new'

interface FloatingToolbarProps {
    position: { top: number; left: number; visible: boolean }
    quillRef: React.RefObject<ReactQuill | null>
}

export const FloatingToolbar = ({
    position,
    quillRef,
}: FloatingToolbarProps) => {
    const handleFormat = (format: string, value: any = true) => {
        if (quillRef.current) {
            const editor = quillRef.current.editor
            editor?.format(format, value)
        }
    }

    return (
        <AnimatePresence>
            {position.visible && (
                <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    style={{
                        top: position.top - 10, // Float slightly above selection
                        left: position.left,
                        position: 'absolute',
                        zIndex: 50,
                        // centering is handled by x: "-50%" in framer or standard css transform
                        // Using pure CSS transform here to avoid conflict with motion's transform
                    }}
                    // We combine the absolute positioning with a translation to center it
                    className="flex items-center gap-1 p-1 bg-gray-900 text-white rounded-lg shadow-xl -translate-x-1/2 -translate-y-full origin-bottom"
                >
                    {/* Bold */}
                    <button
                        onMouseDown={(e) => {
                            e.preventDefault()
                            handleFormat('bold')
                        }}
                        className="p-1.5 hover:bg-gray-700 rounded transition-colors"
                    >
                        <Bold size={16} />
                    </button>

                    {/* Italic */}
                    <button
                        onMouseDown={(e) => {
                            e.preventDefault()
                            handleFormat('italic')
                        }}
                        className="p-1.5 hover:bg-gray-700 rounded transition-colors"
                    >
                        <Italic size={16} />
                    </button>

                    {/* Underline */}
                    <button
                        onMouseDown={(e) => {
                            e.preventDefault()
                            handleFormat('underline')
                        }}
                        className="p-1.5 hover:bg-gray-700 rounded transition-colors"
                    >
                        <Underline size={16} />
                    </button>

                    {/* Strikethrough */}
                    <button
                        onMouseDown={(e) => {
                            e.preventDefault()
                            handleFormat('strike')
                        }}
                        className="p-1.5 hover:bg-gray-700 rounded transition-colors"
                    >
                        <Strikethrough size={16} />
                    </button>

                    <div className="w-px h-4 bg-gray-600 mx-1" />

                    {/* Code */}
                    <button
                        onMouseDown={(e) => {
                            e.preventDefault()
                            handleFormat('code-block')
                        }}
                        className="p-1.5 hover:bg-gray-700 rounded transition-colors"
                    >
                        <Code size={16} />
                    </button>

                    {/* Link */}
                    <button
                        onMouseDown={(e) => {
                            e.preventDefault()
                            const url = prompt('Enter link URL:')
                            if (url) handleFormat('link', url)
                        }}
                        className="p-1.5 hover:bg-gray-700 rounded transition-colors"
                    >
                        <LinkIcon size={16} />
                    </button>

                    {/* Little arrow at the bottom */}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
                </motion.div>
            )}
        </AnimatePresence>
    )
}
