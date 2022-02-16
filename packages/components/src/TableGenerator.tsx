import { customAlphabet as nanoid } from 'nanoid'
import { alphanumeric } from 'nanoid-dictionary'
import React, { ElementType, ReactNode, useMemo } from 'react'

interface TableGeneratorProps {
  Wrapper: ElementType<{ children: ReactNode }>
  list?: ReactNode[]
}

const TableGenerator = ({ Wrapper, list = [] }: TableGeneratorProps) => {
  const key = useMemo(() => {
    if (list.length <= 0) {
      return null
    }

    return nanoid(alphanumeric, 10)
  }, [list])

  return list.map((val, i) => <Wrapper key={`${key}${i}`}>{val}</Wrapper>)
}

export default TableGenerator
