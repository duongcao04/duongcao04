import Search from '@/components/common/search'
import { Button } from '@/components/ui/button'

import { Link } from '@/i18n/navigation'
import { MotionDiv, MotionH1, MotionP } from '@/lib/motion'

export default function NotFound() {
    return (
        <div className="container w-full min-h-screen mt-32 px-5 laptop:px-0 laptop:mt-0 flex flex-col items-center laptop:justify-center">
            <div className="px-2 py-1 border rounded-[10px] bg-primary-100 w-fit">
                <p className="text-sm text-primary font-semibold">404 error</p>
            </div>
            <div className="mt-5 text-center">
                <MotionH1
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="leading-tight laptop:leading-normal text-3xl laptop:text-5xl"
                >
                    This page was not found
                </MotionH1>
                <MotionP
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 }}
                    className="opacity-80"
                >{`Sorry, the page you are looking for doesn't exist or has been moved.`}</MotionP>
            </div>
            <MotionDiv
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-8"
            >
                <Search placeholder="Search our site" />
            </MotionDiv>
            <MotionDiv
                className="mt-8"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
            >
                <Button size={'lg'} asChild className="text-white">
                    <Link href={'/'}>Return home</Link>
                </Button>
            </MotionDiv>
        </div>
    )
}
