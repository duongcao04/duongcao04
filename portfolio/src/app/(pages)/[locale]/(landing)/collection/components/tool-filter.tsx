import React from 'react'

import { Button } from '@heroui/react'
import { useTranslations } from 'next-intl'

import Plus from '@/components/icons/plus'

function ToolFilter() {
    const t = useTranslations('collection')

    return (
        <div>
            <Button
                variant="bordered"
                className="border-dashed"
                startContent={<Plus className="size-[20px]" />}
            >
                {t('addFilterButton')}
            </Button>
        </div>
    )
}

export default ToolFilter
