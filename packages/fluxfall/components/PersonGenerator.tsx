import { useCallback, useMemo, useState } from 'react'

import { randomInt, rollOnTable, TableGenerator, useKey } from '@thegametools/components'

import { allegiance, goal, identity, names, personality, quirk } from '../data/person'
import { age } from '../data/person/age'
import { look } from '../data/person/look'
import TableProperty from './TableProperty'

const PersonGenerator = () => {
  const [person, setPerson] = useState<KeyValue[]>([])
  const [personId, setPersonId] = useState<string>()
  const getKey = useKey(person)
  const [compact, setCompact] = useState(false)

  const generatePerson = useCallback(() => {
    const nameCount = randomInt(1, 3)

    const name = []

    for (let i = 0; i <= nameCount; i++) {
      name.push(rollOnTable(names))
    }

    const personInfo = [
      { name: 'Name', value: name.join(' ') },
      { name: 'Age', value: rollOnTable(age) },
      { name: 'Appearance', value: rollOnTable(look) },
      { name: 'Personality', value: rollOnTable(personality) },
      { name: 'Quirk', value: rollOnTable(quirk) },
      { name: 'Identity', value: rollOnTable(identity) },
      { name: 'Driving Goal', value: rollOnTable(goal) },
      { name: 'Primary Allegiance', value: rollOnTable(allegiance) },
    ]

    const personChecksum = personInfo.reduce(
      (acc, w) => acc + w.value.split('').reduce((innerAcc, c) => innerAcc + c.charCodeAt(0), 0),
      0
    )

    setPersonId(`${personChecksum}`)
    setPerson(personInfo)
  }, [])

  const personList = useMemo(
    () => person.map((w, i) => <TableProperty key={getKey(i)} info={w} compact={compact} />),
    [getKey, person, compact]
  )

  const compactClasses = compact ? 'flex-wrap' : 'flex-col items-center'

  return (
    <>
      <div className="my-4">
        <button
          className="py-4 px-8 font-semibold rounded-lg shadow-lg text-white bg-flux hover:bg-fluxDark"
          onClick={generatePerson}
        >
          Generate Person
        </button>
      </div>
      <button className="hover:text-tgt py-2 my-1" onClick={() => setCompact(!compact)}>
        [{compact ? 'Pretty' : 'Compact'} View]
      </button>
      <p className="text-xs">
        <strong>Note:</strong> Names are meant to be non-binary. Feel free to tweak them to a name
        you think will fit the character.
      </p>
      {personId && (
        <>
          <h2 className="font-bold text-xl my-2">Person ID: {personId}</h2>
          <p className="text-xs mb-3">
            <strong>Note:</strong> Person IDs are not canon &amp; simply used for flair here.
          </p>
        </>
      )}
      <TableGenerator
        sectionClasses={`flex ${compactClasses} justify-center mb-12 w-full`}
        list={personList}
      />
    </>
  )
}

export default PersonGenerator
