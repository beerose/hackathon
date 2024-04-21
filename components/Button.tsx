import { classNames } from '@/src/utils'
import { RightArrow } from './RightArrow'
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

type ButtonProps =
  | {
      title: string
      variant?: 'primary' | 'secondary'
      back?: boolean
      arrow?: boolean
    } & ButtonHTMLAttributes<HTMLButtonElement>

type AnchorProps = {
  title: string
  variant?: 'primary' | 'secondary'
  href?: string
  back?: boolean
  arrow?: boolean
} & AnchorHTMLAttributes<HTMLAnchorElement>

export function Button({ title, variant, ...rest }: ButtonProps | AnchorProps) {
  const Component = 'href' in rest ? 'a' : 'button'

  return (
    <Component
      className={classNames(
        'relative py-2 px-6 w-full transition-all duration-300 ease-in-out text-bold',
        variant === 'primary'
          ? 'bg-primary text-black'
          : 'bg-transparent text-white border-2 border-textPrimary/20 hover:bg-primary hover:border-primary hover:text-black',
        'rounded-[1px] flex justify-between items-center space-x-4 text-left'
      )}
      {...(rest as any)}
    >
      {rest.back && (
        <div className="h-[12px] w-[12px] rotate-180">
          <RightArrow />
        </div>
      )}
      <span>{title}</span>
      {!rest.back && (
        <div className="h-[12px] w-[12px]">
          <RightArrow />
        </div>
      )}
    </Component>
  )
}
