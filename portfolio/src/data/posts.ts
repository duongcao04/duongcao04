export type Post = {
    id: string | number
    title: string
    description: string
    content: string
    thumbnail: string
    createdAt: string
    slug: string
}
export const POSTS: Post[] = [
    {
        id: 1,
        title: 'Tại sao package-lock.json tồn tại và cách nó hoạt động',
        description:
            'Trong quá trình phát triển phần mềm, package-lock.json là một file quan trọng giúp đảm bảo sự nhất quán và đồng bộ giữa các máy tính trong dự án. Bài viết này sẽ giải thích tại sao package-lock.json tồn tại, cách nó hoạt động và lý do bạn nên commit file này vào repository.',
        content: 'content',
        thumbnail:
            'https://images.unsplash.com/photo-1543251698-10f13f004b0f?q=80&w=1963&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        createdAt: '2021-09-01',
        slug: 'package-lock-json',
    },
    {
        id: 2,
        title: 'Cách sử dụng TypeScript với Node.js',
        description:
            'TypeScript là một ngôn ngữ lập trình phổ biến trong cộng đồng Node.js, giúp tăng hiệu suất, giảm lỗi và dễ dàng bảo trì mã nguồn. Bài viết này sẽ hướng dẫn cách sử dụng TypeScript với Node.js, từ cài đặt, cấu hình cho đến viết mã và chạy ứng dụng.',
        content: 'content',
        thumbnail:
            'https://images.unsplash.com/photo-1501045337096-542a73dafa4f?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        createdAt: '2025-01-27',
        slug: 'typescript-nodejs',
    },
    {
        id: 3,
        title: 'Cách sử dụng React Hook Form',
        description:
            'React Hook Form là một thư viện quản lý form mạnh mẽ và dễ sử dụng trong ứng dụng React. Bài viết này sẽ hướng dẫn cách sử dụng React Hook Form, từ cài đặt, cấu hình cho đến viết mã và xử lý form.',
        content: 'content',
        thumbnail:
            'https://images.unsplash.com/photo-1570032678348-5a18c8a667ed?q=80&w=2134&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        createdAt: '2024-09-01',
        slug: 'react-hook-form',
    },
    {
        id: 4,
        title: 'Hướng dẫn sử dụng Docker cho người mới bắt đầu',
        description:
            'Docker là một công cụ mạnh mẽ giúp tạo ra các container để chạy ứng dụng một cách nhất quán trên nhiều môi trường khác nhau. Bài viết này sẽ hướng dẫn cách sử dụng Docker cho người mới bắt đầu, từ cài đặt, cấu hình cho đến chạy container.',
        content: 'content',
        thumbnail:
            'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        createdAt: '2023-10-01',
        slug: 'docker-beginner-guide',
    },
    {
        id: 5,
        title: 'Hiểu về GraphQL và cách sử dụng với React',
        description:
            'GraphQL là một ngôn ngữ truy vấn mạnh mẽ cho API, giúp tối ưu hóa việc lấy dữ liệu. Bài viết này sẽ hướng dẫn cách sử dụng GraphQL với React, từ cài đặt, cấu hình cho đến viết mã và truy vấn dữ liệu.',
        content: 'content',
        thumbnail:
            'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        createdAt: '2022-05-15',
        slug: 'graphql-react',
    },
    {
        id: 6,
        title: 'Làm quen với Next.js và các tính năng nổi bật',
        description:
            'Next.js là một framework mạnh mẽ cho React, giúp xây dựng các ứng dụng web tĩnh và động một cách dễ dàng. Bài viết này sẽ giới thiệu về Next.js và các tính năng nổi bật của nó, từ cài đặt, cấu hình cho đến triển khai ứng dụng.',
        content: 'content',
        thumbnail:
            'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        createdAt: '2023-07-20',
        slug: 'nextjs-features',
    },
]
