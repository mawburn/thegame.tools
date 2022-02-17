import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import PageLink from '../components/PageLink'

const Home: NextPage = () => (
  <main className="container px-4 flex items-center flex-col">
    <Head>
      <title>Fluxfall Horizon Tables</title>
    </Head>
    <Header name="Roll Tables" />
    <div className="flex flex-col justify-center items-center py-6 md:max-w-screen-lg w-full">
      <PageLink pageName="worldgen">Generate a world!</PageLink>
    </div>
  </main>
)

export default Home
