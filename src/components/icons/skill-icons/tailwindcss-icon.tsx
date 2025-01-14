import React, { SVGProps } from 'react'

function TailwindcssIcon({
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
                    fill="url(#skillIconsTailwindcssLight0)"
                    fillRule="evenodd"
                    d="M83 110q9-36 45-36c36 0 40.5 27 58.5 31.5q18 4.502 31.5-13.5q-9 36-45 36c-36 0-40.5-27-58.5-31.5Q96.5 92 83 110m-45 54q9-36 45-36c36 0 40.5 27 58.5 31.5q18 4.502 31.5-13.5q-9 36-45 36c-36 0-40.5-27-58.5-31.5q-18-4.502-31.5 13.5"
                    clipRule="evenodd"
                />
                <defs>
                    <linearGradient
                        id="skillIconsTailwindcssLight0"
                        x1="86.5"
                        x2="163.5"
                        y1="74"
                        y2="185.5"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#32b1c1" />
                        <stop offset="1" stopColor="#14c6b7" />
                    </linearGradient>
                </defs>
            </g>
        </svg>
    )
}

export default TailwindcssIcon
