import PageProvider from '@/components/PageProvider'
import type { FC } from 'react'
import type { PageProps } from '@/types/PageProps'

const Layout: FC<LayoutProps> = ({ lang, page }) => (
  <PageProvider lang={lang} page={page}>
    <main className=''></main>
  </PageProvider>
)

type LayoutProps = PageProps & {
  children?: undefined
}

export default Layout
export type { LayoutProps }
