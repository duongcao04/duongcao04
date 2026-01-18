import { Button, ButtonProps } from '@/shared/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/shared/components/ui/dialog'

export interface ICustomizeDialog {
    trigger: React.ReactNode
    dialogTitle?: string
    dialogDecription?: string
    children: React.ReactNode
    dangerButtonProps?: ButtonProps
    secondaryButtonProps?: ButtonProps
    isOpen: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function CustomizeDialog({
    trigger,
    dialogTitle,
    dialogDecription,
    dangerButtonProps,
    secondaryButtonProps,
    isOpen,
    setOpen,
    children,
}: ICustomizeDialog) {
    return (
        <Dialog
            open={isOpen}
            defaultOpen={false}
            onOpenChange={() => {
                setOpen(!isOpen)
            }}
        >
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{dialogTitle}</DialogTitle>
                    <DialogDescription>{dialogDecription}</DialogDescription>
                </DialogHeader>
                {children}
                <DialogFooter>
                    <Button {...secondaryButtonProps}>Cancel</Button>
                    <Button type="submit" {...dangerButtonProps}>
                        Confirm
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
