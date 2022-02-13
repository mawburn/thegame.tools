import React, { FC, ReactNode } from 'react'
import Image from 'next/image'

import { config } from './config'

interface FooterProps {
  borderColor?: string
  footerClasses?: string
  sectionClasses?: string
}

export const Footer: FC<FooterProps> = ({
  children = null,
  borderColor = 'slate-400',
  footerClasses = '',
  sectionClasses = '',
}) => (
  <footer
    className={`p-6 text-sm max-w-2xl mx-auto border-t border-${borderColor} ${footerClasses}`}
  >
    {children}
    <section className={`my-2 text-center ${sectionClasses}`}>
      &copy;2021 <a href="https://thegame.tools">TheGame.tools</a> |{' '}
      <a href="https://mawburn.com" rel="noopener me">
        <Image
          src={`${config.imgBucket}/builtby.svg`}
          layout="intrinsic"
          width={25}
          height={25}
          alt="Built by mawburn"
          loading="lazy"
        />{' '}
        by mawburn.com
      </a>
    </section>
  </footer>
)
