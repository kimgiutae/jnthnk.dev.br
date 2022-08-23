import { createContext } from 'react'
import type { PageProps } from '@/types/PageProps'

const PageContext = createContext<PageContextProps>(null)

type PageContextProps = Pick<PageProps, 'lang' | 'page'>

export default PageContext
export type { PageContextProps }
