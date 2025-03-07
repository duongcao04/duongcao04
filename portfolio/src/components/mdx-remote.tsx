import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'

const components = {
    p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
        <p {...props}>{props.children}</p>
    ),
    h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h1 {...props} className="font-lexendDeca">
            {props.children}
        </h1>
    ),
}

export default function CustomMDX(props: MDXRemoteProps) {
    return (
        <MDXRemote
            {...props}
            components={{ ...components, ...(props.components || {}) }}
        />
    )
}
