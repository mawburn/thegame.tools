import { randomInt } from '.'

export const rollOnTable = <T>(array: T[]): T => array[randomInt(0, array.length - 1)]
