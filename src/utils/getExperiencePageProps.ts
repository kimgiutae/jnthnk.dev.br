import translations from '@/constants/translations'
import getHTMLFromMarkdown from '@/utils/getHTMLFromMarkdown'
import type { ExperiencePageProps } from '@/types/ExperiencePageProps'

const getExperiencePageProps: GetExperiencePageProps = (locale) => {
  const lang = locale as ExperiencePageProps['lang']
  const page: ExperiencePageProps['page'] = 'experience'

  const translation = translations[lang]
  const { heads, footer, header, experience } = translation
  const head = heads[page]

  footer.description = getHTMLFromMarkdown(footer.description, true)
  experience.content = getHTMLFromMarkdown(experience.content, false)

  const props: ExperiencePageProps = {
    head,
    lang,
    page,
    footer: {
      ...footer,
      links: header.links
    },
    header,
    experience
  }

  return props
}

type GetExperiencePageProps = (locale: string) => ExperiencePageProps

export default getExperiencePageProps
