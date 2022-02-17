import type { NextPage } from 'next'
import Head from 'next/head'

import Header from '../components/Header'
import WorldGenerator from '../components/WorldGenerator'

const WorldGen: NextPage = () => (
  <main className="container px-4 flex items-center flex-col">
    <Head>
      <title>Fluxfall Horizon - World Generator</title>
    </Head>
    <Header name="World Generator" sm />
    <WorldGenerator />
  </main>
)

export default WorldGen
