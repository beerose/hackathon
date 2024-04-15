import { classNames } from '@/src/utils'
import { RightArrow } from './RightArrow'

interface ButtonProps {
  title: string
  variant?: 'primary' | 'secondary'
}

export function Button({ title, variant }: ButtonProps) {
  return (
    <button
      className={classNames(
        'relative h-16 py-8 px-6 w-full transition-all duration-300 ease-in-out text-bold text-xl',
        variant === 'primary'
          ? 'bg-primary text-black'
          : 'bg-transparent text-white border-2 border-textPrimary/20 hover:bg-primary hover:border-primary hover:text-black',
        'rounded-[1px] flex justify-between items-center space-x-4'
      )}
    >
      <span>{title}</span>
      <RightArrow />
    </button>
  )
}
