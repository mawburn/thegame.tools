import { useState } from 'react'

interface WoundCalcProps {}

const WoundCalc = () => {
  const [dmg, setDmg] = useState(0)
  const [tough, setTough] = useState(0)

  return (
    <div className="p-8">
      <input type="number" min={0} onChange={evt => setDmg(Number(evt.target.value))} />
      <input type="number" min={0} onChange={evt => setTough(Number(evt.target.value))} />
    </div>
  )
}

export default WoundCalc
