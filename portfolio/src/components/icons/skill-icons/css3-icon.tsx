'use client'

import React, { SVGProps } from 'react'

function Css3Icon({
    width = 256,
    height = 256,
    fill = '#0277bd',
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
                    fill="#ebebeb"
                    d="m53.753 102.651l2.862 31.942h71.481v-31.942zM128.095 38H48l2.904 31.942h77.191zm0 180.841v-33.233l-.14.037l-35.574-9.605l-2.274-25.476H58.042l4.475 50.154l65.431 18.164z"
                />
                <path
                    fill="#fff"
                    d="m167.318 134.593l-3.708 41.426l-35.625 9.616v33.231l65.483-18.148l.48-5.397l7.506-84.092l.779-8.578L208 38h-80.015v31.942h45.009l-2.906 32.709h-42.103v31.942z"
                />
            </g>
        </svg>
    )
}

export default Css3Icon
