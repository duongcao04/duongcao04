'use client'

import React, { SVGProps } from 'react'

function FlutterIcon({
    width = 256,
    height = 256,
    fill = '#f4f2ed',
    ...otherProps
}: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            {...otherProps}
        >
            <g fill="none">
                <rect width={width} height={height} fill={fill} rx="60" />
                <path
                    fill="#44d1fd"
                    d="M144.934 38.062L200.709 38l-93.575 93.526l-24.387 24.251L55 127.996zm-.519 83.507c.724-.956 2.056-.484 3.067-.607l53.179.013l-48.467 48.42l-27.891-27.72z"
                />
                <path
                    fill="#1fbcfd"
                    d="m96.501 169.442l27.802-27.767l27.891 27.72l.116.123l-28 27.74z"
                />
                <path
                    fill="#08589c"
                    d="m124.31 197.258l28-27.74l48.371 48.419c-18.22.041-36.434-.014-54.647.027c-1.038.232-1.68-.717-2.343-1.304z"
                />
            </g>
        </svg>
    )
}

export default FlutterIcon
