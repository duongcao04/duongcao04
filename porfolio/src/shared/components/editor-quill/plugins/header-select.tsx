'use client'

import { useMemo, useState } from 'react'

import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
} from '@heroui/react'
import { Heading1, Heading2, Heading3, Type } from 'lucide-react'

import { HeroButton, HeroTooltip } from '@/shared/components'

export default function HeaderSelect({
    onFormatChange,
}: {
    onFormatChange?: (value: number | false) => void
}) {
    const [selectedKeys, setSelectedKeys] = useState(new Set(['0']))

    // Map selection to display icon/text
    const selectedValue = useMemo(
        () => Array.from(selectedKeys).join(', ').replaceAll('_', ' '),
        [selectedKeys]
    )

    const handleSelectionChange = (keys: any) => {
        setSelectedKeys(keys)
        const value = Array.from(keys)[0]

        // Logic to update Quill
        // If value is "0", we send false or empty string for 'normal' text
        const formatValue = value === '0' ? false : Number(value)

        if (onFormatChange) {
            onFormatChange(formatValue)
        } else {
            // Example if you have direct access to quill instance context:
            // quill.format('header', formatValue);
        }
    }

    const renderTriggerContent = () => {
        switch (selectedValue) {
            case '1':
                return <Heading1 size={18} />
            case '2':
                return <Heading2 size={18} />
            case '3':
                return <Heading3 size={18} />
            default:
                return <Type size={18} /> // Normal text icon
        }
    }

    return (
        <Dropdown>
            <DropdownTrigger>
                <HeroButton
                    disableAnimation={true}
                    size="sm"
                    variant="solid"
                    isIconOnly={true}
                    className="size-8! px-2! min-w-0! flex items-center justify-center text-text-default! hover:bg-background-hovered!"
                    aria-label="Heading Level"
                >
                    <HeroTooltip content="Heading level">
                        {renderTriggerContent()}
                    </HeroTooltip>
                </HeroButton>
            </DropdownTrigger>
            <DropdownMenu
                aria-label="Header Actions"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selectedKeys}
                onSelectionChange={handleSelectionChange}
            >
                <DropdownItem key="1" startContent={<Heading1 size={16} />}>
                    Heading 1
                </DropdownItem>
                <DropdownItem key="2" startContent={<Heading2 size={16} />}>
                    Heading 2
                </DropdownItem>
                <DropdownItem key="3" startContent={<Heading3 size={16} />}>
                    Heading 3
                </DropdownItem>
                <DropdownItem key="0" startContent={<Type size={16} />}>
                    Normal
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}
