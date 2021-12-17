export const roll = (array: [], dieSize?: number) => {
  const max = dieSize ?? array.length

  const result = Math.floor(Math.random() * max + 1)

  return array[result]
}
