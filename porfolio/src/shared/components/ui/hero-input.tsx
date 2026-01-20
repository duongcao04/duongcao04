'use client'

import { Input, extendVariants } from '@heroui/react'

export const HeroInput = extendVariants(Input, {
    variants: {
        // We define a new custom variant named "minimal"
        variant: {
            minimal: {
                inputWrapper: [
                    'shadow-none',
                    'border-[1px]',
                    'border-border-default',
                    '!bg-background',
                    'transition',
                    'duration-100',
                    'focus-within:border-primary',
                    'data-[hover=true]:border-primary',
                ],
                label: ['text-text-default', 'font-medium'],
                input: [
                    'text-base',
                    'text-foreground',
                    'placeholder:text-text-subdued',
                ],
            },
        },
    },
    defaultVariants: {
        variant: 'minimal',
        labelPlacement: 'inside',
    },
})

export const HeroInlineInput = extendVariants(Input, {
    variants: {
        variant: {
            default: {
                base: 'grid grid-cols-[140px_1fr] gap-3 items-center',
                label: 'text-right font-medium text-base pt-0 text-foreground',
                inputWrapper:
                    'bg-background border-1 border-default-200 shadow-none rounded-md transition-colors hover:border-default-400 group-data-[focus=true]:border-primary',
                input: 'text-base placeholder:italic placeholder:text-default-300',
            },
        },
    },
    defaultVariants: {
        variant: 'default',
        labelPlacement: 'outside-left',
    },
})
