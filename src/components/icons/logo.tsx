import React from 'react'

import Link from 'next/link'

const Logo = () => {
    return (
        <Link href={'/'} title="Go home">
            <p className="text-xl font-bold text-primary py-2">Yangis</p>
        </Link>
    )
}

export default Logo
