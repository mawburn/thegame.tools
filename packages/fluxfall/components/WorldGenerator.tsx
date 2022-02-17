import { useCallback, useMemo, useState } from 'react'

import { KeyValue, rollOnTable, TableGenerator, useKey } from '@thegametools/components'

import {
  clothing,
  deviation,
  devotion,
  language,
  localEvent,
  money,
  techLevel,
  tradition,
} from '../data/world'
import TableProperty from './TableProperty'

const WorldGenerator = () => {
  const [worlds, setWorlds] = useState<KeyValue[]>([])
  const [worldId, setWorldId] = useState<string>()
  const getKey = useKey(worlds)
  const [compact, setCompact] = useState(false)

  const generateWorld = useCallback(() => {
    const worldInfo = [
      { name: 'Tech Level', value: rollOnTable(techLevel) },
      { name: 'Currency', value: rollOnTable(money) },
      { name: 'Language', value: rollOnTable(language) },
      { name: 'Clothing', value: rollOnTable(clothing) },
      { name: 'Devotion', value: rollOnTable(devotion) },
      { name: 'Tradition', value: rollOnTable(tradition) },
      { name: 'Local Event', value: rollOnTable(localEvent) },
      { name: 'Deviation', value: rollOnTable(deviation) },
    ]

    const worldChecksum = worldInfo.reduce(
      (acc, w) => acc + w.value.split('').reduce((innerAcc, c) => innerAcc + c.charCodeAt(0), 0),
      0
    )

    setWorldId(`${worldChecksum}`)
    setWorlds(worldInfo)
  }, [])

  const worldList = useMemo(
    () => worlds.map((w, i) => <TableProperty key={getKey(i)} info={w} compact={compact} />),
    [getKey, worlds, compact]
  )

  const compactClasses = compact ? 'flex-wrap' : 'flex-col items-center'

  return (
    <>
      <div className="my-4">
        <button
          className="py-4 px-8 font-semibold rounded-lg shadow-lg text-white bg-flux hover:bg-fluxDark"
          onClick={generateWorld}
        >
          Generate World
        </button>
      </div>
      <button className="hover:text-tgt py-2 my-1" onClick={() => setCompact(!compact)}>
        [{compact ? 'Pretty' : 'Compact'} View]
      </button>
      {worldId && (
        <>
          <h2 className="font-bold text-xl my-2">World ID: {worldId}</h2>
          <p className="text-xs mb-3">
            <strong>Note:</strong> World IDs are not canon &amp; simply used for flair here.
          </p>
        </>
      )}
      <TableGenerator
        sectionClasses={`flex ${compactClasses} justify-center mb-12 w-full`}
        list={worldList}
      />
    </>
  )
}

export default WorldGenerator
