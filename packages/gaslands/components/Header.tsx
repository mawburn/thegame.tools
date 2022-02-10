import Image from 'next/image'

import { HTag } from './HTag'

const Header = () => (
  <header className="max-w-screen-sm">
    <HTag tag="1">Savage Worlds Adventure Edition Tools</HTag>
    <HTag tag="2" fade>
      Misc. Online Tools for SWADE
    </HTag>
    <div className="text-center mb-2">
      <Image
        src="/swade.webp"
        layout="intrinsic"
        width={256}
        height={144}
        alt="SWADE.TheGame.tools Logo"
        priority
      />
    </div>
    <p className="text-center">Free tools for boardgames &amp; tabletop RPGs</p>
  </header>
)

export default Header
