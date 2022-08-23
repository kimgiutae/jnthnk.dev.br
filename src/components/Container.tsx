import type { FC } from 'react'

const Container: FC<ContainerProps> = ({ tag = 'div', children, className = '' }) => {
  const Tag = tag as keyof JSX.IntrinsicElements
  return (
    <Tag
      className={`block px-8 py-12 md:mx-auto md:w-[700px] md:px-6 md:py-14 xl:w-[800px] xl:px-4 xl:py-16 ${className}`}
    >
      {children}
    </Tag>
  )
}

type ContainerProps = {
  tag?: 'div' | 'nav' | 'header' | 'section'
  children: JSX.Element | JSX.Element[]
  className?: string
}

export default Container
