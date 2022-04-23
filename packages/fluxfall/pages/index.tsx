import type { NextPage } from 'next'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

import Head from 'next/head'
import Lite from 'react-lite-youtube-embed'

import Header from '../components/Header'
import PageLink from '../components/PageLink'

const Home: NextPage = () => (
  <main className="container px-4 flex items-center flex-col">
    <Head>
      <title>Fluxfall Horizon Tables</title>
    </Head>
    <Header name="Roll Tables" />
    <article className="flex flex-wrap justify-center items-center py-6 lg:max-w-screen-lg md:max-w-screen-md w-full">
      <PageLink pageName="world">Generate a World!</PageLink>
      <PageLink pageName="person">Generate an NPC or Character</PageLink>
      <PageLink pageName="boons/comps">Boon &amp; Complication Generator</PageLink>
    </article>
    <article className="flex flex-col items-center px-4 w-full">
      <h2 className="text-center my-4 font-bold">How to play Fluxfall Horizon</h2>
      <div className="border border-black rounded-lg sm:w-[560px] sm:h-[315px] w-[288px] h-[162px]">
        <Lite
          id="M7Zmbu3DYQw"
          title="How to play Fluxfall Horizon"
          adNetwork={false}
          noCookie={true}
        />
      </div>
    </article>
  </main>
)

export default Home
