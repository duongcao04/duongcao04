import React, { SVGProps } from 'react'

function Send({
    width = 24,
    height = 24,
    fill = 'none',
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
            <path
                fill={fill}
                stroke="currentColor"
                d="M5.5 13L18 6m-1.75 17.5h.25a72.7 72.7 0 0 1 6.504-21.962L23.26 1L23 .74l-.538.256A72.7 72.7 0 0 1 .5 7.5v.25l5 5v7.75h.25l1.774-1.69a12 12 0 0 1 2.313-1.723z"
            />
        </svg>
    )
}

export default Send
