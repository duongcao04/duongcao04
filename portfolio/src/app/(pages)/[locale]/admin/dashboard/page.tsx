import React from 'react'

const NoiseBackground = ({
    type = 'dots',
    intensity = 'medium',
    animated = false,
    className = '',
    children,
}) => {
    const noiseStyles = {
        dots: {
            backgroundImage: `
        radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px),
        radial-gradient(circle at 75% 75%, rgba(255,255,255,0.08) 1px, transparent 1px),
        radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 1px, transparent 1px)
      `,
            backgroundSize: '20px 20px, 15px 15px, 25px 25px',
            backgroundPosition: '0 0, 10px 10px, 5px 5px',
        },
        crosshatch: {
            backgroundImage: `
        linear-gradient(45deg, rgba(255,255,255,0.02) 25%, transparent 25%),
        linear-gradient(-45deg, rgba(255,255,255,0.02) 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.02) 75%),
        linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.02) 75%)
      `,
            backgroundSize: '4px 4px',
            backgroundPosition: '0 0, 0 2px, 2px -2px, -2px 0px',
        },
        grid: {
            background: `
        repeating-linear-gradient(
          0deg,
          rgba(255,255,255,0.03),
          rgba(255,255,255,0.03) 1px,
          transparent 1px,
          transparent 2px
        ),
        repeating-linear-gradient(
          90deg,
          rgba(255,255,255,0.03),
          rgba(255,255,255,0.03) 1px,
          transparent 1px,
          transparent 2px
        )
      `,
        },
        grain: {
            backgroundImage: `
        radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)
      `,
            backgroundSize: '20px 20px',
        },
        static: {
            background: `
        linear-gradient(90deg, transparent 98%, rgba(255,255,255,0.03) 100%),
        linear-gradient(rgba(255,255,255,0.02) 50%, transparent 50%)
      `,
            backgroundSize: '3px 3px, 3px 6px',
        },
    }

    const intensityMap = {
        light: 0.3,
        medium: 0.6,
        heavy: 1,
    }

    const animationClass = animated ? 'animate-pulse' : ''
    const opacityClass = `opacity-${Math.round(intensityMap[intensity] * 100)}`

    return (
        <div className={`relative overflow-hidden ${className}`}>
            <div
                className={`absolute inset-0 ${animationClass}`}
                style={{
                    ...noiseStyles[type],
                    opacity: intensityMap[intensity],
                }}
            />
            {children && <div className="relative z-10">{children}</div>}
        </div>
    )
}

export default function DashboardPage() {
    return (
        <NoiseBackground type="dots" intensity="medium">
            <div className="p-8">
                <h1>Your content here</h1>
            </div>
        </NoiseBackground>
    )
}
