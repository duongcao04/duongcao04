import React from 'react'

import Image from 'next/image'

import Test01 from '@/assets/img/tools/buildDocsWeb/gitbook.jpg'

import SectionTag from '../section-tag'

export default function WorkSection() {
    return (
        <>
            <SectionTag title="Work" seeMore href="/work" />
            <div className="mt-5 flex flex-col tablet:grid tablet:grid-cols-2 gap-8">
                <Work />
                <Work />
            </div>
        </>
    )
}

function Work() {
    return (
        <div className="rounded-xl overflow-hidden">
            <Image
                src={Test01}
                alt="Test image"
                className="rounded-xl hover:scale-110 transition duration-250"
            />
        </div>
    )
}
