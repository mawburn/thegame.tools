import Image from 'next/image'

interface GameLinkProps {
  name: string
  domain: string
  img: string
  descr?: string
}

const GameLink = ({ name, domain, img, descr }: GameLinkProps) => (
  <a href={domain} rel="noopener">
    <div className="flex flex-col m-8 pb-4 bg-white rounded-xl shadow-lg border-2 border-neutral-400 w-[300px] hover:shadow-black/20">
      <h3 className="text-lg text-center my-2 px-2">{name}</h3>
      <Image src={`${domain}/${img}`} width={300} height={150} alt={name} />
      {descr && <p className="mt-2 px-2 text-sm">{descr}</p>}
    </div>
  </a>
)

export default GameLink
