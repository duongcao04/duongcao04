'use client'

import { useState } from 'react'

import { Button, Input, InputProps } from '@heroui/react'
import { useTranslations } from 'next-intl'

import { useSearchParam } from '@/hooks/useSearchParam'

import Search from '@/components/icons/search'

interface SearchBarProps extends InputProps {
    onSearch?: (keywords: string) => void
    placeholder?: string
}

function SearchBar({ onSearch, placeholder, ...otherProps }: SearchBarProps) {
    const tButton = useTranslations()

    const { getSearchParam } = useSearchParam()
    const searchKeywords = getSearchParam('search') ?? ''
    const [keywords, setKeywords] = useState(searchKeywords)
    const [isLoading, setLoading] = useState(false)

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            setLoading(true)
            if (!onSearch) {
                return
            }
            onSearch(keywords)
        } catch (error) {
            console.log(error)
        } finally {
            setTimeout(() => {
                setLoading(false)
            }, 100)
        }
    }

    return (
        <form
            onSubmit={onSubmit}
            className="flex flex-col items-start lg:flex-row lg:items-center justify-start gap-5"
        >
            <Input
                startContent={<Search className="size-[20px]" />}
                placeholder={placeholder ?? tButton('search')}
                value={keywords}
                onChange={(event) => {
                    setKeywords(event.target.value)
                }}
                {...otherProps}
            />
            <Button
                size="lg"
                className="px-14"
                color="primary"
                isLoading={isLoading}
                type="submit"
            >
                {tButton('search')}
            </Button>
        </form>
    )
}

export default SearchBar
