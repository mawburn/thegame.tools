import type { NextPage } from 'next'
import Head from 'next/head'
import { useCallback, useState } from 'react'
import { roll } from '../data/roll'
import { clothing, Clothing } from '../lib/clothing'
import { deviation, Deviation } from '../lib/deviation'
import { devotion, Devotion } from '../lib/devotion'
import { language, Language } from '../lib/language'
import { localEvent, LocalEvent } from '../lib/localevent'
import { money, Money } from '../lib/money'
import { techLevel, TechLevel } from '../lib/techLevel'
import { tradition, Tradition } from '../lib/tradition'

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
      techLevel: roll(techLevel),
      money: roll(money),
      language: roll(language),
      clothing: roll(clothing),
      devotion: roll(devotion),
      tradition: roll(tradition),
      localEvent: roll(localEvent),
      deviation: roll(deviation),
    }

    setWorld(newWorld)
  }, [])

  return (
    <div>
      <Head>
        <title>Fluxfal Horizon World Generator</title>
        <meta name="description" content="Create a world for Fluxfall Horizon the Tabletop RPG" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mt-8">
        <h1 className="text-3xl font-bold">Fluxfall Horizon World Generator</h1>
        <div className="mt-8">
          <button className="btn-primary" onClick={generateWorld}>
            Generate World
          </button>
        </div>
        {world && (
          <section>
            <div className="py-4">
              <h2 className="text-xl font-bold py-2">Tech Level</h2>
              {world.techLevel}
            </div>
            <div className="py-4">
              <h2 className="text-xl font-bold py-2">Money</h2>
              {world.money}
            </div>
            <div className="py-4">
              <h2 className="text-xl font-bold py-2">Language</h2>
              {world.language}
            </div>
            <div className="py-4">
              <h2 className="text-xl font-bold py-2">Clothing</h2>
              {world.clothing}
            </div>
            <div className="py-4">
              <h2 className="text-xl font-bold py-2">Devotion</h2>
              {world.devotion}
            </div>
            <div className="py-4">
              <h2 className="text-xl font-bold py-2">Tradition</h2>
              {world.tradition}
            </div>
            <div className="py-4">
              <h2 className="text-xl font-bold py-2">Ongoing Local Event</h2>
              {world.localEvent}
            </div>
            <div className="py-4">
              <h2 className="text-xl font-bold py-2">Deviation</h2>
              {world.deviation}
            </div>
          </section>
        )}
      </main>
    </div>
  )
}

export default Home
