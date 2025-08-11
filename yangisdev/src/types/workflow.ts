export type WorkflowStep = {
    id: number | string
    stepNumber: string | number
    title: string
    shortDescription: string
    content: string
    contentTree?: { title: string; children: string[] }[]
    isImportant?: boolean
}
