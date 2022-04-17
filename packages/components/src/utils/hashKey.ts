const regex = new RegExp(/[=|+|\\/]/g)

export const hashKey = (...values: (string | number)[]) => {
  const bta = (str: string) => (btoa ? btoa(str) : Buffer.from(str).toString('base64'))

  return bta(values.join('')).replace(regex, '')
}
