import Image from 'next/image'

const Legal = () => (
  <section className="flex flex-col justify-center items-center max-w-screen-sm">
    <div className="text-center my-2">
      <Image src="/fluxfall-legal.png" width="200" height="86" alt="Fluxfall Compatible" priority />
    </div>
    <p>
      Fluxfall.TheGame.Tools is an independent production by TheGame.Tools and is not affiliated
      with Dave Thaumavore. It is published under the Fluxfall Horizon Third Party License. Fluxfall
      Horizon is copyright Dave Thaumavore.
    </p>
  </section>
)

export default Legal
