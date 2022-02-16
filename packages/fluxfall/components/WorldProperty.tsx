import { KeyValue } from '@thegametools/components'

interface WorldPropertyProps {
  info: KeyValue
}

const WorldProperty = ({ info }: WorldPropertyProps) => (
  <div className="my-3 p-6 propBg w-full whitespace-normal">
    <div className="p-6 text-center">
      <h2 className="text-xl font-bold py-2 uppercase">{info.name}</h2>
      {info.value}
    </div>
  </div>
)

export default WorldProperty
