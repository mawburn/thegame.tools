import Image from 'next/image'

const Header = () => (
  <header className="max-w-screen-sm">
    <h1 className="text-3xl font-tgt text-center mb-3 text-tgt">TheGame.tools</h1>
    <h2 className="text-2xl font-body normal-case text-center mb-4 text-tgt">
      Tools for RPGS &amp; Boardgames
    </h2>
    <div className="text-center">
      <Image
        src="/logoIcon.svg"
        layout="intrinsic"
        width={250}
        height={250}
        alt="TheGame.tools Logo"
        priority
        className="rounded-xl overflow-hidden my-2"
      />
    </div>
    <p className="text-center">Free tools for boardgames &amp; tabletop RPGs</p>
  </header>
)

export default Header
