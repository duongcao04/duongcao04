import Image from 'next/image'

import Avatar from '@/assets/my_avatar.png'
import { MotionDiv } from '@/lib/motion'

import './loading.css'

function Loader() {
    return (
        <div className="w-screen h-screen fixed top-0 z-50 bg-[#121212]">
            <MotionDiv className="relative w-full h-full flex items-center justify-center">
                <div className="loader"></div>
                <div className="absolute rounded-full">
                    <Image
                        src={Avatar}
                        alt="my avatar"
                        className="rounded-full size-48"
                    />
                </div>
            </MotionDiv>
        </div>
    )
}

export default Loader
