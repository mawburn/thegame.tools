const regex = new RegExp(/[=|+|\\| |"|'/]/g)

export const hashKey = (...values: (string | number)[]) => values.join('').replace(regex, '')
