import Image from 'next/image'
import Link from 'next/link'

import { baseConfig } from '@thegametools/components'

const NavBar = () => (
  <div className="h-[82px] flex justify-start py-[5px] px-4 bg-white items-center md:mb-0 mb-8">
    <Link href="/">
      <a className="flex">
        <Image
          src={`${baseConfig.imgBucket}/logoIcon.svg`}
          height={50}
          width={50}
          priority
          alt="TheGame.tools"
        />
        <div className="flex flex-col	text-tgt uppercase px-3 justify-center items-center md:not-sr-only sr-only">
          <div className="font-tgt text-center text-sm">TheGame.tools</div>
          <div className="text-xs ">Fluxfall Horizon Edition</div>
        </div>
      </a>
    </Link>
    <nav className="flex justify-center items-center pl-4 h-full">
      <ul className="md:flex md:h-full list-none md:p-0 md:m-0">
        <li className="h-full">
          <Link href="/">
            <a className="flex justify-center items-center h-full px-3 mx-1 hover:underline whitespace-nowrap">
              Home
            </a>
          </Link>
        </li>
        <li className="md:block hidden h-full">
          <Link href="/world">
            <a className="flex justify-center items-center h-full px-3 mx-1 hover:underline whitespace-nowrap">
              World <span className="md:pl-1 md:not-sr-only sr-only">Gen</span>
            </a>
          </Link>
        </li>
        <li className="md:block hidden h-full">
          <Link href="/person">
            <a className="flex justify-center items-center h-full px-3 mx-1 hover:underline whitespace-nowrap">
              Person <span className="md:pl-1 md:not-sr-only sr-only">Gen</span>
            </a>
          </Link>
        </li>
        <li className="md:block hidden h-full">
          <Link href="/booncomps">
            <a className="flex justify-center items-center h-full px-3 mx-1 hover:underline whitespace-nowrap">
              Boon / Comp <span className="md:pl-1 md:not-sr-only sr-only">Gen</span>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  </div>
)

export default NavBar
