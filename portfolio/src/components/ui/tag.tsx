import React from 'react'

import { useTranslations } from 'next-intl'

function Tag({ title = 'Tag' }: { title: string }) {
    const t = useTranslations(`home.tag`)

    return (
        <div className="w-fit px-4 py-1 border border-primary-200 rounded-xl bg-primary-100">
            <p className="text-primary font-semibold">{t(title)}</p>
        </div>
    )
}

export default Tag
