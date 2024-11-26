import { Button, ButtonProps } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'

export interface ICustomizeDialog {
    trigger: React.ReactNode
    dialogTitle?: string
    dialogDecription?: string
    children: React.ReactNode
    dangerButtonProps?: ButtonProps
    secondaryButtonProps?: ButtonProps
}

export default function CustomizeDialog({
    trigger,
    dialogTitle,
    dialogDecription,
    dangerButtonProps,
    secondaryButtonProps,
    children,
}: ICustomizeDialog) {
    return (
        <Dialog>
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
