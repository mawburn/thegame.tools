import type { NextPage } from 'next'
import WorldGenerator from '../components/WorldGenerator'
import Header from '../components/Header'
import Head from 'next/head'

const WorldGen: NextPage = () => (
  <main className="container px-4 flex items-center flex-col">
    <Head>
      <title>Fluxfall Horizon World Generator</title>
    </Head>
    <Header name="World Generator" sm />
    <WorldGenerator />
  </main>
)

export default WorldGen
