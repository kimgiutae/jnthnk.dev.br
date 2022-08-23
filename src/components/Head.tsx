import usePageContext from '@/hooks/usePageContext'
import NextHead from 'next/head'
import type { FC } from 'react'

const Head: FC<HeadProps> = ({ title, keywords, description }) => {
  const { page } = usePageContext()
  return (
    <NextHead>
      <title>{`${title}${page !== 'home' ? ' | Jonathan Kim - Front-End Developer' : ''}`}</title>
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
    </NextHead>
  )
}

type HeadProps = {
  title: string
  keywords: string
  description: string
}

export default Head
export type { HeadProps }
