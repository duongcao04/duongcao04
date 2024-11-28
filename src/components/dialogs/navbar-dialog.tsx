import { InlineIcon } from '@iconify/react'
import Link from 'next/link'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog'

import { NAVIGATES } from '@/constants'
import { MotionDiv, MotionLi } from '@/lib/motion'

export interface INavbarDialog {
    dialogTitle?: string
    dialogDecription?: string
    isOpen: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function NavbarDialog({ isOpen, setOpen }: INavbarDialog) {
    const handleOnOpenChange = () => {
        setOpen(!isOpen)
    }
    const navItemVariant = {
        initial: { width: 0 },
        animate: { width: '100%' },
    }
    return (
        <Dialog
            open={isOpen}
            defaultOpen={false}
            onOpenChange={handleOnOpenChange}
        >
            <DialogContent
                className="bg-transparent border-none outline-none text-white shadow-none w-fit"
                isShowClose={false}
                isBackdrop
            >
                <DialogHeader>
                    <DialogTitle />
                    <DialogDescription />
                </DialogHeader>
                <nav className="z-10">
                    <ul className="flex flex-col items-center justify-center gap-2">
                        {NAVIGATES.map((item) => (
                            <MotionLi
                                key={item.id}
                                initial="initial"
                                animate="initial"
                                whileHover="animate"
                                className="my-3"
                            >
                                <Link
                                    href={item.path}
                                    className="uppercase text-2xl py-2 inline-flex items-center justify-center gap-1 tracking-[0.1em]"
                                    onClick={handleOnOpenChange}
                                    target={item.isRedirect ? '_blank' : ''}
                                >
                                    {item.label}
                                    {item.isRedirect && (
                                        <InlineIcon
                                            icon="humbleicons:arrow-up"
                                            className="rotate-45"
                                        />
                                    )}
                                </Link>
                                <MotionDiv
                                    variants={navItemVariant}
                                    className="bg-white w-full h-[2px]"
                                ></MotionDiv>
                            </MotionLi>
                        ))}
                    </ul>
                </nav>
            </DialogContent>
        </Dialog>
    )
}
