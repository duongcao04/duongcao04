'use client'

import { useState } from 'react'

import { Input, InputProps } from '@heroui/react'
import { useTranslations } from 'next-intl'

import Search from '@/components/icons/search'

interface SearchBarProps extends InputProps {
    onSearch?: (keywords: string) => void
    placeholder?: string
}

function SearchBar({ onSearch, placeholder, ...otherProps }: SearchBarProps) {
    const [keywords, setKeywords] = useState('')
    const t = useTranslations('layout')

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (!onSearch) {
            return
        }
        onSearch(keywords)
    }

    return (
        <form onSubmit={onSubmit}>
            <Input
                startContent={<Search className="size-[20px]" />}
                placeholder={placeholder ?? t('searchButton')}
                defaultValue={keywords}
                onChange={(event) => {
                    setKeywords(event.target.value)
                }}
                {...otherProps}
            />
        </form>
    )
}

export default SearchBar
