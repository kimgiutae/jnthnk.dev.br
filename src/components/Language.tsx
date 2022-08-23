import usePageContext from '@/hooks/usePageContext'
import type { FC } from 'react'

const Language: FC<LanguageProps> = () => {
  const { lang } = usePageContext()
  return <div>{lang}</div>
}

type LanguageProps = {
  children?: undefined
}

export default Language
