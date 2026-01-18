import { Tag } from '@/shared/interfaces/_tag.interface'

type Props = {
    data: Tag | string
}
export default function TagCard({ data }: Props) {
    return (
        <div className="px-3 py-0.5 text-sm font-semibold border-[1px] border-black rounded-lg">
            {typeof data === 'string' ? data : data.displayName}
        </div>
    )
}
