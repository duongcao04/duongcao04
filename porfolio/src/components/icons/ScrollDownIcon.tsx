import React from 'react'

export default function ScrollDownIcon() {
    return (
        <svg
            width="60"
            height="100"
            viewBox="0 0 60 100"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                {/* Gradient for modern look */}
                <linearGradient
                    id="scrollGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                >
                    <stop
                        offset="0%"
                        style={{ stopColor: 'var(--primary)', stopOpacity: 1 }}
                    />
                    <stop
                        offset="100%"
                        style={{ stopColor: '#764ba2', stopOpacity: 1 }}
                    />
                </linearGradient>

                {/* Glow effect */}
                <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* Mouse outline */}
            <rect
                x="20"
                y="10"
                width="20"
                height="35"
                rx="10"
                ry="10"
                fill="none"
                stroke="url(#scrollGradient)"
                strokeWidth="2"
                opacity="0.8"
            >
                <animate
                    attributeName="opacity"
                    values="0.4;1;0.4"
                    dur="2s"
                    repeatCount="indefinite"
                />
            </rect>

            {/* Mouse wheel/dot */}
            <circle cx="30" cy="20" r="2" fill="url(#scrollGradient)">
                <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="0,0; 0,8; 0,0"
                    dur="1.5s"
                    repeatCount="indefinite"
                />
                <animate
                    attributeName="opacity"
                    values="1;0.3;1"
                    dur="1.5s"
                    repeatCount="indefinite"
                />
            </circle>

            {/* First chevron arrow */}
            <path
                d="M 20 55 L 30 65 L 40 55"
                fill="none"
                stroke="url(#scrollGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#glow)"
            >
                <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="0,0; 0,5; 0,0"
                    dur="1.2s"
                    repeatCount="indefinite"
                />
                <animate
                    attributeName="opacity"
                    values="0.3;1;0.3"
                    dur="1.2s"
                    repeatCount="indefinite"
                />
            </path>

            {/* Second chevron arrow */}
            <path
                d="M 20 65 L 30 75 L 40 65"
                fill="none"
                stroke="url(#scrollGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#glow)"
            >
                <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="0,0; 0,5; 0,0"
                    dur="1.2s"
                    begin="0.3s"
                    repeatCount="indefinite"
                />
                <animate
                    attributeName="opacity"
                    values="0.3;1;0.3"
                    dur="1.2s"
                    begin="0.3s"
                    repeatCount="indefinite"
                />
            </path>

            {/* Third chevron arrow */}
            <path
                d="M 20 75 L 30 85 L 40 75"
                fill="none"
                stroke="url(#scrollGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#glow)"
            >
                <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="0,0; 0,5; 0,0"
                    dur="1.2s"
                    begin="0.6s"
                    repeatCount="indefinite"
                />
                <animate
                    attributeName="opacity"
                    values="0.3;1;0.3"
                    dur="1.2s"
                    begin="0.6s"
                    repeatCount="indefinite"
                />
            </path>

            {/* Floating dots for extra effect */}
            <circle
                cx="15"
                cy="45"
                r="1.5"
                fill="url(#scrollGradient)"
                opacity="0.6"
            >
                <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="0,0; 0,30; 0,0"
                    dur="3s"
                    repeatCount="indefinite"
                />
                <animate
                    attributeName="opacity"
                    values="0;0.8;0"
                    dur="3s"
                    repeatCount="indefinite"
                />
            </circle>

            <circle
                cx="45"
                cy="50"
                r="1.5"
                fill="url(#scrollGradient)"
                opacity="0.6"
            >
                <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="0,0; 0,25; 0,0"
                    dur="2.5s"
                    begin="0.5s"
                    repeatCount="indefinite"
                />
                <animate
                    attributeName="opacity"
                    values="0;0.8;0"
                    dur="2.5s"
                    begin="0.5s"
                    repeatCount="indefinite"
                />
            </circle>

            {/* Pulse circle background */}
            <circle
                cx="30"
                cy="50"
                r="25"
                fill="none"
                stroke="url(#scrollGradient)"
                strokeWidth="1"
                opacity="0.1"
            >
                <animate
                    attributeName="r"
                    values="20;35;20"
                    dur="4s"
                    repeatCount="indefinite"
                />
                <animate
                    attributeName="opacity"
                    values="0.2;0;0.2"
                    dur="4s"
                    repeatCount="indefinite"
                />
            </circle>
        </svg>
    )
}
