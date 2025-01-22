'use client'

import { ButtonHTMLAttributes, DetailedHTMLProps, useState } from 'react'

import { Tooltip, type TooltipProps } from '@heroui/tooltip'

import { copyText } from '@/utils/copy-text-action'

interface buttonProps
    extends DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    content: string
    classNames: {
        toolTip: TooltipProps
        button: string
    }
}

function CopyTooltipCustomize({
    content,
    classNames,
    ...otherProps
}: buttonProps) {
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
                {...otherProps}
            >
                {content}
            </button>
        </Tooltip>
    )
}

export default CopyTooltipCustomize
