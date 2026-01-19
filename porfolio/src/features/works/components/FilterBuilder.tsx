import { Chip } from '@heroui/react'

// Filter Categories (English)
const FILTERS = [
    'All',
    'Systems & DevOps',
    'Web App',
    'Cybersecurity',
    'UI/UX Design',
]

export const FilterBuilder = () => {
    {
        /* --- FILTER SECTION --- */
    }
    return (
        <div className="container mx-auto px-4 mb-12 relative z-10">
            <div className="flex flex-wrap items-center justify-center gap-2">
                {FILTERS.map((tag, index) => (
                    <Chip
                        key={tag}
                        variant="bordered"
                        className={`cursor-pointer transition-all border hover:border-purple-500/50 hover:bg-white/5 ${
                            index === 0
                                ? 'bg-white/10 border-purple-500/50 text-text-default'
                                : 'border-white/10 text-default-400'
                        }`}
                        size="lg"
                    >
                        {tag}
                    </Chip>
                ))}
            </div>
        </div>
    )
}
