import React from 'react'

function ScrollDownAnimation() {
    return (
        <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="border-2 border-black rounded-[30px] h-[46px] mx-auto mb-2 text-center w-[30px]">
                <svg height="30" width="10">
                    <circle
                        className="animate-scrolldown fill-black"
                        cx="5"
                        cy="15"
                        r="2"
                        fill="black"
                    />
                    <circle
                        className="animate-scrolldown fill-black delay-[0.75s]"
                        cx="5"
                        cy="15"
                        r="2"
                        fill="black"
                    />
                </svg>
            </div>
        </div>
    )
}

export default ScrollDownAnimation
