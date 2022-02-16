import type { NextPage } from 'next'
import Head from 'next/head'
import { useCallback, useState } from 'react'

import { rollOnTable, TableGenerator, useKey } from '@thegametools/components'

import Header from '../components/Header'
import WorldProperty from '../components/WorldProperty'
import {
  clothing,
  deviation,
  devotion,
  language,
  localEvent,
  money,
  techLevel,
  tradition,
} from '../data/world'
import { ReactElement } from 'react'

const Home: NextPage = () => {
  const [worlds, setWorlds] = useState<ReactElement[]>([])
  const getKey = useKey(worlds)

  const generateWorld = useCallback(() => {
    const worldInfo = [
      { name: 'Tech Level', value: rollOnTable(techLevel) },
      { name: 'Currency', value: rollOnTable(money) },
      { name: 'Language', value: rollOnTable(language) },
      { name: 'Clothing', value: rollOnTable(clothing) },
      { name: 'Devotion', value: rollOnTable(devotion) },
      { name: 'Tradition', value: rollOnTable(tradition) },
      { name: 'Local Event', value: rollOnTable(localEvent) },
      { name: 'Deviation', value: rollOnTable(deviation) },
    ]

    setWorlds(worldInfo.map((w, i) => <WorldProperty key={getKey(i)} info={w} />))
  }, [getKey])

  return (
    <main className="container px-4 flex items-center flex-col w-full max-w-5xl">
      <Head>
        <title>Fluxfall Horizon World Generator</title>
      </Head>
      <Header />
      <div className="my-8">
        <button
          className="py-4 px-8 font-semibold rounded-lg shadow-lg text-white bg-flux hover:bg-fluxDark"
          onClick={generateWorld}
        >
          Generate World
        </button>
      </div>
      <TableGenerator sectionClasses="flex flex-col mb-12 max-w-2xl w-full" list={worlds} />
    </main>
  )
}

export default Home
