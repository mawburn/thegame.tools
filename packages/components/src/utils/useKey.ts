import { customAlphabet } from 'nanoid'
import { alphanumeric } from 'nanoid-dictionary'
import { useCallback, useMemo } from 'react'

export const useKey = <T>(list?: T[]) => {
  const keyPrefix = useMemo(() => {
    if (list) {
      const nanoid = customAlphabet(alphanumeric, 10)
      return nanoid()
    }
  }, [list])

  return useCallback((place: number) => `${keyPrefix}${place}`, [keyPrefix])
}
