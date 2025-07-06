'use client'

import SearchBar from '@/components/common/Searchbar'

function PostSearchbar() {
    const onSearch = (keywords: string) => {
        console.log(keywords)
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

export default PostSearchbar
