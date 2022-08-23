import Layout from '@/components/Layout'
import getHomePageProps from '@/utils/getHomePageProps'
import type { FC } from 'react'
import type { HomePageProps } from '@/types/HomePageProps'
import type { GetStaticProps } from 'next'
import Welcome from '@/components/Welcome'

const HomePage: FC<HomePageProps> = ({ head, lang, page, header, welcome }) => (
  <Layout head={head} lang={lang} page={page} header={header}>
    <Welcome {...welcome} />
  </Layout>
)

const getStaticProps: GetStaticProps = async ({ locale }) => {
  const props = getHomePageProps(locale)
  return {
    props
  }
}

export default HomePage
export { getStaticProps }
