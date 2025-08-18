import { useLocale } from 'next-intl'
import Link from 'next/link'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog'

import { NAVIGATES } from '@/constants/appConstants'
import { SupportLanguages } from '@/i18n/routing'
import { MotionDiv, MotionLi } from '@/lib/motion'

export interface INavbarDialog {
    dialogTitle?: string
    dialogDecription?: string
    isOpen: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function NavbarDialog({ isOpen, setOpen }: INavbarDialog) {
    const locale = useLocale()

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
                isShowClose={false}
                classNames={{
                    overlay: 'bg-primary block desktop:hidden',
                    content:
                        'bg-transparent w-sceen border-none outline-none text-white shadow-none block desktop:hidden max-w-screen w-screen p-8',
                }}
            >
                <DialogHeader>
                    <DialogTitle />
                    <DialogDescription />
                </DialogHeader>
                <nav className="z-10">
                    <ul className="flex flex-col items-end justify-center gap-3 desktop:gap-5">
                        {NAVIGATES.map((item) => {
                            const label =
                                item[`${locale as SupportLanguages}Label`]

                            return (
                                <MotionLi
                                    key={item.id}
                                    initial="initial"
                                    animate="initial"
                                    whileHover="animate"
                                    className="my-5"
                                >
                                    <Link
                                        href={item.path}
                                        className="inline-block desktop:pt-4 desktop:pr-4 desktop:pl-4 pt-2 pr-2 pl-2 pb-1 text-4xl desktop:text-4xl tracking-wider"
                                    >
                                        {label}
                                    </Link>
                                    <MotionDiv
                                        variants={navItemVariant}
                                        className="bg-white w-full h-[2px]"
                                    ></MotionDiv>
                                </MotionLi>
                            )
                        })}
                    </ul>
                </nav>
            </DialogContent>
        </Dialog>
    )
}
