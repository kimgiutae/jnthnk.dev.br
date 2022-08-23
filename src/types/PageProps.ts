import type { HeadProps } from '@/components/Head'
import type { HeaderProps } from '@/components/Header'

type PageProps = {
  head: HeadProps
  lang: 'en' | 'es' | 'pt'
  page: 'home' | 'playground'
  header: HeaderProps
}

export type { PageProps }
