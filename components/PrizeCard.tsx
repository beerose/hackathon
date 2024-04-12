import { classNames } from '@/src/utils'

interface PrizeCardProps {
  variant: 'main' | 'secondary' | 'special'
  title: string
  specialTitle?: string
  prize: number
}

export default function PrizeCard({
  variant,
  title,
  prize,
  specialTitle,
}: PrizeCardProps) {
  return (
    <div
      className={classNames(
        'text-2xl w-full px-10 py-8 flex flex-col items-center justify-center rounded-[4px]',
        variant === 'special' ? 'bg-gray-800' : 'bg-gray-900',
        variant === 'main' ? 'border-2 border-primary' : ''
      )}
    >
      {variant === 'special' && (
        <span className="text-textSecondaryPrize text-base font-opensans">
          {specialTitle}
        </span>
      )}
      <h4 className="text-white text-2xl">{title}</h4>
      <p
        className={
          variant === 'special' ? 'text-textSecondaryPrize' : 'text-primary'
        }
      >
        <b>${prize}</b>
      </p>
    </div>
  )
}
