import type { HeadProps } from '@/components/Head'
import type { FooterProps } from '@/components/Footer'
import type { HeaderProps } from '@/components/Header'

type PageProps = {
  head: HeadProps
  lang: 'en' | 'es' | 'pt'
  page: 'home' | 'blog' | 'post' | 'about' | 'lab'
  footer: FooterProps
  header: HeaderProps
}

export type { PageProps }
