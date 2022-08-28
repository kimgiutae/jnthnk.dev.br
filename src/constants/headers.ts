import type { PageProps } from '@/types/PageProps'
import type { HeaderProps } from '@/components/Header'

const headers: Headers = {
  pt: {
    links: [
      {
        href: '/',
        label: 'Início'
      },
      {
        href: '/sobre',
        label: 'Sobre mim'
      },
      {
        href: '/projetos',
        label: 'Projetos'
      },
      {
        href: '/blog',
        label: 'Blog'
      }
    ]
  },
  es: {
    links: [
      {
        href: '/',
        label: 'Inicio'
      }
    ]
  },
  en: {
    links: [
      {
        href: '/',
        label: 'Home'
      }
    ]
  }
}

type Headers = {
  [key in PageProps['lang']]: HeaderProps
}

export default headers
