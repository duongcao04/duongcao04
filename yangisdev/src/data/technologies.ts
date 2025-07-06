export type Technology = {
    id: string
    name: string
    logo: string
    originial_website: string
}
const TECHNOLOGY_LIST: Technology[] = [
    {
        id: '1',
        name: 'React',
        logo: 'skill-icons:react-dark',
        originial_website: 'https://www.react.dev',
    },
    {
        id: '2',
        name: 'Nodejs',
        logo: 'skill-icons:nodejs-dark',
        originial_website: 'https://www.react.dev',
    },
    {
        id: '3',
        name: 'Html5',
        logo: 'skill-icons:html',
        originial_website: 'https://www.react.dev',
    },
    {
        id: '4',
        name: 'Css3',
        logo: 'skill-icons:css',
        originial_website: 'https://www.react.dev',
    },
    {
        id: '5',
        name: 'MongoDB',
        logo: 'skill-icons:mongodb',
        originial_website: 'https://www.react.dev',
    },
    {
        id: '6',
        name: 'MySQL',
        logo: 'skill-icons:mysql-dark',
        originial_website: 'https://www.react.dev',
    },
]

// Dynamically generate the enum
export const TECHNOLOGIES = TECHNOLOGY_LIST.reduce(
    (enumObj, tech, index) => {
        const key = tech.name.toLowerCase()
        enumObj[key] = TECHNOLOGY_LIST[index]
        return enumObj
    },
    {} as Record<string, Technology>
)
