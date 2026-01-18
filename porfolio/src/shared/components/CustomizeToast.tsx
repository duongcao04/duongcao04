import React from 'react'

import { Alert, type AlertProps } from '@heroui/react'
import { toast } from 'react-toastify'

import Loading from './icons/loading'

interface CustomizeToastProps extends AlertProps {
    isLoading?: boolean
    autoClose?: number | false | undefined
}
export function customizeToast({
    isLoading,
    autoClose = 1500,
    ...props
}: CustomizeToastProps) {
    return toast(
        <Alert icon={isLoading && <Loading />} hideIconWrapper {...props} />,
        {
            position: 'bottom-center',
            className: 'p-0 border-none rounded-xl border',
            hideProgressBar: true,
            closeButton: false,
            autoClose: autoClose,
        }
    )
}

export function updateToast(
    Id: string | number,
    { isLoading, autoClose = 1500, ...props }: CustomizeToastProps
) {
    return toast.update(Id, {
        render: (
            <Alert icon={isLoading && <Loading />} hideIconWrapper {...props} />
        ),
        position: 'bottom-center',
        className: 'p-0 border-none rounded-xl border',
        hideProgressBar: true,
        closeButton: false,
        autoClose: autoClose,
    })
}
