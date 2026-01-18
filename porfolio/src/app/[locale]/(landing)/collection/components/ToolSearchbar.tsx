'use client'

import { useSearchParam } from '@/shared/hooks/useSearchParam'

import SearchBar from '@/shared/components/common/Searchbar'

function ToolSearchbar() {
    const { setSearchParams, removeSearchParam } = useSearchParam()
    const onSearch = (keywords: string) => {
        if (keywords.length === 0) {
            removeSearchParam('search')
        } else {
            setSearchParams({ search: keywords })
        }
    }

    return (
        <SearchBar
            classNames={{
                inputWrapper: 'h-12',
            }}
            onSearch={(keywords) => onSearch(keywords)}
        />
    )
}

export default ToolSearchbar
