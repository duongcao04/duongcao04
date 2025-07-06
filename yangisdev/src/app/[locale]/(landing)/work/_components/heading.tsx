'use client'

import React, { useEffect, useState } from 'react'

import { MotionDiv, MotionH1, MotionP } from '@/lib/motion'

function Heading() {
    const [isVisible, setVisible] = useState<boolean>(false)
    const VALUE_VISIBLE = 80

    const listenScrollEvent = () => {
        if (window.scrollY > VALUE_VISIBLE) {
            return setVisible(true)
        } else if (window.scrollY < VALUE_VISIBLE) {
            return setVisible(false)
        }
    }

    console.log(isVisible)

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent)

        return () => window.removeEventListener('scroll', listenScrollEvent)
    }, [])

    const variant = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
        },
    }

    return (
        <MotionDiv
            initial="show"
            whileInView={isVisible ? 'hidden' : 'show'}
            variants={variant}
            transition={{ duration: 0.1 }}
            className="mb-32"
        >
            <MotionH1
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
            >
                Projects
            </MotionH1>
            <MotionP
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 }}
                className="mt-5 text-xl leading-relaxed"
            >
                <span>
                    I have learned technologies like HTML5, CSS3,
                    Javascript/Typescript, Nodejs, Expressjs, MongoDB, MySQL,
                    etc.
                </span>
                <br />
                <span>
                    My experiences are shown through the projects below.
                </span>
            </MotionP>
        </MotionDiv>
    )
}

export default Heading
