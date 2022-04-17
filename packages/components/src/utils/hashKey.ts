const regex = new RegExp(/[=|+|\\/]/g)

export const hashKey = (...values: (string | number)[]) => {
  const bta = (str: string) => {
    if (btoa) {
      return btoa(str).replace(regex, '')
    }

    return Buffer.from(str).toString('base64').replace(regex, '')
  }

  return bta(values.join(''))
}
