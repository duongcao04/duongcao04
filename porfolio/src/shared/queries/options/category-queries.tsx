/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { queryOptions } from '@tanstack/react-query'

import { createClient } from '@/lib/supabase/client'
import { ICategory } from '@/shared/interfaces'

// ------------------------------------------------------------------
// 2. TRANSFORMER
// ------------------------------------------------------------------
// Maps DB columns (snake_case) to App interface (camelCase)
const transformCategory = (row: any): ICategory => ({
    ...row,
    id: row.id,
    code: row.code,
})

// ------------------------------------------------------------------
// 3. FETCH FUNCTION
// ------------------------------------------------------------------
const fetchCategories = async () => {
    const supabase = createClient()

    const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('display_name', { ascending: true })

    if (error) {
        throw new Error(error.message)
    }

    return data?.map(transformCategory)
}

// ------------------------------------------------------------------
// 4. EXPORT HOOK
// ------------------------------------------------------------------
export const categoriesListOptions = () =>
    queryOptions({
        queryKey: ['categories'],
        queryFn: fetchCategories,
        staleTime: 1000 * 60 * 60, // Categories rarely change (1 hour cache)
    })
