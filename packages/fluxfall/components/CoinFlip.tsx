import { HTag } from './HTag'

interface CoinFlipProps {
  title: string
}

const CoinFlip = ({ title }: CoinFlipProps) => (
  <>
    <HTag tag="4">{title}: Yes or No</HTag>
    <p>For the following roll a single die or flip a coin.</p>
    <ol className="list-none p-0 m-0">
      <li>
        <strong>Result:</strong> Even or Head is <strong>Yes</strong>
      </li>
      <li>
        <strong>Result:</strong> Odd or Tails is <strong>No</strong>
      </li>
    </ol>
  </>
)

export default CoinFlip
