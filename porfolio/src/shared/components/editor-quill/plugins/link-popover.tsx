'use client'

import React, { useState } from 'react'

import {
    Button,
    Input,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Switch,
} from '@heroui/react'
import { Check, ExternalLink, Link as LinkIcon, Trash2 } from 'lucide-react'
import ReactQuill from 'react-quill-new'

import { HeroButton, HeroTooltip } from '@/shared/components'

interface LinkPopoverProps {
    quillRef: React.RefObject<ReactQuill | null>
}

export default function LinkPopover({ quillRef }: LinkPopoverProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [url, setUrl] = useState('')
    const [openInNewTab, setOpenInNewTab] = useState(false)

    // Sync state when Popover opens (Read current link)
    const handleOpenChange = (open: boolean) => {
        setIsOpen(open)
        if (open && quillRef.current) {
            const editor = quillRef.current.getEditor()
            const range = editor.getSelection()
            if (range) {
                const format = editor.getFormat(range)
                // Check if link exists and cast it
                if (format.link) {
                    setUrl(format.link as string)
                    // Note: Detecting target="_blank" requires a custom Quill Blot.
                    // For now, we default to false or sticky state.
                } else {
                    setUrl('')
                    setOpenInNewTab(false)
                }
            }
        }
    }

    const handleSave = () => {
        if (quillRef.current) {
            const editor = quillRef.current.getEditor()

            // Standard Link application
            editor.format('link', url)

            // Handle Target (Optional - Standard Quill ignores this without a custom Blot)
            if (openInNewTab) {
                // This is a DOM-level hack for standard Quill.
                // For robust support, register a custom Link Blot.
                const range = editor.getSelection()
                if (range) {
                    // Finds the link node and sets attribute
                    setTimeout(() => {
                        const linkNode = editor.root.querySelector(
                            `a[href="${url}"]`
                        )
                        if (linkNode) linkNode.setAttribute('target', '_blank')
                    }, 0)
                }
            }

            setIsOpen(false)
        }
    }

    const handleRemove = () => {
        if (quillRef.current) {
            quillRef.current.getEditor().format('link', false)
            setUrl('')
            setIsOpen(false)
        }
    }

    const handleOpenLink = () => {
        if (url) {
            window.open(url, '_blank')
        }
    }

    // Helper styles for the mini-actions inside the input
    const iconBtnClass =
        'h-6 w-6 min-w-6 rounded-md text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200'

    return (
        <Popover
            isOpen={isOpen}
            onOpenChange={handleOpenChange}
            placement="bottom"
            showArrow
            offset={10}
            classNames={{
                content:
                    'p-2 bg-content1 border border-default-200 rounded-lg shadow-lg w-[320px]',
            }}
        >
            <PopoverTrigger>
                <HeroButton
                    disableAnimation={true}
                    size="sm"
                    variant="light"
                    isIconOnly={true}
                    className="size-8! px-2! flex items-center justify-center text-text-default! data-[active=true]:bg-primary-50 data-[active=true]:text-primary-600 hover:bg-background-hovered!"
                >
                    <HeroTooltip content="Link">
                        <LinkIcon size={16} />
                    </HeroTooltip>
                </HeroButton>
            </PopoverTrigger>

            <PopoverContent>
                <div className="flex flex-col gap-2 w-full">
                    {/* URL Input with Actions embedded */}
                    <Input
                        autoFocus
                        size="sm"
                        placeholder="Paste a link..."
                        value={url}
                        onValueChange={setUrl}
                        variant="bordered"
                        classNames={{
                            inputWrapper:
                                'bg-default-100 border-default-200 hover:border-primary focus-within:border-primary h-9 pr-1',
                            input: 'text-foreground text-sm',
                        }}
                        endContent={
                            <div className="flex items-center gap-1">
                                {url && (
                                    <>
                                        <div className="h-4 w-px bg-default-300 mx-0.5" />
                                        <Button
                                            isIconOnly
                                            size="sm"
                                            variant="light"
                                            className={iconBtnClass}
                                            onPress={handleOpenLink}
                                            title="Open link in new tab"
                                        >
                                            <ExternalLink size={14} />
                                        </Button>

                                        <Button
                                            isIconOnly
                                            size="sm"
                                            variant="light"
                                            className={iconBtnClass}
                                            onPress={handleRemove}
                                            title="Remove link"
                                        >
                                            <Trash2 size={14} />
                                        </Button>
                                    </>
                                )}
                                <Button
                                    isIconOnly
                                    size="sm"
                                    color="primary"
                                    variant="flat"
                                    className="h-6 w-6 min-w-6 rounded-md ml-1"
                                    onPress={handleSave}
                                >
                                    <Check size={14} />
                                </Button>
                            </div>
                        }
                    />

                    {/* Footer Options */}
                    <div className="flex items-center justify-between px-1">
                        <Switch
                            size="sm"
                            isSelected={openInNewTab}
                            onValueChange={setOpenInNewTab}
                            classNames={{
                                label: 'text-xs text-default-500',
                            }}
                        >
                            Open in new tab
                        </Switch>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}
