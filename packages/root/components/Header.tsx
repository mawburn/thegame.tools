import Image from 'next/image'

import { HTag } from '@thegametools/components'

const affId = '?affiliate_id=2703170'

interface HeaderProps {
  name: string
  sm?: boolean
}

const Header = ({ name, sm = false }: HeaderProps) => (
  <header className="max-w-screen-sm">
    <HTag tag="1">Root RPG</HTag>
    <HTag tag="2" fade>
      {name}
    </HTag>
    <div className="text-center">
      <a
        href={`https://www.drivethrurpg.com/product/373406/Root-The-Roleplaying-Game${affId}`}
        className="font-bold"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/game.png"
          layout="intrinsic"
          width={200}
          height={200}
          alt="Root RPG"
          priority
          className="my-2"
        />
        <h2 className={`my-2 ${sm ? 'text-sm' : 'text-xl'} font-bold`}>
          Grab the book <u>Here</u>!
        </h2>
      </a>
    </div>
    <p className={`text-center ${sm ? 'sr-only' : ''}`}>
      Root is a Tabletop Roleplaying Game that uses the{' '}
      <a href="https://en.wikipedia.org/wiki/Powered_by_the_Apocalypse" className="font-semibold">
        Powered by the Apocalypse
      </a>{' '}
      engine.
    </p>
  </header>
)

export default Header
