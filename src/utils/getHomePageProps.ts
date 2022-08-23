import heads from '@/constants/heads'
import headers from '@/constants/headers'
import welcomes from '@/constants/welcomes'
import type { HomePageProps } from '@/types/HomePageProps'

const getHomePageProps: GetHomePageProps = (locale) => {
  const lang = locale as HomePageProps['lang']
  const page = 'home'
  const head = heads[lang][page]
  const header = headers[lang]
  const welcome = welcomes[lang]

  const props: HomePageProps = {
    head,
    lang,
    page,
    header,
    welcome
  }

  return props
}

type I18ns = {
  [key in HomePageProps['lang']]: {
    head: HomePageProps['head']
    welcome: HomePageProps['welcome']
  }
}

type GetHomePageProps = (locale: string) => HomePageProps

export default getHomePageProps
