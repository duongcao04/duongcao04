/**
 * We use a structural type here to avoid importing the complex
 * FieldApi<...> type which requires 23+ generic arguments.
 */
interface FieldWithMeta {
    state: {
        meta: {
            errors: (string | { message: string } | null | undefined)[]
            value: any
        }
    }
}
/**
 * Checks if a TanStack Form field has errors.
 */
export const isFieldInvalid = (field: FieldWithMeta | any): boolean => {
    return field.state.meta.errors.length > 0
}
export const getFieldValue = (field: FieldWithMeta | any) => {
    return field.state.value
}

/**
 * Extracts and joins error messages from a TanStack Form field.
 * Returns undefined if there are no errors, making it compatible with HeroUI's errorMessage prop.
 */
export const getFieldErrors = (field: FieldWithMeta | any) => {
    const errors = field.state.meta.errors

    if (!errors || errors.length === 0) return undefined

    return errors
        .map(
            (err: unknown) =>
                (err as { message?: string })?.message || String(err)
        ) // Handle object or string errors
        .filter(Boolean)
        .join(', ')
}
