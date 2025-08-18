import { marked } from 'marked'
import removeAccents from 'remove-accents'

type Options = {
    levels?: number[]
}
export const getHeadings = (source: string, options?: Options) => {
    const levels = options?.levels ?? [1, 2, 3, 4, 5]

    const headings = []
    const lexer = marked.lexer(source)
    for (const token of lexer) {
        if (token.type === 'heading' && levels.includes(token.depth)) {
            headings.push({
                level: token.depth,
                text: token.text,
            })
        }
    }
    return headings
}

export const getHeadingId = (str: string) => {
    let id = ''
    if (typeof str !== 'string') {
        return
    }
    // 1. First char match [1-9]
    if (str.split('')[0].match(/\d+/) && str.split('')[1] === '.') {
        id = removeAccents(str.split('.')[1].trim())
            .toLowerCase()
            .replace(/\s+/g, '-')
    } else {
        id = removeAccents(str.trim()).toLowerCase().replace(/\s+/g, '-')
    }
    return id
}
