import Image from 'next/image'
import React, { FC } from 'react'

import { imgLoader } from '../../utils/imgLoader'

export interface FooterProps {
  footerClasses?: string
  sectionClasses?: string
  borderTop?: boolean
}

export const Footer: FC<FooterProps> = ({
  children = null,
  footerClasses = '',
  sectionClasses = '',
}) => (
  <footer className={`text-sm max-w-2xl my-4 mx-auto ${footerClasses}`}>
    {children}
    <section className={`flex justify-center items-center mt-3 ${sectionClasses}`}>
      &copy; 2021{' '}
      <a href="https://thegame.tools" className="ml-2 font-semibold">
        TheGame.tools
      </a>
      <span className="mx-2">|</span>
      <a href="https://mawburn.com" rel="noopener me" className="flex justify-center items-center">
        <div className="mr-2 pt-1">
          <Image
            loader={imgLoader}
            src="builtby.svg"
            width={20}
            height={20}
            alt="Built by mawburn"
            loading="lazy"
          />
        </div>
        <div>by mawburn.com</div>
      </a>
    </section>
  </footer>
)
