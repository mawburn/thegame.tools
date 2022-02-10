import { HTag } from './HTag'

const MAX = [...Array(15)] as const
const MULTIPLES = [...Array(10)] as const

const Wounds = () => (
  <section className="flex flex-col justify-center items-center py-4 w-full">
    <HTag tag="2">Wound Table</HTag>
    <div className="border border-gray-800/25 rounded-xl overflow-hidden">
      <table className="font-bold text-sm">
        <thead>
          <tr className="bg-amber-100 border-gray-800/25">
            <th className="text-left py-2 px-4 border-r border-gray-800/25">Shaken</th>
            {MAX.map((_, i) => (
              <td
                key={`tough-${i}`}
                className={`text-center py-2 px-4 ${
                  i === MAX.length - 1 ? '' : 'border-r'
                } border-gray-800/25`}
              >
                {i + 1}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {MULTIPLES.map((_, i) => (
            <tr
              key={`multi-${i + 1}`}
              className={`border-l border-t border-gray-800/25 ${
                i % 2 ? 'bg-red-800 text-white' : 'bg-red-200'
              }`}
            >
              <td className="text-left py-2 px-4 whitespace-nowrap border-r border-gray-800/25">{`${
                i + 1
              } Wound${i > 0 ? 's' : ''}`}</td>
              {MAX.map((_, k) => (
                <td
                  key={`multi-${i + 1}-tough-${k + 1}`}
                  className={`text-center py-2 px-4 ${
                    k === MAX.length - 1 ? '' : 'border-r'
                  } border-gray-800/25`}
                >
                  {k + 1 + 4 * (i + 1)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
)

export default Wounds
