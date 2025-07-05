import React from 'react'

import { useTranslations } from 'next-intl'

import Call from '@/components/icons/call'
import EducationIcon from '@/components/icons/education-icon'
import MailGun from '@/components/icons/main-gun'
import GithubSocialOutline from '@/components/icons/social-icons/github-social-outline'

import AboutMeTimeline from '../about-me-timeline'

export const CONTACT_INFO = [
    { id: 1, icon: MailGun, value: 'contact@yangis.dev', canCopy: true },
    { id: 2, icon: Call, value: '(+84) 862 248 332', canCopy: false },
    {
        id: 3,
        icon: GithubSocialOutline,
        value: 'duongcao04',
        canCopy: false,
    },
]

function AboutMe({ title, desc }: { title: string; desc: string }) {
    return (
        <div className="w-full h-fit rounded-lg p-4 bg-wallground border-border shadow-sm">
            <p className="text-lg font-semibold">{title}</p>
            <p className="my-3 text-center">{desc}</p>
            <hr />
            <ul className="mt-4 flex flex-col items-start gap-5 ml-1">
                {CONTACT_INFO.map((item) => (
                    <li
                        key={item.id}
                        className="flex items-center justify-start gap-2"
                    >
                        <div className="p-2 rounded-full bg-primary-100 text-primary-600">
                            <item.icon className="size-[20px]" />
                        </div>
                        <p className="font-medium tracking-wide">
                            {item.value}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
function KeySkills({ title }: { title: string }) {
    const KEY_SKILLS = [
        {
            id: 1,
            title: 'Programing Languages',
            keys: ['Javascript', 'Typescript', 'Cpp'],
        },
        {
            id: 2,
            title: 'Libraries and Frameworks',
            keys: ['TailwindCss', 'Node.js', 'React.js', 'Nest.js'],
        },
        {
            id: 3,
            title: 'Databases',
            keys: ['PosgreSQL', 'MySQL', 'MongoDB'],
        },
        {
            id: 4,
            title: 'Languages',
            keys: ['Vietnamese', 'English'],
        },
    ]
    return (
        <div className="w-full h-fit rounded-lg p-4 bg-wallground border-border shadow-sm">
            <p className="text-lg font-semibold">{title}</p>
            <div className="ml-1 mt-2 space-y-3">
                {KEY_SKILLS.map((item) => (
                    <div key={item.id}>
                        <p className="font-medium text-text-secondary">
                            {item.title}
                        </p>
                        <ul className="mt-1 ml-10 space-y-1">
                            {item.keys.map((key, index) => (
                                <li key={index} className="list-disc">
                                    {key}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}
function Education({
    title,
    universityName,
    major,
}: {
    title: string
    universityName: string
    major: string
}) {
    return (
        <div className="w-full h-fit rounded-lg p-4 bg-wallground border-border shadow-sm">
            <p className="text-lg font-semibold">{title}</p>
            <div className="ml-1 mt-2">
                <div className="flex items-start justify-start gap-2">
                    <EducationIcon />
                    <p className="font-medium">{universityName}</p>
                </div>
                <p className="ml-8 text-sm text-text-secondary">{major}</p>
            </div>
        </div>
    )
}
function Profile({ title }: { title: string }) {
    return (
        <div className="w-full h-fit rounded-lg p-4 bg-wallground border-border shadow-sm">
            <p className="text-lg font-semibold">{title}</p>
            <div className="ml-1 mt-2 leading-relaxed tracking-wide">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Maiores quisquam similique provident odio cumque suscipit
                exercitationem, distinctio vitae atque facilis sit, autem eum
                quidem. Doloribus ratione ut voluptates nesciunt deserunt! Rem
                consequatur saepe magnam eveniet, placeat praesentium temporibus
                exercitationem maxime vel nemo impedit iure et est facilis
                perspiciatis doloribus corrupti, asperiores odit animi? Atque
                neque voluptatibus eius velit modi praesentium. Magnam atque
                ducimus quidem tenetur ea reiciendis voluptas quo eum fugiat
                adipisci alias rerum mollitia omnis facilis ex deleniti
                excepturi, numquam assumenda amet eligendi hic officiis
                voluptatem reprehenderit? Neque, consequatur.
            </div>
        </div>
    )
}
function Timeline({ title }: { title: string }) {
    return (
        <div className="w-full h-fit rounded-lg p-4 bg-wallground border-border shadow-sm">
            <p className="text-lg font-semibold">{title}</p>
            <div className="ml-1 mt-2">
                <AboutMeTimeline />
            </div>
        </div>
    )
}

function TabIntroduce() {
    const t = useTranslations('aboutMe.section')

    return (
        <div className="desktop:grid desktop:grid-cols-12 desktop:gap-5">
            <div className="col-span-4 space-y-5">
                <AboutMe title={t('aboutMe.title')} desc={t('aboutMe.desc')} />
                <Education
                    title={t('education.title')}
                    universityName={t('education.university.name')}
                    major={t('education.university.major')}
                />
                <KeySkills title={t('keySkills.title')} />
            </div>
            <div className="mt-5 desktop:mt-0 col-span-8 space-y-5 rounded-lg">
                <Profile title={t('summary.title')} />
                <Timeline title={t('timeline.title')} />
            </div>
        </div>
    )
}

export default TabIntroduce
