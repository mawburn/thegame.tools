import Image from 'next/image'
import Link from 'next/link'

import { baseConfig } from '@thegametools/components'

const NavBar = () => (
  <div className="h-[82px] flex py-[5px] px-4 bg-white mb-8 shadow-md items-center">
    <Link href="/">
      <a className="flex">
        <Image
          src={`${baseConfig.imgBucket}/logoIcon.svg`}
          height={50}
          width={50}
          priority
          alt="TheGame.tools"
        />
        <div className="flex flex-col	text-tgt uppercase px-3 justify-center items-center">
          <div className="font-tgt text-center text-sm">TheGame.tools</div>
          <div className="text-xs">Fluxfall Horizon Edition</div>
        </div>
      </a>
    </Link>
    <nav className="pl-4 h-full">
      <ul className="flex h-full list-none p-0 m-0">
        <li className="h-full">
          <Link href="/">
            <a className="flex justify-center items-center h-full px-3 mx-1 hover:underline">
              Home
            </a>
          </Link>
        </li>
        <li className="h-full">
          <Link href="/world">
            <a className="flex justify-center items-center h-full px-3 mx-1 hover:underline">
              World Gen
            </a>
          </Link>
        </li>
        <li className="h-full">
          <Link href="/person">
            <a className="flex justify-center items-center h-full px-3 mx-1 hover:underline">
              Person Gen
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  </div>
)

export default NavBar
