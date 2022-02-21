import type { NextPage } from 'next'
import Head from 'next/head'

import BoonsComplicationsGenerator from '../components/BoonsComplicationsGenerator'
import Header from '../components/Header'

const BoonsCompsGen: NextPage = () => (
  <main className="container px-4 flex items-center flex-col">
    <Head>
      <title>Fluxfall Horizon - Boons / Complications Generator</title>
    </Head>
    <Header name="Boons / Complications Generator" sm />
    <BoonsComplicationsGenerator />
  </main>
)

export default BoonsCompsGen
