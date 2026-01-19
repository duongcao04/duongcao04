import { useQuery } from '@tanstack/react-query'

import { categoriesListOptions } from './options/category-queries'

export const useCategories = () => {
    return useQuery(categoriesListOptions())
}
