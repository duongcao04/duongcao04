'use client'

import React from 'react'

import { Button } from '@heroui/react'
import { Image } from 'antd'

import { Project } from '@/types/projects'

type Props = {
    data: Project
}

export default function ProjectCard({ data }: Props) {
    return (
        <div>
            <Image src={data.thumbnail!} alt={`${data.name} thumbnail`} />
            <p>{data.name}</p>
            <Button>Read more</Button>
        </div>
    )
}
