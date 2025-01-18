import React from 'react'

import Image from 'next/image'

import { type Project } from '@/data/projects'

function TechnologyTag({ name }: { name: string }) {
    return (
        <div className="w-fit px-4 py-1 border border-primary-200 rounded-xl bg-primary-100">
            <p className="text-primary font-semibold">{name}</p>
        </div>
    )
}
function ProjectCard({ data: project }: { data: Project }) {
    return (
        <div className="relative w-full flex items-center justify-end">
            <div className="absolute -top-[50px] right-72 w-[200px] h-[400px] bg-primary-700 rounded-full blur-[120px]" />
            <div className="absolute -top-[50px] right-30 w-[200px] h-[400px] bg-primary-700 rounded-full blur-[120px]" />
            <div className="relative w-[650px] h-[293px] bg-[#a30002] rounded-xl overflow-hidden">
                <div className="absolute top-[25px] right-0 shadow-square">
                    <Image
                        src={project.thumbnail}
                        alt={`${project.name} thumbnail`}
                        className="rounded-tl-3xl rounded-br-3xl border-primary-500 w-[615px] h-[306px] object-contain"
                    />
                </div>
            </div>

            <div className="absolute top-[20px] left-0">
                <p className="w-fit text-lg font-semibold text-primary">
                    {project.feature_project}
                </p>
                <p className="mt-2 w-fit text-3xl font-bold">{project.name}</p>
                <div className="backdrop-blur-lg relative mt-[30px] max-w-[790px] leading-relaxed tracking-wide rounded-lg pt-[26px] pl-[34px] pb-[31px] pr-[50px] bg-gradient-to-br from-[#a30002] via-primary-600 to-[#d3a0a07c] text-white">
                    <p className="text-left text-lg line-clamp-3">
                        {project.description}
                    </p>
                </div>

                <div className="mt-4">
                    <TechnologyTag name="Online" />
                </div>
            </div>
        </div>
    )
}

export function ReverseProjectCard({ data: project }: { data: Project }) {
    return (
        <div className="relative w-full flex items-center justify-start">
            <div className="absolute -top-[50px] left-72 w-[200px] h-[400px] bg-primary-700 rounded-full blur-[120px]" />
            <div className="absolute -top-[50px] left-30 w-[200px] h-[400px] bg-primary-700 rounded-full blur-[120px]" />
            <div className="relative w-[650px] h-[293px] bg-[#a30002] rounded-xl overflow-hidden">
                <div className="absolute top-[25px] left-0 shadow-square">
                    <Image
                        src={project.thumbnail}
                        alt={`${project.name} thumbnail`}
                        className="rounded-tr-3xl rounded-br-3xl border-primary-500 w-[615px] h-[306px] object-contain"
                    />
                </div>
            </div>

            <div className="absolute top-[20px] right-0">
                <div className="flex flex-col items-end">
                    <p className="w-fit text-lg font-semibold text-primary">
                        {project.feature_project}
                    </p>
                    <p className="mt-2 w-fit text-3xl font-bold">
                        {project.name}
                    </p>
                </div>
                <div className="backdrop-blur-lg relative mt-[30px] max-w-[790px] leading-relaxed tracking-wide rounded-lg pt-[26px] pl-[34px] pb-[31px] pr-[50px] bg-gradient-to-bl from-[#a30002] via-primary-600 to-[#d3a0a07c] text-white">
                    <p className="text-left text-lg line-clamp-3">
                        {project.description}
                    </p>
                </div>

                <div className="mt-4 flex justify-end">
                    <TechnologyTag name="Online" />
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
