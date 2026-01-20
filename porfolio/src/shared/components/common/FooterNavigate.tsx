import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'

import { MotionDiv } from '@/lib/motion'

import { HeroButton } from '../ui/hero-button'

export default function FooterNavigate({
    previousPage = '/',
    nextPage,
}: {
    previousPage?: string
    nextPage?: string
}) {
    return (
        <MotionDiv className="flex items-center justify-center gap-px">
            <MotionDiv whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
                <HeroButton
                    className={`${nextPage ? 'rounded-r-none' : 'rounded-full'} size-12.75 shadow-none`}
                    href={previousPage}
                >
                    <FaArrowLeft size={24} />
                </HeroButton>
            </MotionDiv>
            {nextPage && (
                <MotionDiv whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
                    <HeroButton
                        className="rounded-l-none size-12.75 shadow-none"
                        href={nextPage}
                    >
                        <FaArrowRight size={24} />
                    </HeroButton>
                </MotionDiv>
            )}
        </MotionDiv>
    )
}
