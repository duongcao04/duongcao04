'use client'

import React from 'react'

import { BreadcrumbItem, Breadcrumbs } from '@heroui/react'

type Props = {
    label: string
    href: string
}

export default function ProjectDetailBreadcrumbs({ label, href }: Props) {
    return (
        <Breadcrumbs>
            <BreadcrumbItem href="/">Home</BreadcrumbItem>
            <BreadcrumbItem href="/projects">Projects</BreadcrumbItem>
            <BreadcrumbItem href={href}>{label}</BreadcrumbItem>
        </Breadcrumbs>
    )
}
