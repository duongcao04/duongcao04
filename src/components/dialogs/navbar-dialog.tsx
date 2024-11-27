import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogOverlay,
    DialogTitle,
} from '@/components/ui/dialog'
import { NAVIGATES } from '../../constants'
import Link from 'next/link'
import { InlineIcon } from '@iconify/react'

export interface INavbarDialog {
    dialogTitle?: string
    dialogDecription?: string
    isOpen: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function NavbarDialog({
    dialogTitle,
    dialogDecription,
    isOpen,
    setOpen,
}: INavbarDialog) {
    const handleOnOpenChange = () => {
        setOpen(!isOpen)
    }

    return (
        <Dialog
            open={isOpen}
            defaultOpen={false}
            onOpenChange={handleOnOpenChange}
        >
            <DialogOverlay className="backdrop-blur-xl bg-[#8d8d8da6]" />
            <DialogContent
                className="sm:max-w-[425px] bg-transparent border-none text-white shadow-none"
                isShowClose={false}
            >
                <DialogHeader>
                    <DialogTitle>{dialogTitle}</DialogTitle>
                    <DialogDescription>{dialogDecription}</DialogDescription>
                </DialogHeader>
                <nav className="z-10">
                    <ul className="flex flex-col items-center justify-center gap-2">
                        {NAVIGATES.map((item) => (
                            <li key={item.id}>
                                <Link
                                    href={item.path}
                                    className="uppercase text-2xl py-5 tracking-[0.1em] hover:tracking-[0.2em] inline-flex items-center justify-center gap-1"
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
                            </li>
                        ))}
                    </ul>
                </nav>
            </DialogContent>
        </Dialog>
    )
}
