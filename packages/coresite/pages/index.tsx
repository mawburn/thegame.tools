import type { NextPage } from 'next'
import Head from 'next/head'
import GameLink from '../components/GameLink'

import Header from '../components/Header'
import { title } from './_document'

const Home: NextPage = () => (
  <main className="container px-4 flex items-center flex-col w-full max-w-5xl">
    <Head>
      <title>{title}</title>
    </Head>
    <Header />
    <main>
      <h2>List of Tools</h2>
      <div className="flex justify-center items-center">
        <GameLink
          name="Fluxfall Horizon World Generator"
          domain="https://fluxfall.thegame.tools"
          img="ogimg.jpg"
          descr="A random world generator for the game PbtA game Fluxfall Horizon"
        />
      </div>
    </main>
  </main>
)

export default Home
