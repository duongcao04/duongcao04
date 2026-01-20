'use client'

import React, { useEffect, useState } from 'react'

import { ButtonProps } from '@heroui/react'
import {
    AlignCenter,
    AlignJustify,
    AlignLeft,
    AlignRight,
    Bold,
    Code,
    CodeXmlIcon,
    ImageUpIcon,
    Italic,
    Redo2Icon,
    RemoveFormatting,
    Strikethrough,
    Subscript,
    Superscript,
    TextQuoteIcon,
    Underline,
    Undo2Icon,
} from 'lucide-react'
import ReactQuill from 'react-quill-new'

import { HeroButton, HeroTooltip } from '@/shared/components'

// Adjust your import path
import HeaderSelect from './plugins/header-select'
import LinkPopover from './plugins/link-popover'
import ListSelect from './plugins/list-select'

// 1. Modules Configuration
export const modules = {
    toolbar: {
        container: '#toolbar',
        handlers: {
            // We define handlers here if we use standard ql-classes,
            // but we are also handling them manually in the JSX for better UI control.
            undo: function () {
                ;(this as any).quill.history.undo()
            },
            redo: function () {
                ;(this as any).quill.history.redo()
            },
        },
    },
    history: {
        delay: 500,
        maxStack: 100,
        userOnly: true,
    },
}

// 2. Allowed Formats
export const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'color',
    'background',
    'align',
    'script',
    'code-block',
    'code',
]

const buttonClassName =
    'size-8! px-2! max-w-8! min-w-0! flex items-center justify-center text-text-default! data-[active=true]:bg-primary-50 data-[active=true]:text-primary-600 hover:bg-background-hovered!'
const buttonProps: ButtonProps = {
    disableAnimation: true,
    size: 'sm',
    variant: 'light', // Changed to light so the active state is more visible
    isIconOnly: true,
}

type EditorToolbarProps = {
    quillRef: React.RefObject<ReactQuill | null>
}

