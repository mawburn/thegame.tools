import { HTag } from '@thegametools/components'
import type { NextPage } from 'next'
import Head from 'next/head'

const Advanced: NextPage = () => (
  <main className="container px-4 flex items-center flex-col w-full max-w-5xl">
    <Head>
      <title>Fluxfall Horizon Advanced World Tables</title>
    </Head>
    <section>
      <HTag tag="1">Fluxfall Horizon</HTag>
      <HTag tag="2">Advanced World Generator Tables</HTag>
      <HTag tag="3" fade className="text-base">
        Unofficial Expansion
      </HTag>
      <p className="my-8">
        This is a set of tables used to generate a more in-depth world than what you find in the
        core book. Like with any random tables, you don’t have to use all the tables &amp; feel free
        to pick &amp; choose what you like or don’t like.
      </p>
    </section>
    <section>
      <HTag tag="2" className="text-xl">
        xy
      </HTag>
      <p>Roll 1d100 on the table below</p>
      <table className="table-auto">
        <thead>
          <th></th>
        </thead>
      </table>
    </section>
  </main>
)

export default Advanced
