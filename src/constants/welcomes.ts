import type { PageProps } from '@/types/PageProps'
import type { WelcomeProps } from '@/components/Welcome'

const welcomes: Welcomes = {
  pt: {
    titles: ['Olá Mundo!', 'Meu nome é Jonathan Kim!'],
    description: ''
  },
  es: {
    titles: ['¡Hola Mundo!', 'Mi nombre es Jonathan Kim'],
    description: ''
  },
  en: {
    titles: ['Hello World!', 'My name is Jonathan Kim!'],
    description: ''
  }
}

type Welcomes = {
  [key in PageProps['lang']]: WelcomeProps
}

export default welcomes
