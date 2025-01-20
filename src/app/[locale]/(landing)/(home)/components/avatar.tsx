import React from 'react'

import Image from 'next/image'

import AVATAR from '@/assets/my_avatar.png'

function Avatar() {
    return (
        <div className="relative">
            <div className="w-[385px] h-[430px] bg-red-500 blur-3xl rounded-full"></div>
            <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                <div className="relative">
                    <div className="size-[300px] bg-[#fffff063] blur-3xl"></div>
                    <Image
                        src={AVATAR}
                        alt="My avatar"
                        width={260}
                        height={260}
                        className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] size-[260px] rounded-full"
                    />
                </div>
            </div>
        </div>
    )
}

export default Avatar
