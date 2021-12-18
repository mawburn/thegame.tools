import Image from 'next/image'

const NavBar = () => (
  <div className="h-[82px] flex py-[5px] px-4 bg-white mb-8 shadow-md items-center">
    <div className="flex">
      <Image src="/tgtlogo.webp" height={50} width={50} priority alt="TheGame.tools" />
      <div className="flex flex-col	text-tgt uppercase px-3 justify-center items-center">
        <div className="font-tgt text-center">TheGame.tools</div>
        <div className="text-xs">Tools for RPGS &amp; Boardgames</div>
      </div>
    </div>
  </div>
)

export default NavBar
