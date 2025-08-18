import React, { SVGProps } from 'react'

function ArrowUp({
    width = 256,
    height = 256,
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
            {...otherProps}
        >
            <g
                fill={fill}
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.5"
            >
                <path strokeMiterlimit="10" d="M12 4v16" />
                <path
                    strokeLinejoin="round"
                    d="M19.66 11.033L13.089 4.46a1.53 1.53 0 0 0-2.176 0L4.34 11.033"
                />
            </g>
        </svg>
    )
}

export default ArrowUp
