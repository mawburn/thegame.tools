import Image from 'next/image'

import { HTag } from '@thegametools/components'

import { urls } from '../data/urls'

const affId = '?affiliate_id=2703170'

interface HeaderProps {
  name: string
  sm?: boolean
}

const Header = ({ name, sm = false }: HeaderProps) => {
  let img = 'fluxfall-banner.jpg'

  switch (name) {
    case 'World Generator':
      img = 'pages/world.jpg'
      break
    case 'Person Generator':
      img = 'pages/person.jpg'
      break
    case 'Boons / Complications Generator':
      img = 'pages/boonscomps.jpg'
      break
  }

  const size = name === 'Roll Tables' ? [426, 240] : [230, 115]

  return (
    <header className="max-w-screen-sm">
      <HTag tag="1">Fluxfall Horizon</HTag>
      <HTag tag="2" fade>
        {name}
      </HTag>
      <div className="text-center">
        <a
          href={`${urls.quick}${affId}`}
          className="font-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={`/${img}`}
            layout="intrinsic"
            width={size[0]}
            height={size[1]}
            alt="Fluxfall Horizon"
            priority
            className="rounded-xl overflow-hidden my-2"
          />
          <h2 className={`my-2 ${sm ? 'text-sm' : 'text-xl'} font-bold`}>
            Checkout the <u>FREE</u> Quickstart!
          </h2>
        </a>
        <h3 className="my-4">
          <a href={`${urls.full}${affId}`} target="_blank" rel="noopener noreferrer">
            Or grab the full book <u>here</u>
          </a>
        </h3>
      </div>
      <p className={`text-center ${sm ? 'sr-only' : ''}`}>
        Fluxfall Horizon is a multi-dimensional Tabletop Roleplaying Game that uses the{' '}
        <a href={urls.pbta} className="font-semibold">
          Powered by the Apocalypse
        </a>{' '}
        engine.
      </p>
    </header>
  )
}

export default Header
