export const roll = <T>(array: T[], dieSize?: number): T => {
  const max = dieSize ?? array.length

  const result = Math.floor(Math.random() * max + 1)

  return array[result - 1]
}
