import Link from 'next/link'
import * as React from 'react'

export interface LogoProps {
    isUppercase?: boolean
}

export default function Logo({ isUppercase = true }: LogoProps) {
    return (
        <Link
            href={'/'}
            className={`font-bold text-sm text-textBlur tracking-widest ${
                isUppercase && 'uppercase'
            }`}
        >
            Yangis
        </Link>
    )
}
