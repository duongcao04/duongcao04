import _ from 'lodash'

export const deepClean = (input: unknown): unknown => {
    // 1. If it's an array, map through it and filter out undefined/null results
    if (Array.isArray(input)) {
        return input
            .map(deepClean)
            .filter(
                (v) =>
                    !(
                        _.isNil(v) ||
                        (_.isEmpty(v) && !_.isNumber(v) && !_.isBoolean(v))
                    )
            )
    }

    // 2. If it's an object, reduce keys
    if (_.isPlainObject(input)) {
        const result = _.transform(
            input as unknown as typeof Object,
            (result, value, key) => {
                const cleaned = deepClean(value)
                // Keep if not nil and not empty (unless it's a number/boolean)
                if (
                    !_.isNil(cleaned) &&
                    !(
                        _.isEmpty(cleaned) &&
                        !_.isNumber(cleaned) &&
                        !_.isBoolean(cleaned)
                    )
                ) {
                    result[key] = cleaned
                }
            },
            {}
        )

        // If the resulting object is empty, return undefined so the parent removes it
        return _.isEmpty(result) ? undefined : result
    }

    // 3. Return primitives (checking valid empty logic)
    return input
}

export const removeOnlyNil = (data: Record<string, unknown>) => {
    return _.omitBy(data, _.isNil)
    // This keeps 0, false, "", [], {}
    // Only removes null and undefined
}
