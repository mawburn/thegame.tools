import React from 'react'

import { baseConfig } from '../../baseConfig'

export interface SponsoredByProps {
  className?: string
}

export const SponsoredBy = ({ className = '' }: SponsoredByProps) => (
  <div className="sm:mx-auto mx-2 sm:mb-4 my-1 max-w-full sm:w-6/12 text-center">
    <span className="text-xs mb-1">Built &amp; Sponsored By</span>
    <div className={`flex rounded-md self-center w-full bg-ttl p-2 mb-4 ${className}`}>
      <a
        className="flex flex-wrap justify-around items-center h-full w-full no-underline"
        href="https://tabletop.land"
        target="_new"
      >
        <div className="flex flex-col items-center justify-center">
          <img
            src={`${baseConfig.imgBucket}/tabletopland.png`}
            width={75}
            height={28}
            alt="tabletop.land"
            loading="eager"
          />
          <h2 className="font-ttl tracking-widest text-ttlFont sm:text-normal text-sm font-bold font-normal">
            Tabletop.Land
          </h2>
        </div>
        <h3 className="font-ttl tracking-widest text-ttlFont sm:text-sm text-xs font-normal mt-2">
          Buy &amp; Sell tabletop terrain, miniatures, or accessories!
        </h3>
      </a>
    </div>
  </div>
)
