import { createContext } from 'react'
import type { PageProps } from '@/types/PageProps'

const PageContext = createContext<PageContextProps>(null)

type PageContextProps = PageProps

export default PageContext
export type { PageContextProps }
