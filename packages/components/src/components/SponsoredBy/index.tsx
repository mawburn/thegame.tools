import Image from 'next/image'
import React from 'react'

import { imgLoader } from '../../utils/imgLoader'

export interface SponsoredByProps {
  className?: string
}

export const SponsoredBy = ({ className }: SponsoredByProps) => (
  <div className={`flex bg-ttl h-12 py-1 mb-4 md:not-sr-only sr-only ${className}`}>
    <a
      className="flex justify-between align-center h-full w-full"
      href="https://tabletop.land"
      target="_new"
    >
      <div className="flex">
        <span className="text-white text-xs mr-8">Built &amp; Sponsored By</span>
        <Image
          loader={imgLoader}
          src="tabletopland.png"
          width={109}
          height={42}
          alt="tabletop.land"
        />
        <h2 className="font-ttl tracking-wider text-ttlFont font-bold my-2 font-normal">
          Tabletop.Land
        </h2>
      </div>
      <h3 className="font-ttl tracking-wider text-ttlFont text-sm font-normal">
        Buy &amp; Sell tabletop terrain, miniatures, or accessories!
      </h3>
      <div />
      <div />
      <div />
    </a>
  </div>
)
