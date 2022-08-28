import Link from 'next/link'
import type { FC } from 'react'

const Button: FC<ButtonProps> = ({
  tag = 'a',
  href,
  type = 'button',
  children,
  className = ''
}) => {
  if (tag === 'a') {
    return (
      <Link passHref href={href}>
        <a
          className={`pointer-events-auto inline-flex rounded bg-black py-2 px-4 font-semibold text-white ${className}`}
        >
          {children}
        </a>
      </Link>
    )
  }
  return (
    <button className={`pointer-events-auto block ${className}`} type={type}>
      {children}
    </button>
  )
}

type ButtonProps = {
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
