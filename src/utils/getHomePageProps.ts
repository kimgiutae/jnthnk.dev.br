import translations from '@/constants/translations'
import getHTMLFromMarkdown from '@/utils/getHTMLFromMarkdown'
import type { HomePageProps } from '@/types/HomePageProps'

const getHomePageProps: GetHomePageProps = (locale) => {
  const lang = locale as HomePageProps['lang']
  const page = 'home'

  const translation = translations[lang]
  const { heads, stack, footer, header, latest, welcome } = translation
  const head = heads[page]

  stack.description = getHTMLFromMarkdown(stack.description, true)
  footer.description = getHTMLFromMarkdown(footer.description, true)
  welcome.title = getHTMLFromMarkdown(welcome.title, true)
  welcome.description = getHTMLFromMarkdown(welcome.description, true)

  const props: HomePageProps = {
    head,
    lang,
    page,
    stack,
    footer: {
      ...footer,
      links: header.links
    },
    header,
    latest,
    welcome
  }

  return props
}

type GetHomePageProps = (locale: string) => HomePageProps

export default getHomePageProps
