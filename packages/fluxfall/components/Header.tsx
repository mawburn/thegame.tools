import Image from 'next/image'

import { HTag } from './HTag'
import { urls } from '../data/urls'

interface HeaderProps {
  name: string
  sm?: boolean
}

const Header = ({ name, sm = false }: HeaderProps) => {
  const size = sm ? [213, 120] : [426, 240]

  return (
    <header className="max-w-screen-sm">
      <HTag tag="1">Fluxfall Horizon</HTag>
      <HTag tag="2" fade>
        {name}
      </HTag>
      <div className="text-center">
        <a href={urls.main} className="font-bold" rel="noopener noreferrer">
          <Image
            src="/fluxfall-banner.jpg"
            layout="intrinsic"
            width={size[0]}
            height={size[1]}
            alt="Fluxfall Horizon"
            priority
            className="rounded-xl overflow-hidden my-2"
          />
          <h2 className="my-2 text-xl font-bold">
            Preorder this amazing setting here or checkout <u>FREE</u> Quickstart!
          </h2>
        </a>
      </div>
      <p className="text-center text-sm">
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
