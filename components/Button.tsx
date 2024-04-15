import { classNames } from '@/src/utils'
import { RightArrow } from './RightArrow'

type ButtonProps =
  | {
      title: string
      variant?: 'primary' | 'secondary'
    }
  | {
      title: string
      variant?: 'primary' | 'secondary'
      href?: string
    }

export function Button({ title, variant, ...rest }: ButtonProps) {
  const Component = 'href' in rest ? 'a' : 'button'

  return (
    <Component
      className={classNames(
        'relative h-16 py-8 px-6 w-full transition-all duration-300 ease-in-out text-bold text-xl',
        variant === 'primary'
          ? 'bg-primary text-black'
          : 'bg-transparent text-white border-2 border-textPrimary/20 hover:bg-primary hover:border-primary hover:text-black',
        'rounded-[1px] flex justify-between items-center space-x-4 text-left'
      )}
    >
      <span>{title}</span>
      <div className="h-[12px] w-[12px]">
        <RightArrow />
      </div>
    </Component>
  )
}
