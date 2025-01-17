'use client'

import { useState } from 'react'

import { Tooltip } from '@heroui/tooltip'

import { copyText } from '@/utils/copy-text-action'

function CopyTooltipCustomize({ content }: { content: string }) {
    const [isOpen, setOpen] = useState<boolean>(false)
    const [copied, setCopied] = useState<boolean>(false)

    const handleCopy = () => {
        setOpen(true)
        copyText(content)
        setCopied(true)
    }

    return (
        <Tooltip
            content={copied ? 'Copied !' : 'Copy'}
            offset={-2}
            isOpen={isOpen}
            onOpenChange={() => {
                setOpen(!isOpen)
                setCopied(false)
            }}
        >
            <button
                onClick={() => {
                    handleCopy()
                }}
                className="text-primary-800 text-lg font-preahvihear tracking-wider p-2"
            >
                {content}
            </button>
        </Tooltip>
    )
}

export default CopyTooltipCustomize
