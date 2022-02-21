import Image from 'next/image'

interface BoonIconProps {
  isBoon: boolean
}

const BoonIcon = ({ isBoon }: BoonIconProps) => (
  <div className="flex justify-center align-center">
    <Image
      width={14}
      height={14}
      src={isBoon ? '/boon.svg' : '/complication.svg'}
      priority
      alt={isBoon ? 'Boon' : 'Complication'}
    />
  </div>
)

export default BoonIcon
