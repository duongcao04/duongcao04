'use client'

import { useRouter } from 'next/navigation'
import { FiArrowLeft } from 'react-icons/fi'

import { MotionButton } from '@/lib/motion'

export default function ReturnBackButton() {
    const router = useRouter()

    const onClickHandler = () => {
        router.back()
    }

    return (
        <MotionButton
            className="w-fit p-2.5 rounded-full border-2"
            initial={{
                borderColor: 'var(--foreground)',
                color: 'var(--foreground)',
            }}
            whileHover={{
                borderColor: 'var(--secondary)',
                color: 'var(--secondary)',
            }}
            onClick={onClickHandler}
        >
            <FiArrowLeft size={25} />
        </MotionButton>
    )
}
