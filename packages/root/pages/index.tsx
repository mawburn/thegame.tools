import type { NextPage } from 'next'
import Head from 'next/head'

import Header from '../components/Header'
import { title } from './_document'
import PageLink from '../components/PageLink'

const Home: NextPage = () => (
  <main className="container px-4 flex items-center flex-col w-full max-w-5xl">
    <Head>
      <title>{title}</title>
    </Head>
    <Header name="Roll Tables" />
    <article className="flex flex-wrap justify-center items-center py-6 lg:max-w-screen-lg md:max-w-screen-md w-full">
      <PageLink pageName="Items" url="/items">
        Create randomized items
      </PageLink>
      <PageLink pageName="Important Inhabitants" url="/inhabitants">
        Generate Inhabitants for a Clearing
      </PageLink>
      <PageLink pageName="Important Buildings" url="/buildings">
        Generate Buildings for a Clearing
      </PageLink>
      <PageLink pageName="Problems" url="/problem">
        Create a problem to solve
      </PageLink>
    </article>
  </main>
)

export default Home
