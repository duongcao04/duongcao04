import React, { SVGProps } from 'react'

function ViteIcon({
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
                    fill="url(#skillIconsViteLight0)"
                    d="m227.088 57.602l-93.832 167.787c-1.938 3.465-6.915 3.485-8.881.038L28.682 57.617c-2.142-3.756 1.07-8.306 5.328-7.545l93.932 16.79a5.1 5.1 0 0 0 1.812-.004l91.968-16.763c4.243-.773 7.47 3.742 5.366 7.507"
                />
                <path
                    fill="url(#skillIconsViteLight1)"
                    d="m172.687 28.05l-69.438 13.605a2.55 2.55 0 0 0-2.055 2.352l-4.272 72.141a2.55 2.55 0 0 0 3.118 2.635l19.333-4.461c1.809-.417 3.443 1.176 3.072 2.995l-5.744 28.126c-.387 1.893 1.391 3.511 3.239 2.95l11.941-3.628c1.851-.562 3.63 1.061 3.238 2.956l-9.128 44.179c-.571 2.764 3.105 4.271 4.638 1.901l1.024-1.582l56.582-112.92c.948-1.89-.686-4.046-2.763-3.646l-19.899 3.841c-1.87.36-3.461-1.381-2.934-3.21l12.989-45.026c.528-1.832-1.069-3.575-2.941-3.209"
                />
                <defs>
                    <linearGradient
                        id="skillIconsViteLight0"
                        x1="26.346"
                        x2="143.127"
                        y1="44.075"
                        y2="202.673"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#41d1ff" />
                        <stop offset="1" stopColor="#bd34fe" />
                    </linearGradient>
                    <linearGradient
                        id="skillIconsViteLight1"
                        x1="122.551"
                        x2="143.676"
                        y1="31.743"
                        y2="176.66"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#ffea83" />
                        <stop offset=".083" stopColor="#ffdd35" />
                        <stop offset="1" stopColor="#ffa800" />
                    </linearGradient>
                </defs>
            </g>
        </svg>
    )
}

export default ViteIcon
