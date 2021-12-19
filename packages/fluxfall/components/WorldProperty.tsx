interface WorldPropertyProps {
  name: string
  value: string
}

const WorldProperty = ({ name, value }: WorldPropertyProps) => (
  <div className="my-3 p-6 propBg w-full whitespace-normal">
    <div className="p-6 text-center">
      <h2 className="text-xl font-bold py-2 uppercase">{name}</h2>
      {value}
    </div>
  </div>
)

export default WorldProperty
