interface TablePropertyProps {
  info: KeyValue
  compact?: boolean
}

const TableProperty = ({ info, compact = false }: TablePropertyProps) => {
  const contClasses = compact
    ? 'bg-stone-100 border border-stone-500 rounded-md m-2 sm:max-w-[45%] sm:w-60 w-full'
    : 'justify-center my-3 p-6 propBg sm:max-w-prose w-full h-fit'

  return (
    <div className={`flex flex-col items-center ${contClasses} whitespace-normal`}>
      <div className={`p-3 text-center max-w-[500px]`}>
        <h2 className={`${compact ? '' : 'text-xl'} font-bold py-2 uppercase`}>{info.name}</h2>
        {info.value}
      </div>
    </div>
  )
}

export default TableProperty
