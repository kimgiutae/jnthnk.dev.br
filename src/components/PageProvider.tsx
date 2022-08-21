import PageContext from '@/contexts/PageContext'
import type { FC } from 'react'
import type { PageProps } from '@/types/PageProps'

const PageProvider: FC<PageProviderProps> = ({ lang, page, children }) => (
  <PageContext.Provider
    value={{
      lang,
      page
    }}
  >
    {children}
  </PageContext.Provider>
)

type PageProviderProps = PageProps & {
  children: JSX.Element | JSX.Element[]
}

export default PageProvider
export type { PageProviderProps }
