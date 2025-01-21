'use client'

import { Input, InputProps } from '@heroui/react'
import { useTranslations } from 'next-intl'

import Search from '@/components/icons/search'

interface SearchBarProps extends InputProps {
    onSearch?: () => void
    placeholder?: string
}

function SearchBar({ onSearch, placeholder, ...otherProps }: SearchBarProps) {
    const t = useTranslations('layout')

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (!onSearch) {
            return
        }
        onSearch()
    }

    return (
        <form onSubmit={onSubmit}>
            <Input
                startContent={<Search className="size-[20px]" />}
                placeholder={placeholder ?? t('searchButton')}
                {...otherProps}
            />
        </form>
    )
}

export default SearchBar
