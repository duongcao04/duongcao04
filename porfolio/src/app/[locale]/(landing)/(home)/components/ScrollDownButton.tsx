'use client'

import React from 'react'

import ScrollDownIcon from '@/shared/components/icons/ScrollDownIcon'

export default function ScrollDownButton() {
    const onScrollDown = (e: React.MouseEvent) => {
        e.preventDefault()
        const formElement = document.getElementById('scroll-down')
        if (formElement) {
            formElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
            })
        }
    }

    return (
        <button onClick={onScrollDown}>
            <ScrollDownIcon />
        </button>
    )
}
