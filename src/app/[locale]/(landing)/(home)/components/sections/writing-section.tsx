import React from 'react'

import Image from 'next/image'

import Test01 from '@/assets/img/tools/animate/animate-css.jpg'

import SectionTag from '../section-tag'

export default function WritingSection() {
    return (
        <>
            <SectionTag title="Writing" seeMore />
            <div className="mt-5 flex flex-col tablet:grid tablet:grid-cols-2 gap-8">
                <Post />
                <Post />
            </div>
        </>
    )
}

function Post() {
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
