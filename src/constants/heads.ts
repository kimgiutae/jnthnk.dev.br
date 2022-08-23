import type { PageProps } from '@/types/PageProps'
import type { HeadProps } from '@/components/Head'

const heads: Heads = {
  pt: {
    home: {
      title: 'Bem-vindos!',
      keywords: '',
      description: ''
    },
    playground: {
      title: 'Bem-vindos!',
      keywords: '',
      description: ''
    }
  },
  es: {
    home: {
      title: 'Bienvenidos!',
      keywords: '',
      description: ''
    },
    playground: {
      title: 'Bem-vindos!',
      keywords: '',
      description: ''
    }
  },
  en: {
    home: {
      title: 'Welcome!',
      keywords: '',
      description: ''
    },
    playground: {
      title: 'Bem-vindos!',
      keywords: '',
      description: ''
    }
  }
}

type Heads = {
  [key in PageProps['lang']]: {
    [key in PageProps['page']]: HeadProps
  }
}

export default heads
