import { isBrowser } from './isBrowser'

const regex = new RegExp(/[=|+|\\/]/g)

export const hashKey = (...values: (string | number)[]) => {
  const bta = (str: string) => {
    if (isBrowser()) {
      return btoa(str)
    }

    return Buffer.from(str).toString('base64')
  }

  return bta(values.join('')).replace(regex, '')
}
