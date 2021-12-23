import type { NextPage } from 'next'
import Head from 'next/head'
import { useCallback, useState } from 'react'

import { rollOnTable } from '@thegametools/components'

import Header from '../components/Header'
import WorldProperty from '../components/WorldProperty'
import { clothing, Clothing } from '../data/clothing'
import { deviation, Deviation } from '../data/deviation'
import { devotion, Devotion } from '../data/devotion'
import { language, Language } from '../data/language'
import { localEvent, LocalEvent } from '../data/localevent'
import { money, Money } from '../data/money'
import { techLevel, TechLevel } from '../data/techLevel'
import { tradition, Tradition } from '../data/tradition'

interface World {
  techLevel: TechLevel
  money: Money
  language: Language
  clothing: Clothing
  devotion: Devotion
  tradition: Tradition
  localEvent: LocalEvent
  deviation: Deviation
}

const Home: NextPage = () => {
  const [world, setWorld] = useState<World>()

  const generateWorld = useCallback(() => {
    const newWorld: World = {
      techLevel: rollOnTable(techLevel),
      money: rollOnTable(money),
      language: rollOnTable(language),
      clothing: rollOnTable(clothing),
      devotion: rollOnTable(devotion),
      tradition: rollOnTable(tradition),
      localEvent: rollOnTable(localEvent),
      deviation: rollOnTable(deviation),
    }

    setWorld(newWorld)
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
      {world && (
        <section className="flex flex-col mb-12 max-w-2xl w-full">
          <WorldProperty name="Tech Level" value={world.techLevel} />
          <WorldProperty name="Currency" value={world.money} />
          <WorldProperty name="Language" value={world.language} />
          <WorldProperty name="Clothing" value={world.clothing} />
          <WorldProperty name="Devotion" value={world.devotion} />
          <WorldProperty name="Tradition" value={world.tradition} />
          <WorldProperty name="Local Event" value={world.localEvent} />
          <WorldProperty name="Deviation" value={world.deviation} />
        </section>
      )}
    </main>
  )
}

export default Home
