import React from 'react'

import { EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

type PropType = {
    slides: number[]
    options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { slides, options } = props
    const [emblaRef] = useEmblaCarousel(options, [
        Autoplay({ playOnInit: false, delay: 3000 }),
    ])

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container gap-3">
                    {slides.map((index) => (
                        <div className="embla__slide border" key={index}>
                            <div className="embla__slide__number">
                                <span>{index + 1}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default EmblaCarousel
