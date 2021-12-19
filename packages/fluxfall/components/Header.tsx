import Image from 'next/image'

const Header = () => (
  <header className="max-w-screen-sm">
    <h1 className="text-3xl font-bold text-center mb-2">Fluxfall Horizon</h1>
    <h2 className="text-2xl font-bold text-center mb-4 text-gray-600">World Generator</h2>
    <div className="text-center	">
      <a
        href="https://fluxfall.backerkit.com/hosted_preorders"
        className="font-bold"
        rel="noopener"
      >
        <Image
          src="/fluxfall-banner.webp"
          layout="intrinsic"
          width={426}
          height={240}
          alt="Fluxfall Horizon"
          priority
          className="rounded-xl overflow-hidden my-2"
        />
        <h2 className="my-2 text-xl font-bold">Preorder this amazing setting here!</h2>
      </a>
    </div>
    <p className="text-center">
      Fluxfall Horizon is a multi-dimensional Tabletop Roleplaying Game that uses the{' '}
      <a href="https://en.wikipedia.org/wiki/Powered_by_the_Apocalypse" className="font-semibold">
        Powered by the Apocalypse
      </a>{' '}
      engine.
    </p>
  </header>
)

export default Header