import Footer from '@/components/Footer'
import Header from '@/components/Header'
import PageProvider from '@/components/PageProvider'
import type { FC } from 'react'
import type { PageProps } from '@/types/PageProps'
import Head from '@/components/Head'

const Layout: FC<LayoutProps> = ({ head, lang, page, header, children }) => (
  <PageProvider lang={lang} page={page}>
    <Head {...head} />
    <Header {...header} />
    <main className='relative z-10'>{children}</main>
    <Footer />
  </PageProvider>
)

type LayoutProps = PageProps & {
  children: JSX.Element | JSX.Element[]
}

export default Layout
export type { LayoutProps }
