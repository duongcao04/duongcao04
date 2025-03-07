import * as React from 'react'
import { Button, ButtonProps } from '../ui/button'
import { cn } from '../../lib/utils'

export interface CustomizeButtonProps extends ButtonProps {
    className?: string
    label: string
}

const CustomizeButton = ({
    label,
    className,
    ...props
}: CustomizeButtonProps) => {
    const customizeButtonStyles = ''

    return (
        <Button
            {...props}
            className={cn(
                'bg-gradient-to-tr from-primary-400 via-primary-500 to-primary-600',
                customizeButtonStyles,
                className
            )}
        >
            {label}
        </Button>
    )
}

export default CustomizeButton
