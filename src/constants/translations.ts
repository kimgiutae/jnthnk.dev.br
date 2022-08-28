import type { HeadProps } from '@/components/Head'
import type { PageProps } from '@/types/PageProps'
import type { HeaderProps } from '@/components/Header'
import type { LatestProps } from '@/components/Latest'
import type { WelcomeProps } from '@/components/Welcome'
import type { ShowcaseProps } from '@/components/Showcase'

const translations: Translations = {
  pt: {
    heads: {
      blog: {
        title: '',
        keywords: '',
        description: ''
      },
      home: {
        title: '',
        keywords: '',
        description: ''
      },
      post: {
        title: '',
        keywords: '',
        description: ''
      },
      about: {
        title: '',
        keywords: '',
        description: ''
      },
      lab: {
        title: '',
        keywords: '',
        description: ''
      }
    },
    header: {
      links: [
        {
          href: '/',
          label: 'Início'
        },
        {
          href: '/Bio',
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
    latest: {
      title: ''
    },
    welcome: {
      title: `Olá Mundo!  
      Meu nome é Jonathan Kim.  
      Bem-vindos ao meu site pessoal`,
      description: 'Sou um desenvolvedor especializado no **ecosistema React**'
    },
    showcase: {
      title: ''
    }
  },
  es: {
    heads: {
      blog: {
        title: '',
        keywords: '',
        description: ''
      },
      home: {
        title: '',
        keywords: '',
        description: ''
      },
      post: {
        title: '',
        keywords: '',
        description: ''
      },
      about: {
        title: '',
        keywords: '',
        description: ''
      },
      lab: {
        title: '',
        keywords: '',
        description: ''
      }
    },
    header: {
      links: [
        {
          href: '/',
          label: 'Inicio'
        },
        {
          href: '/bio',
          label: 'Bio'
        },
        {
          href: '/portfolio',
          label: 'Portfolio'
        },
        {
          href: '/blog',
          label: 'Blog'
        }
      ]
    },
    latest: {
      title: ''
    },
    welcome: {
      title: 'Olá Mundo!<br />Meu nome é Jonathan Kim<br />Bem-vindos ao meu site pessoal',
      description: ''
    },
    showcase: {
      title: ''
    }
  },
  en: {
    heads: {
      blog: {
        title: '',
        keywords: '',
        description: ''
      },
      home: {
        title: '',
        keywords: '',
        description: ''
      },
      post: {
        title: '',
        keywords: '',
        description: ''
      },
      about: {
        title: '',
        keywords: '',
        description: ''
      },
      lab: {
        title: '',
        keywords: '',
        description: ''
      }
    },
    header: {
      links: [
        {
          href: '/',
          label: 'Home'
        }
      ]
    },
    latest: {
      title: ''
    },
    welcome: {
      title: 'Hello World!<br />My name is Jonathan Kim<br />Welcome to my personal website.',
      description: ''
    },
    showcase: {
      title: ''
    }
  }
}

type Translations = {
  [key in PageProps['lang']]: {
    heads: {
      [key in PageProps['page']]: HeadProps
    }
    header: HeaderProps
    latest: LatestProps
    welcome: WelcomeProps
    showcase: ShowcaseProps
  }
}

export default translations
