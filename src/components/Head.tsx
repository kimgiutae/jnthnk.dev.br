import NextHead from 'next/head'
import type { FC } from 'react'

const Head: FC<HeadProps> = ({ title, keywords, description }) => (
  <NextHead>
    <title>{title}</title>
    <meta name='keywords' content={keywords} />
    <meta name='description' content={description} />
  </NextHead>
)

type HeadProps = {
  title: string
  keywords: string
  description: string
}

export default Head
export type { HeadProps }
