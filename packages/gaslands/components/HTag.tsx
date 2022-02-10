import React, { ReactNode } from 'react'

interface HTagProps {
  tag: '1' | '2' | '3' | '4' | '5' | '6'
  children: ReactNode
  className?: string
  fade?: boolean
  noCenter?: boolean
}

const combine = (arr: string[], size: string) => {
  if (
    [
      'text-4xl',
      'text-3xl',
      'text-2xl',
      'text-xl',
      'text-lg',
      'text-base',
      'text-sm',
      'text-xs',
    ].every(c => !arr.includes(c))
  ) {
    arr.push(size)
  }

  return arr.join(' ')
}

export const HTag = ({
  tag,
  children,
  className = undefined,
  fade = false,
  noCenter = false,
}: HTagProps) => {
  const classes = ['font-bold', 'mb-2']

  if (!noCenter) {
    classes.push('text-center')
  }

  if (fade) {
    classes.push('text-gray-600')
  }

  if (className) {
    classes.push(className)
  }

  switch (tag) {
    case '1':
      return <h1 className={combine(classes, 'text-3xl')}>{children}</h1>
    case '2':
      return <h2 className={combine(classes, 'text-2xl')}>{children}</h2>
    case '3':
      return <h3 className={combine(classes, 'text-xl')}>{children}</h3>
    case '4':
      return <h4 className={combine(classes, 'text-lg')}>{children}</h4>
    case '5':
      return <h5 className={combine(classes, 'text-base')}>{children}</h5>
    case '6':
      return <h6 className={combine(classes, 'text-base')}>{children}</h6>
  }
}
