import _ from 'lodash'

export const removeOnlyNil = (data: Record<string, unknown>) => {
    return _.omitBy(data, _.isNil)
    // This keeps 0, false, "", [], {}
    // Only removes null and undefined
}
