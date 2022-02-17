import React, { FC } from 'react'

import { baseConfig } from './baseConfig'

interface FooterProps {
  footerClasses?: string
  sectionClasses?: string
  borderTop?: boolean
}

export const Footer: FC<FooterProps> = ({
  children = null,
  footerClasses = '',
  sectionClasses = '',
}) => (
  <footer className={`text-sm max-w-2xl mx-auto ${footerClasses}`}>
    {children}
    <section
      style={{ marginTop: '1.5rem' }}
      className={`flex justify-center items-center ${sectionClasses}`}
    >
      &copy;2021 <a href="https://thegame.tools">TheGame.tools</a> |{' '}
      <a href="https://mawburn.com" rel="noopener me">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${baseConfig.imgBucket}/builtby.svg`}
          style={{ display: 'inline-block !important', margin: '0 0.25rem !important' }}
          width={25}
          height={25}
          alt="Built by mawburn"
          loading="lazy"
        />
        by mawburn.com
      </a>
    </section>
  </footer>
)
