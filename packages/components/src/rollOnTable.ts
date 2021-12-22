export const rollOnTable = <T>(array: T[]): T => {
  const max = array.length - 1

  const result = Math.floor(Math.random() * max + 1)

  return array[result]
}
