import cn from 'clsx'
import Link from 'next/link'
import React, { ReactNode } from 'react'

import { baseConfig } from '../../baseConfig'
import { hashKey } from '../../utils/hashKey'

interface Links {
  url: string
  render: ReactNode
  className?: string
}

export interface NavBarProps {
  links: Links[]
  subText?: string
}

export const NavBar = ({ links, subText }: NavBarProps) => (
  <div className="h-20 flex justify-start py-1 px-4 bg-white items-center">
    <Link href="/">
      <a className="flex">
        <img
          src={`${baseConfig.imgBucket}/logoIcon.svg`}
          height={50}
          width={35.5}
          alt="TheGame.tools"
        />
        <div className="flex flex-col	text-primary sm:ml-2 uppercase px-3 justify-center items-center sm:not-sr-only sr-only">
          <div className="font-bold text-center text-sm">TheGame.tools</div>
          {subText && <div className="text-xs ">{subText}</div>}
        </div>
      </a>
    </Link>
    <nav className="flex justify-center items-center pl-4 h-full">
      <ul className="md:flex md:h-full list-none md:p-0 md:m-0">
        {links.map((link, i) => (
          <li
            key={hashKey(link.url, typeof link.render === 'string' ? link.render : i)}
            className={`h-full md:block ${cn(link.className)}`}
          >
            <Link href={link.url}>
              <a className="flex justify-center items-center h-full px-3 mx-1 hover:underline whitespace-nowrap">
                {link.render}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </div>
)
