import type { FC } from 'react'

const Title: FC<TitleProps> = ({
  tag: Tag = 'h2',
  size = 'md',
  children,
  hasColon,
  className = ''
}) => (
  <Tag
    className={`pointer-events-auto block font-semibold text-primary ${
      size === 'sm'
        ? 'text-xl'
        : size === 'md'
        ? 'text-2xl md:text-3xl'
        : 'text-3xl font-black md:text-4xl xl:text-5xl'
    } ${hasColon ? 'after:content-[":"]' : ''} ${className}`}
  >
    {children}
  </Tag>
)

type TitleProps = {
  tag?: keyof JSX.IntrinsicElements
  size?: 'sm' | 'md' | 'lg'
  children: string | JSX.Element | (string | JSX.Element)[]
  hasColon?: true
  className?: string
}

export default Title
export type { TitleProps }
