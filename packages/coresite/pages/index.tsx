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
      <section>
        <h2 className="my-2 p-0 mx-0 font-tgt text-center text-xl">The Dream</h2>
        <p>The idea behind this project, will be to build out simple or complex tools that help with various games. It is meant to be an open source community effort, so feel free to contribute or add to the list.</p>
        <p>This repo used NextJS, Typescript, &amp; Tailwind.css. It is in it's early stages, but we will build up a repo of helpful tools &amp; components to speed up the process of making useful tools. As well as provide a simple yet opinionated approach.</p>
        <p>But the tools don't need to be created as part of this repo or even use the same libraries or languages. Each toolset will be given its own subdomain, hence the name of the site.</p>
        <p className="text-center">ie: <strong>https://[gamename].the game.tools</strong></p>
      </section>
      <section>
      <h2 className="my-2 p-0 mx-0 font-tgt text-center text-xl">List of Tools</h2>
      <div className="flex justify-center items-center">
        <GameLink
          name="Fluxfall Horizon World Generator"
          domain="https://fluxfall.thegame.tools"
          img="ogimg.jpg"
          descr="A random world generator for the game PbtA game Fluxfall Horizon"
        />
      </div>
      </section>
    </main>
  </main>
)

export default Home
