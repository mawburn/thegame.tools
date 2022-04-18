import type { NextPage } from 'next'
import Head from 'next/head'

import GameLink from '../components/GameLink'
import Header from '../components/Header'
import { title } from './_document'

const Home: NextPage = () => (
  <main className="container px-4 flex items-center flex-col w-full max-w-5xl">
    <Head>
      <title>{title}</title>
    </Head>
    <Header />
  </main>
)

export default Home
