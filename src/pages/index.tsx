import Stack from '@/components/Stack'
import Layout from '@/components/Layout'
import Welcome from '@/components/Welcome'
import getHomePageProps from '@/utils/getHomePageProps'
import type { FC } from 'react'
import type { HomePageProps } from '@/types/HomePageProps'
import type { GetStaticProps } from 'next'

const HomePage: FC<HomePageProps> = ({ head, lang, page, stack, footer, header, welcome }) => (
  <Layout head={head} lang={lang} page={page} footer={footer} header={header}>
    <Welcome {...welcome} />
    <Stack {...stack} />
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