export const EditorToolbar = ({ quillRef }: EditorToolbarProps) => {
    // Track active formats to highlight buttons
    const [activeFormats, setActiveFormats] = useState<Record<string, any>>({})

    // 3. Setup Listener for Cursor Changes
    useEffect(() => {
        const editor = quillRef.current?.getEditor()
        if (!editor) return

        const handleSelectionChange = () => {
            const range = editor.getSelection()
            if (range) {
                setActiveFormats(editor.getFormat(range))
            }
        }

        // Listen to selection changes
        editor.on('selection-change', handleSelectionChange)

        // Cleanup
        return () => {
            editor.off('selection-change', handleSelectionChange)
        }
    }, [quillRef])

    // --- Handlers ---

    const handleFormat = (format: string, value: any) => {
        quillRef.current?.getEditor().format(format, value)
        // Optimistically update state for immediate feedback
        setActiveFormats((prev) => ({ ...prev, [format]: value }))
    }

    const toggleFormat = (format: string) => {
        const currentValue = activeFormats[format]
        handleFormat(format, !currentValue)
    }

    const handleClearFormatting = () => {
        const editor = quillRef.current?.getEditor()
        if (!editor) return

        const range = editor.getSelection()
        if (range) {
            editor.removeFormat(range.index, range.length)
            setActiveFormats({})
        }
    }

    const handleUndo = () => quillRef.current?.getEditor().history.undo()
    const handleRedo = () => quillRef.current?.getEditor().history.redo()

    // Specific handler for images if you want custom logic later
    const handleImage = () => {
        const input = document.createElement('input')
        input.setAttribute('type', 'file')
        input.setAttribute('accept', 'image/*')
        input.click()
        input.onchange = () => {
            const file = input.files ? input.files[0] : null
            if (file && quillRef.current) {
                // Basic base64 insertion - replace with your Cloudinary logic here
                const reader = new FileReader()
                reader.onload = (e) => {
                    const range = quillRef.current!.getEditor().getSelection()
                    if (range) {
                        quillRef
                            .current!.getEditor()
                            .insertEmbed(range.index, 'image', e.target?.result)
                    }
                }
                reader.readAsDataURL(file)
            }
        }
    }

    return (
        <div
            id="toolbar"
            className="flex flex-wrap items-center justify-center! px-3 py-1.5! border-none! text-text-default rounded-t-lg sticky top-0 z-40 gap-y-2"
        >
            {/* --- Group 1: History --- */}
            <div className="flex gap-0.5 px-2 border-r border-border-default">
                <HeroTooltip content="Undo">
                    <HeroButton
                        className={buttonClassName}
                        {...buttonProps}
                        onPress={handleUndo}
                    >
                        <Undo2Icon size={16} />
                    </HeroButton>
                </HeroTooltip>
                <HeroTooltip content="Redo">
                    <HeroButton
                        className={buttonClassName}
                        {...buttonProps}
                        onPress={handleRedo}
                    >
                        <Redo2Icon size={16} />
                    </HeroButton>
                </HeroTooltip>
            </div>

            {/* --- Group 2: Insert --- */}
            <div className="flex gap-0.5 px-2 border-r border-border-default">
                <HeroTooltip content="Add image">
                    <HeroButton
                        className={buttonClassName}
                        {...buttonProps}
                        onPress={handleImage}
                    >
                        <ImageUpIcon size={16} />
                    </HeroButton>
                </HeroTooltip>
            </div>

            {/* --- Group 3: Blocks --- */}
            <div className="flex gap-0.5 px-2 border-r border-border-default items-center">
                {/* Custom Selects - they handle their own internal state/display */}
                <HeaderSelect
                    onFormatChange={(val) => handleFormat('header', val)}
                />
                <ListSelect
                    onFormatChange={(val) => handleFormat('list', val)}
                />

                <div className="w-px h-4 bg-border-default mx-1" />

                <HeroTooltip content="Blockquote">
                    <HeroButton
                        className={buttonClassName}
                        {...buttonProps}
                        data-active={activeFormats['blockquote']}
                        onPress={() => toggleFormat('blockquote')}
                    >
                        <TextQuoteIcon size={16} />
                    </HeroButton>
                </HeroTooltip>

                <HeroTooltip content="Codeblock">
                    <HeroButton
                        className={buttonClassName}
                        {...buttonProps}
                        data-active={activeFormats['code-block']}
                        onPress={() => toggleFormat('code-block')}
                    >
                        <CodeXmlIcon size={16} />
                    </HeroButton>
                </HeroTooltip>
            </div>

            {/* --- Group 4: Inline Formatting --- */}
            <div className="flex gap-0.5 px-2 border-r border-border-default">
                <HeroTooltip content="Bold">
                    <HeroButton
                        className={buttonClassName}
                        {...buttonProps}
                        data-active={activeFormats['bold']}
                        onPress={() => toggleFormat('bold')}
                    >
                        <Bold size={16} />
                    </HeroButton>
                </HeroTooltip>

                <HeroTooltip content="Italic">
                    <HeroButton
                        className={buttonClassName}
                        {...buttonProps}
                        data-active={activeFormats['italic']}
                        onPress={() => toggleFormat('italic')}
                    >
                        <Italic size={16} />
                    </HeroButton>
                </HeroTooltip>

                <HeroTooltip content="Strike">
                    <HeroButton
                        className={buttonClassName}
                        {...buttonProps}
                        data-active={activeFormats['strike']}
                        onPress={() => toggleFormat('strike')}
                    >
                        <Strikethrough size={16} />
                    </HeroButton>
                </HeroTooltip>

                <HeroTooltip content="Underline">
                    <HeroButton
                        className={buttonClassName}
                        {...buttonProps}
                        data-active={activeFormats['underline']}
                        onPress={() => toggleFormat('underline')}
                    >
                        <Underline size={16} />
                    </HeroButton>
                </HeroTooltip>

                <HeroTooltip content="Inline Code">
                    <HeroButton
                        className={buttonClassName}
                        {...buttonProps}
                        data-active={activeFormats['code']}
                        onPress={() => toggleFormat('code')}
                    >
                        <Code size={16} />
                    </HeroButton>
                </HeroTooltip>

                <HeroTooltip content="Clear Formatting">
                    <HeroButton
                        className={buttonClassName}
                        {...buttonProps}
                        onPress={handleClearFormatting}
                    >
                        <RemoveFormatting size={16} />
                    </HeroButton>
                </HeroTooltip>

                {/* <HeroTooltip content="Link">
                    <HeroButton
                        className={buttonClassName}
                        {...buttonProps}
                        data-active={!!activeFormats['link']}
                        onPress={() => {
                            const value = prompt('Enter link URL:')
                            if (value) handleFormat('link', value)
                        }}
                    >
                        <LinkIcon size={16} />
                    </HeroButton>
                </HeroTooltip> */}
                <LinkPopover quillRef={quillRef} />
            </div>

            {/* --- Group 5: Scripts --- */}
            <div className="flex gap-0.5 px-2 border-r border-border-default">
                <HeroTooltip content="Superscript">
                    <HeroButton
                        className={buttonClassName}
                        {...buttonProps}
                        data-active={activeFormats['script'] === 'super'}
                        onPress={() =>
                            handleFormat(
                                'script',
                                activeFormats['script'] === 'super'
                                    ? ''
                                    : 'super'
                            )
                        }
                    >
                        <Superscript size={16} />
                    </HeroButton>
                </HeroTooltip>

                <HeroTooltip content="Subscript">
                    <HeroButton
                        className={buttonClassName}
                        {...buttonProps}
                        data-active={activeFormats['script'] === 'sub'}
                        onPress={() =>
                            handleFormat(
                                'script',
                                activeFormats['script'] === 'sub' ? '' : 'sub'
                            )
                        }
                    >
                        <Subscript size={16} />
                    </HeroButton>
                </HeroTooltip>
            </div>

            {/* --- Group 6: Alignment --- */}
            <div className="flex gap-0.5 px-2">
                <HeroTooltip content="Align Left">
                    <HeroButton
                        className={buttonClassName}
                        {...buttonProps}
                        // 'align' is undefined for left usually, or explicit 'left'
                        data-active={!activeFormats['align']}
                        onPress={() => handleFormat('align', false)}
                    >
                        <AlignLeft size={16} />
                    </HeroButton>
                </HeroTooltip>

                <HeroTooltip content="Align Center">
                    <HeroButton
                        className={buttonClassName}
                        {...buttonProps}
                        data-active={activeFormats['align'] === 'center'}
                        onPress={() => handleFormat('align', 'center')}
                    >
                        <AlignCenter size={16} />
                    </HeroButton>
                </HeroTooltip>

                <HeroTooltip content="Align Right">
                    <HeroButton
                        className={buttonClassName}
                        {...buttonProps}
                        data-active={activeFormats['align'] === 'right'}
                        onPress={() => handleFormat('align', 'right')}
                    >
                        <AlignRight size={16} />
                    </HeroButton>
                </HeroTooltip>

                <HeroTooltip content="Justify">
                    <HeroButton
                        className={buttonClassName}
                        {...buttonProps}
                        data-active={activeFormats['align'] === 'justify'}
                        onPress={() => handleFormat('align', 'justify')}
                    >
                        <AlignJustify size={16} />
                    </HeroButton>
                </HeroTooltip>
            </div>
        </div>
    )
}
