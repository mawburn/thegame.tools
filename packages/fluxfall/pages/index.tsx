import type { NextPage } from 'next'
import Head from 'next/head'
import { ReactNode, useCallback, useState } from 'react'

import { rollOnTable, TableGenerator } from '@thegametools/components'

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

const Home: NextPage = () => {
  const [worldInfoList, setWorldInfo] = useState<ReactNode[]>([])

  const generateWorld = useCallback(() => {
    const worldInfo = [
      <WorldProperty key="Tech Level" name="Tech Level" value={rollOnTable(techLevel)} />,
      <WorldProperty key="Currency" name="Currency" value={rollOnTable(money)} />,
      <WorldProperty key="Language" name="Language" value={rollOnTable(language)} />,
      <WorldProperty key="Clothing" name="Clothing" value={rollOnTable(clothing)} />,
      <WorldProperty key="Devotion" name="Devotion" value={rollOnTable(devotion)} />,
      <WorldProperty key="Tradition" name="Tradition" value={rollOnTable(tradition)} />,
      <WorldProperty key="Local Event" name="Local Event" value={rollOnTable(localEvent)} />,
      <WorldProperty key="Deviation" name="Deviation" value={rollOnTable(deviation)} />,
    ]

    setWorldInfo(worldInfo)
  }, [])

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
      <TableGenerator
        sectionClasses={['flex flex-col mb-12 max-w-2xl w-full']}
        list={worldInfoList}
      />
    </main>
  )
}

export default Home
