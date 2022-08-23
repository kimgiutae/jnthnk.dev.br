import type { FC } from 'react'

const Title: FC<TitleProps> = ({
  tag: Tag = 'h2',
  size = 'md',
  children,
  hasColon,
  className
}) => (
  <Tag
    className={`font-raleway pointer-events-auto block font-semibold ${
      size === 'xs'
        ? 'text-lg'
        : size === 'sm'
        ? 'text-xl'
        : size === 'md'
        ? 'text-2xl md:text-3xl'
        : size === 'lg'
        ? 'text-3xl font-black md:text-4xl xl:text-5xl'
        : 'text-4xl font-black md:text-5xl xl:text-6xl'
    } ${hasColon ? 'after:content-[":"]' : ''} ${className ?? ''}`}
  >
    {children}
  </Tag>
)

type TitleProps = {
  tag?: keyof JSX.IntrinsicElements
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  children: string | JSX.Element | (string | JSX.Element)[]
  hasColon?: true
  className?: string
}

export default Title
export type { TitleProps }
