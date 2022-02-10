import type { NextPage } from 'next'
import Head from 'next/head'

import Header from '../components/Header'
import Wounds from '../components/Wounds'
import { title } from './_document'

const Home: NextPage = () => (
  <main className="container px-4 flex items-center flex-col w-full max-w-5xl">
    <Head>
      <title>{title}</title>
    </Head>
    <Header />
    <main className="py-8 px-4">
      <Wounds />
    </main>
  </main>
)

export default Home
