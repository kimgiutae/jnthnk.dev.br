import Layout from '@/components/Layout'
import Experience from '@/components/Experience'
import getExperiencePageProps from '@/utils/getExperiencePageProps'
import type { FC } from 'react'
import type { GetStaticProps } from 'next'
import type { ExperiencePageProps } from '@/types/ExperiencePageProps'

const ExperiencePage: FC<ExperiencePageProps> = ({
  head,
  lang,
  page,
  footer,
  header,
  experience
}) => (
  <Layout head={head} lang={lang} page={page} footer={footer} header={header}>
    <Experience {...experience} />
  </Layout>
)

const getStaticProps: GetStaticProps = async ({ locale }) => {
  const props = getExperiencePageProps(locale)
  return {
    props
  }
}

export default ExperiencePage
export { getStaticProps }
