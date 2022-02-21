import { TableGenerator } from '@thegametools/components'
import { useState } from 'react'
import { compTypes } from '../data/bc'
import Toggle from 'react-toggle'
import TableProperty from './TableProperty'
import BoonIcon from './BoonIcon'

const BoonsComplicationsGenerator = () => {
  const [isBoons, setIsBoons] = useState(true)
  const [comps, setComps] = useState(compTypes)

  const compactClasses = null ? 'flex-wrap' : 'flex-col items-center'

  return (
    <>
      <label className="flex justify-center">
        <span className={`pr-3 ${!isBoons ? 'text-gray-500' : ''}`}>Boons</span>
        <Toggle
          defaultChecked={isBoons}
          onChange={() => setIsBoons(!isBoons)}
          icons={{
            checked: <BoonIcon isBoon={true} />,
            unchecked: <BoonIcon isBoon={false} />,
          }}
        />
        <span className={`pl-3 ${!isBoons ? '' : 'text-gray-500'}`}>Complications</span>
      </label>
      <div className="my-4">
        <button
          className="py-4 px-8 font-semibold rounded-lg shadow-lg text-white bg-flux hover:bg-fluxDark"
          onClick={() => null}
        >
          Generate {isBoons ? 'Boon' : 'Complication'}
        </button>
      </div>
      <button className="hover:text-tgt py-2 my-1" onClick={() => null}>
        [{null ? 'Pretty' : 'Compact'} View]
      </button>
      <p className="text-xs">
        <strong>Note:</strong> Names are meant to be non-binary. Feel free to tweak them to a name
        you think will fit the character.
      </p>
      {null && (
        <>
          <h2 className="font-bold text-xl my-2">Person ID: {null}</h2>
          <p className="text-xs mb-3">
            <strong>Note:</strong> Person IDs are not canon &amp; simply used for flair here.
          </p>
        </>
      )}
      <TableGenerator
        sectionClasses={`flex ${compactClasses} justify-center mb-12 w-full`}
        list={[]}
      />
    </>
  )
}

export default BoonsComplicationsGenerator
