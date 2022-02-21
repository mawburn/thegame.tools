import type { NextPage } from 'next'
import Head from 'next/head'

import Header from '../components/Header'
import PersonGenerator from '../components/PersonGenerator'

const PersonGen: NextPage = () => (
  <main className="container px-4 flex items-center flex-col">
    <Head>
      <title>Fluxfall Horizon - Person Generator</title>
    </Head>
    <Header name="Person Generator" sm />
    <PersonGenerator />
  </main>
)

export default PersonGen
