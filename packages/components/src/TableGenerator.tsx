import { customAlphabet as nanoid } from 'nanoid'
import { alphanumeric } from 'nanoid-dictionary'
import React, { FC, Fragment, ReactNode, useMemo } from 'react'

interface TableGeneratorProps {
  list: ReactNode[]
  sectionClasses?: string | string[]
}

const Wrapper: FC<{ classes?: string }> = ({ classes, children }) =>
  classes ? <section className={classes}>{children}</section> : <>{children}</>

export const TableGenerator = ({ list = [], sectionClasses }: TableGeneratorProps) => {
  const key = useMemo(() => {
    if (list.length <= 0) {
      return null
    }

    return nanoid(alphanumeric, 10)
  }, [list])

  const classes =
    sectionClasses && Array.isArray(sectionClasses) ? sectionClasses.join(' ') : sectionClasses

  return list.length > 0 ? (
    <Wrapper classes={classes}>
      {list.map((val, i) => (
        <Fragment key={`${key}${i}`}>{val}</Fragment>
      ))}
    </Wrapper>
  ) : null
}
