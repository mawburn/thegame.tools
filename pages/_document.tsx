import Document, { Head, Html, Main, NextScript } from 'next/document'
import Footer from '../components/Footer'

const title = 'Fluxfall Horizon World Generator' as const
const descr = 'Create a world for Fluxfall Horizon the Tabletop RPG' as const

const ogImg = '/ogimg.jpg' as const

const config = {
  title,
  twitter: '@_mawburn',
}

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content={descr} />
          <meta property="og:title" content={config.title} />
          <meta property="og:description" content={descr} />
          <meta property="og:image" content={ogImg} />
          <meta property="og:image:url" content={ogImg} />
          <meta property="og:image:secure_url" content={ogImg} />
          <meta property="og:site_name" content={descr} />
          <meta name="twitter:title" content={config.title} />
          <meta name="twitter:description" content={descr} />
          <meta name="twitter:image" content={ogImg} />
          <meta name="twitter:card" content="summary" />
          <meta name="description" content={descr} />
          <meta name="og:description" content={descr} />
          <meta name="twitter:creator" content={`@${config.twitter}`} />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,500;0,600;0,700;1,400&family=Orbitron:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="my-10  min-h-screen bg-gradient-to-b from-slate-300 to-slate-100">
          <Main />
          <Footer />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
