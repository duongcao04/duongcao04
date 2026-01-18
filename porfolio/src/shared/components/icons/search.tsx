import React, { SVGProps } from 'react'

function Search({
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m17 17l4 4M3 11a8 8 0 1 0 16 0a8 8 0 0 0-16 0"
            />
        </svg>
    )
}

export default Search
