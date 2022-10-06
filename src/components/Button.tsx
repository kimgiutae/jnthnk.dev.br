import Link from 'next/link'
import type { FC } from 'react'

const Button: FC<ButtonProps> = ({
  tag = 'a',
  href,
  mode = 'default',
  type = 'button',
  children,
  className: provClassName = ''
}) => {
  const className = `pointer-events-auto inline-flex rounded bg-black py-2 px-4 font-semibold text-white transition-colors ${provClassName} ${
    mode === 'transparent' ? 'bg-transparent text-black hover:bg-gray' : 'bg-secondary'
  }`
  if (tag === 'a') {
    return (
      <Link passHref href={href}>
        <a
          className={`pointer-events-auto inline-flex rounded bg-black py-2 px-4 font-semibold text-white transition-colors ${provClassName} ${
            mode === 'transparent'
              ? 'bg-transparent text-black hover:bg-gray'
              : 'bg-secondary shadow-inner'
          }`}
        >
          {children}
        </a>
      </Link>
    )
  }
  return (
    <button type={type} className={className}>
      {children}
    </button>
  )
}

type ButtonProps = {
  mode?: 'default' | 'transparent'
  children?: string | JSX.Element | (string | JSX.Element)[]
  className?: string
} & (
  | {
      tag?: 'a'
      href: string
      type?: undefined
    }
  | {
      tag: 'button'
      href?: undefined
      type?: 'button' | 'submit'
    }
)

export default Button
export type { ButtonProps }
