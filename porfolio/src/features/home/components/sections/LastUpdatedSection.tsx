import React from 'react'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'

import SectionTag from '../section-tag'

type Article = {
    id: number | string
    createdAt: string
    title: string
    description: string
}
const ARTICLES: Article[] = [
    {
        id: 1,
        createdAt: 'Jan 20, 2025',
        title: 'Article 1',
        description:
            'I’ve released an updated Laws of UX index poster to my online store. Updates include additions to the Laws of UX website like Paradox of the Active User, Selection Attention, Cognitive Bias, and more!',
    },
    {
        id: 2,
        createdAt: 'Jan 20, 2025',
        title: 'Article 1',
        description:
            'I’ve released an updated Laws of UX index poster to my online store. Updates include additions to the Laws of UX website like Paradox of the Active User, Selection Attention, Cognitive Bias, and more!',
    },
    {
        id: 3,
        createdAt: 'Jan 20, 2025',
        title: 'Article 1',
        description:
            'I’ve released an updated Laws of UX index poster to my online store. Updates include additions to the Laws of UX website like Paradox of the Active User, Selection Attention, Cognitive Bias, and more!',
    },
]

export default function LastUpdateSection() {
    const tTag = useTranslations()

    return (
        <>
            <SectionTag title={tTag('lastUpdates')} />
            <div className="mt-4 flex flex-col tablet:grid tablet:grid-cols-3 gap-8">
                {ARTICLES.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                ))}
            </div>
        </>
    )
}

function ArticleCard({ article }: { article: Article }) {
    return (
        <Link
            href={`/article/${article.id}`}
            className="flex flex-col gap-4 w-full h-full text-left group border p-5 rounded-xl"
        >
            <p className="text-base text-text-primary group-hover:text-primary line-clamp-4 leading-relaxed tracking-wide transition duration-250">
                {article.description}
            </p>
            <div className="flex items-center justify-between">
                <p className="text-text-secondary text-sm">
                    {article.createdAt}
                </p>
                <FiArrowUpRight size={16} />
            </div>
        </Link>
    )
}
