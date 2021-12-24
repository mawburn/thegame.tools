import type { NextPage } from 'next'
import Head from 'next/head'

import { HTag } from '../components/HTag'
import { theologies } from '../data/Advanced/theologies'

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
      <p>Roll 1d100 on the table below</p>
      <table className="table-auto">
        <thead>
          <th></th>
          <th className="text-left">Result</th>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 text-left">1-25</td>
            <td>No Dominant Religion</td>
          </tr>
          {theologies.map((t, i) => (
            <tr key={t}>
              <td className="px-4 text-left">{i + 26}</td>
              <td>{t}</td>
            </tr>
          ))}
          <tr>
            <td className="px-4 text-left">76+</td>
            <td>Multiple Dominant Religions: Roll Again</td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
)

export default Advanced
