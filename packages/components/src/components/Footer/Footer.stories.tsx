import React from 'react'

import { Footer } from './'

export default {
  component: Footer,
}

export const Basic = () => <Footer />
export const WithContent = () => (
  <Footer>
    <section className="flex flex-col justify-center items-center max-w-screen-sm">
      <p>
        Fluxfall.TheGame.Tools is an independent production by{' '}
        <a href="https://thegame.tools" rel="noopener">
          TheGame.Tools
        </a>{' '}
        and is not affiliated with Dave Thaumavore. It is published under the Fluxfall Horizon Third
        Party License. Fluxfall Horizon is copyright Dave Thaumavore.
      </p>
    </section>
  </Footer>
)
