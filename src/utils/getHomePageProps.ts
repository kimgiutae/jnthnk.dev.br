import footers from '@/constants/footers'
import translations from '@/constants/translations'
import getHTMLFromMarkdown from '@/utils/getHTMLFromMarkdown'
import type { HomePageProps } from '@/types/HomePageProps'

const getHomePageProps: GetHomePageProps = (locale) => {
  const lang = locale as HomePageProps['lang']
  const page = 'home'
  const footer = footers[lang]

  const translation = translations[lang]
  const { heads, header, latest, welcome, showcase } = translation
  const head = heads[page]

  welcome.title = getHTMLFromMarkdown(welcome.title, true)
  welcome.description = getHTMLFromMarkdown(welcome.description, true)

  const props: HomePageProps = {
    head,
    lang,
    page,
    footer,
    header,
    latest,
    welcome,
    showcase
  }

  return props
}

type GetHomePageProps = (locale: string) => HomePageProps

export default getHomePageProps
