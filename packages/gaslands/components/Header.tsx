import Image from 'next/image'

import { HTag } from './HTag'

const Header = () => (
  <header className="max-w-screen-sm">
    <HTag tag="1" className="sr-only">
      Gaslands Motorpool
    </HTag>
    <div className="text-center mb-2">
      <Image
        src="/logo-mp-full.png"
        layout="intrinsic"
        width={450}
        height={135}
        alt="Gaslands Motorpool"
        priority
      />
    </div>
    <HTag tag="2">Tools for building your cars, teams, &amp; battle reports!</HTag>
  </header>
)

export default Header
