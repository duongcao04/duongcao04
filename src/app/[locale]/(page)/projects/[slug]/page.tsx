export default async function ProjectDetail({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const slug = (await params).slug

    return <div>{slug}</div>
}
