import Image from 'next/image'

import { HTag } from '@thegametools/components/src'

const Header = () => (
  <header className="max-w-screen-sm">
    <HTag tag="1">TheGame.tools</HTag>
    <HTag tag="2" fade>
      Tools for RPGS &amp; Boardgames
    </HTag>
    <div className="text-center mb-2">
      <Image
        src="https://storage.googleapis.com/thegametools/logoIcon.svg"
        layout="intrinsic"
        width={150}
        height={150}
        alt="TheGame.tools Logo"
        priority
        className="rounded-xl overflow-hidden my-2"
      />
    </div>
    <p className="text-center">Free tools for boardgames &amp; tabletop RPGs</p>
  </header>
)

export default Header
