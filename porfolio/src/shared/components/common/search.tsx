'use client'

import React, { useState } from 'react'

import { useRouter } from 'next/navigation'
import { LuSearch } from 'react-icons/lu'

import { Input } from '@/shared/components/ui/input'

import { MotionButton } from '@/lib/motion'

interface Props {
    placeholder?: string
}

function Search({ placeholder = '', ...props }: Props) {
    const router = useRouter()
    const [value, setValue] = useState<string>('')
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        router.push(`/${value}`)
        /**
         * Reset input value
         */
        setValue('')
    }
    return (
        <form onSubmit={handleSubmit} className="relative w-fit">
            <Input
                placeholder={placeholder}
                {...props}
                className="pl-10"
                value={value}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setValue(event.target.value)
                }}
                spellCheck={false}
            />
            <MotionButton
                type="submit"
                className="absolute top-[50%] translate-y-[-50%] left-3"
            >
                <LuSearch />
            </MotionButton>
        </form>
    )
}

export default Search
