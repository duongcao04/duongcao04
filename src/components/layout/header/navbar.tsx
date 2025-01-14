import React from 'react'

import Link from 'next/link'

import { NAVIGATES } from '@/constants/navigates'

function Navbar() {
    return (
        <nav className="flex items-center justify-between">
            <ul className="flex items-center justify-start gap-10">
                {NAVIGATES.map((item) => (
                    <li key={item.id}>
                        <Link href={item.path} className="font-medium">
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar
