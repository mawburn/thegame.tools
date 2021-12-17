import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'

const Home: NextPage = () => {
  const [contDmg, setContDmg] = useState(0)

  return (
    <div>
      <Head>
        <title>Fluxfal Horizon World Generator</title>
        <meta name="description" content="Create a world for Fluxfall Horizon the Tabletop RPG" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold">Fluxfall Horizon World Generator</h1>
        <section>
          <h2>World Config</h2>
        </section>
      </main>
    </div>
  )
}

export default Home
