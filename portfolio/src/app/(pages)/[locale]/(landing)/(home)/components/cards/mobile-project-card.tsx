import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa6'

import { type Project } from '@/data/projects'
import { MotionButton } from '@/lib/motion'

import { OnlineLink } from './project-card'

export default function MobileProjectCard({
    data: project,
    isOpposite,
}: {
    data: Project
    isOpposite?: boolean
}) {
    const t = useTranslations('home.projects')

    return (
        <>
            <div className="relative w-full ">
                <div
                    className={`absolute -top-[50px] ${isOpposite ? 'left-72' : 'right-72'} w-[200px] h-[400px] bg-primary-700 rounded-full blur-[120px]`}
                />
                <div
                    className={`absolute -top-[50px] ${isOpposite ? 'left-30' : 'right-30'} w-[200px] h-[400px] bg-primary-700 rounded-full blur-[120px]`}
                />
                <div className="relative">
                    <div className="w-full h-fit pl-4 pt-2.5 rounded-lg object-contain bg-primary-700 overflow-hidden">
                        <Image
                            src={project.thumbnail}
                            alt={project.name}
                            className="rounded-tl-lg"
                        />
                    </div>
                    <div className="mt-3">
                        <div className="flex items-end justify-between">
                            <p className="w-fit text-lg font-semibold text-primary-100">
                                {project.feature_project}
                            </p>
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
                            className="inline-block mt-3 mb-2 w-fit hover:text-blue-700 duration-250 transition"
                            title="Go to project detail"
                        >
                            <p className="text-3xl font-bold">{project.name}</p>
                        </Link>
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
                    <div
                        className={`backdrop-blur-lg relative mt-2.5 leading-relaxed tracking-wide rounded-lg p-4 ${isOpposite ? 'bg-gradient-to-bl' : 'bg-gradient-to-r'} from-primary-600 via-primary-500 to-primary-600 text-white`}
                    >
                        <p className="text-left text-normal text-base desktop:text-lg line-clamp-3">
                            {project.description}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
