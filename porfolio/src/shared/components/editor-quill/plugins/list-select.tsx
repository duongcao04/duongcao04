'use client'

import { useMemo, useState } from 'react'

import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
} from '@heroui/react'
import { ChevronDown, List, ListOrdered, ListTodo } from 'lucide-react'

import { HeroButton, HeroTooltip } from '@/shared/components'

type ListType = 'bullet' | 'ordered' | 'check' | null

interface ListSelectProps {
    onFormatChange: (type: ListType) => void
}
export default function ListSelect({ onFormatChange }: ListSelectProps) {
    // Track selection to highlight the active item
    const [selectedKeys, setSelectedKeys] = useState(new Set(['bullet']))

    const selectedValue = useMemo(
        () => Array.from(selectedKeys)[0] as string,
        [selectedKeys]
    )

    const handleSelectionChange = (keys: any) => {
        setSelectedKeys(keys)
        const value = Array.from(keys)[0] as string

        // Map the key directly to Quill's format values
        // If the key is the same as the current selection (toggling off),
        // you might want to handle that logic in the parent,
        // but typically the dropdown just sets the specific type.
        switch (value) {
            case 'bullet':
                onFormatChange('bullet')
                break
            case 'ordered':
                onFormatChange('ordered')
                break
            case 'check':
                onFormatChange('check')
                break
            default:
                onFormatChange(null) // Clear list formatting
        }
    }

    // Helper to render the correct icon on the trigger button
    const renderTriggerIcon = () => {
        switch (selectedValue) {
            case 'ordered':
                return <ListOrdered size={18} />
            case 'check':
                return <ListTodo size={18} />
            default:
                return <List size={18} />
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
                    aria-label="List"
                    endContent={
                        <ChevronDown size={14} className="text-zinc-400" />
                    }
                >
                    <HeroTooltip content="List">
                        {renderTriggerIcon()}
                    </HeroTooltip>
                </HeroButton>
            </DropdownTrigger>
            <DropdownMenu
                aria-label="List formatting options"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selectedKeys}
                onSelectionChange={handleSelectionChange}
                className="w-40"
            >
                <DropdownItem key="bullet" startContent={<List size={18} />}>
                    Bullet List
                </DropdownItem>
                <DropdownItem
                    key="ordered"
                    startContent={<ListOrdered size={18} />}
                >
                    Ordered List
                </DropdownItem>
                <DropdownItem
                    key="check"
                    startContent={<ListTodo size={18} />}
                    description="Task list"
                >
                    Task List
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}
