import React from 'react'

import Image, { StaticImageData } from 'next/image'

function ImageCarousel({ data }: { data?: string[] | StaticImageData[] }) {
    return (
        <div className="space-y-2">
            <div className="w-full py-5  bg-border rounded-xl">
                <div className="mx-auto w-[1000px] h-[497px] rounded-xl">
                    {data && (
                        <Image
                            src={data[0]}
                            alt="Image"
                            className="rounded-xl"
                        ></Image>
                    )}
                </div>
            </div>
            <p className="text-base font-medium italic opacity-70 text-center">
                Screenshot
            </p>
        </div>
    )
}

export default ImageCarousel
