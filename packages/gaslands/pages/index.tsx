import type { NextPage } from 'next'
import Head from 'next/head'

import Header from '../components/Header'
import { Cars } from '../gql/Cars'
import remote from '../lib/remote'
import { title } from './_document'

const Home: NextPage = ({ cars }: any) => (
  <main className="container px-4 flex items-center flex-col w-full max-w-5xl">
    <Head>
      <title>{title}</title>
    </Head>
    <Header />
    <main className="py-8 px-4">
      {cars.map((c: any) => (
        <div key={c.id}>{c.name}</div>
      ))}
    </main>
  </main>
)

export async function getServerSideProps() {
  const { data } = await remote.query({
    query: Cars,
  })

  return {
    props: {
      cars: data.cars,
    },
  }
}

export default Home
