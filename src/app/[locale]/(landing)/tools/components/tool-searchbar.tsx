'use client'

import SearchBar from '@/components/common/search-bar'

function ToolSearchbar() {
    const onSearch = () => {
        console.log('hello search')
    }

    return (
        <SearchBar
            classNames={{
                inputWrapper: 'h-12',
            }}
            onSearch={onSearch}
        />
    )
}

export default ToolSearchbar
