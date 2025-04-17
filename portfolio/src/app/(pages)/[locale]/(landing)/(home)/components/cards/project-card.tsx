import React from 'react'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa6'
import { GoArrowUpRight } from 'react-icons/go'

import { type Project } from '@/data/projects'
import { MotionButton } from '@/lib/motion'

export function OnlineLink({ href, text }: { href: string; text: string }) {
    return (
        <Link
            href={href}
            target="_blank"
            className="inline-block relative w-fit pl-4 pr-6 py-1 border border-success-200 rounded-xl bg-success-100 text-success-600"
        >
            <p className="font-semibold">{text}</p>
            <GoArrowUpRight className="absolute top-2 right-2 text-xs" />
        </Link>
    )
}
export function TechnologyTag({ name }: { name: string }) {
    return (
        <div className="w-fit px-4 py-1 border border-primary-200 rounded-xl bg-primary-100">
            <p className="text-primary font-semibold">{name}</p>
        </div>
    )
}

export default function ProjectCard({
    data: project,
    isOpposite,
}: {
    data: Project
    isOpposite?: boolean
}) {
    const t = useTranslations('home.projects')

    return (
        <div
            className={`relative w-full flex items-center ${isOpposite ? 'justify-start' : 'justify-end'}`}
        >
            <div
                className={`absolute -top-[50px] ${isOpposite ? 'left-72' : 'right-72'} w-[200px] h-[400px] bg-primary-700 rounded-full blur-[120px]`}
            />
            <div
                className={`absolute -top-[50px] ${isOpposite ? 'left-30' : 'right-30'} w-[200px] h-[400px] bg-primary-700 rounded-full blur-[120px]`}
            />
            <div className="relative w-[650px] h-[293px] bg-[#a30002] rounded-xl overflow-hidden">
                <div
                    className={`absolute top-[25px] ${isOpposite ? 'left-0' : 'right-0'} shadow-square`}
                >
                    <Image
                        src={project.thumbnail}
                        alt={`${project.name} thumbnail`}
                        className={`${isOpposite ? 'rounded-tr-3xl' : 'rounded-tl-3xl'} rounded-br-3xl border-primary-500 w-[615px] h-[306px] object-contain`}
                    />
                </div>
            </div>

            <div
                className={`absolute top-[20px] ${isOpposite ? 'right-0' : 'left-0'}`}
            >
                <div
                    className={`flex flex-col items-start ${isOpposite && 'ml-36'}`}
                >
                    <p className="w-fit text-lg font-semibold text-primary">
                        {project.feature_project}
                    </p>
                    <div
                        className={`${isOpposite ? 'w-[calc(100%-20px)]' : 'w-[calc(100%-90px)]'} flex items-end justify-between`}
                    >
                        <div className="flex items-end justify-start gap-8">
                            <Link
                                href={`/projects/${project.slug}`}
                                className="mt-2 w-fit hover:text-blue-700 duration-250 transition"
                                title="Go to project detail"
                            >
                                <p className="text-3xl font-bold">
                                    {project.name}
                                </p>
                            </Link>
                            <div>
                                {project.web_path && (
                                    <OnlineLink
                                        href={project.web_path}
                                        text={t('goToWebButton')}
                                    />
                                )}
                            </div>
                        </div>

                        <Link
                            href={`/projects/${project.slug}`}
                            className="block w-fit hover:text-blue-700 duration-250 transition font-semibold"
                        >
                            <MotionButton
                                initial={{ gap: '4px' }}
                                whileHover={{ gap: '8px' }}
                                className="flex items-center justify-start p-1"
                            >
                                <p>Xem chi tiết</p>
                                <FaChevronRight size={10} />
                            </MotionButton>
                        </Link>
                    </div>
                </div>
                <div
                    className={`backdrop-blur-lg relative mt-[30px] max-w-[790px] leading-relaxed tracking-wide rounded-lg pt-[26px] pl-[34px] pb-[31px] pr-[50px] ${isOpposite ? 'bg-gradient-to-bl' : 'bg-gradient-to-br'} from-[#a30002] via-primary-600 to-[#d3a0a07c] text-white`}
                >
                    <p className="text-left text-lg line-clamp-3">
                        {project.description}
                    </p>
                </div>

                <div
                    className={`mt-4 flex justify-start ${isOpposite && 'ml-36'} gap-5`}
                >
                    {project.technologies.map((item, index) => (
                        <div key={index}>
                            <TechnologyTag name={item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
