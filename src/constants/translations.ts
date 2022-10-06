import type { HeadProps } from '@/components/Head'
import type { PageProps } from '@/types/PageProps'
import type { StackProps } from '@/components/Stack'
import type { FooterProps } from '@/components/Footer'
import type { HeaderProps } from '@/components/Header'
import type { LatestProps } from '@/components/Latest'
import type { WelcomeProps } from '@/components/Welcome'
import type { ExperienceProps } from '@/components/Experience'

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
    stack: {
      title: '+10 años de experiencia',
      description:
        'Me especializo en el lenguage TypeScript* para creación de aplicaciones multiplataforma con el ecosistema React. Me considero un **desarrollador Full-Stack enamorado de Front-End**. ¡Me encanta trabajar con la experiencia de usuario!'
    },
    footer: {
      description: 'Crafted with Next.js, Tailwind.css and hosted by Vercel.'
    },
    header: {
      links: [
        {
          href: '/',
          label: 'Início'
        },
        {
          href: '/experiencia',
          label: 'Experiência'
        },
        {
          href: '/portfolio',
          label: 'Portfolio'
        },
        {
          href: '/laboratorio',
          label: 'Laboratório'
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
      title: `Olá Mundo!<br />Meu nome é Jonathan Kim.<br />Bem-vindos ao meu site pessoal`,
      description:
        'Sou um desenvolvedor apaixonado em programar **interfaces de usuário elegantes e intuitivas**, utilizando as **tecnologías mais modernas e confiáveis do mercado**. Conhecca mais sobre mim navegando pelo site!'
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
        title: 'Jonathan Kim - Desarrollador web y mobile - Escritor',
        keywords: '',
        description: ''
      },
      post: {
        title: '',
        keywords: '',
        description: ''
      },
      experience: {
        title: '',
        keywords: '',
        description: ''
      },
      laboratory: {
        title: '',
        keywords: '',
        description: ''
      }
    },
    stack: {
      title: '+10 años de experiencia',
      description:
        'Me especializo en el lenguage TypeScript* para creación de aplicaciones multiplataforma con el ecosistema React. Me considero un **desarrollador Full-Stack enamorado de Front-End**. ¡Me encanta trabajar con la experiencia de usuario!'
    },
    footer: {
      description: `Hecho a mano con **Next.js**, **TailwindCSS** y hospedado en **Vercel**.  
      El [código fuente de este sitio](https://duckduckgo.com) esta hospedado en **GitHub**.`
    },
    header: {
      links: [
        {
          href: '/',
          label: 'Inicio'
        },
        {
          href: '/exp',
          label: 'Exp.'
        },
        {
          href: '/portfolio',
          label: 'Portfolio'
        },
        {
          href: '/lab',
          label: 'Lab.'
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
      title: '¡Hola Mundo!<br />Mi nombre es Jonathan Kim.<br />¡Bienvenidos a mi sitio web!',
      labels: ['Más sobre mi', 'Lea mi Blog'],
      description:
        'Soy un **desarrollador web y móvil** apasionado en crear **interfaces de usuario elegantes e intuitivas**, utilizando lo mejor del **ecosistema React: Next.js e Expo**. ¡Gracias por estar aquí!'
    },
    experience: {
      title: 'Experiencia en desarrollo de aplicaciones',
      content: `Mi nombre es Jonathan Kim y vivo en Brasil. Soy un **desarrollador Full-Stack con más de 10 años de experiencia profesional** en aplicaciones web, y recientemente también móviles. Me apasiona solucionar problemas de usabilidad en productos digitales, desarrollando **interfaces de usuario altamente intuitivas con un enfoque humano**, sin sacrificar el lado estético y comercial.

Actualmente trabajo principalmente con los **mejores frameworks del ecosistema React**: Next.js para sitios y aplicaciones web, y Expo para aplicaciones móviles nativas. Además de un largo stack de herramientas que uso cotidianamente para mantener el código organizado, versionado y a prueba de errores.



Keep lines left-aligned like this.

## Un poco de mi historia:

Mi interés en el mundo de la programación comenzó a temprana edad. A los 7 años mis padres compraron un PC Hewlet-Packard Vectra con Windows 95, donde comencé a experimentar mis primeros comandos de programación en MS-DOS.

Desde entonces, las computadoras siempre han sido parte de mi vida. Especialmente me encantaban hacer 

En el 2008 ingresé en una Escuela Técnica en Argentina dónde estuve 3 años aprendiendo los fundamentos de la programación. Mi primer lenguage de programación fue Pascal con el IDE Turbo Pascal.

Luego parti para 



Ahora empecé a estudiar.

Empecé mi carrera en el mundo de la programación cuando ingresé en una escula técnica en el 2005 con formación profesionalizante.`
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
    stack: {
      title: '+10 años de experiencia',
      description:
        'Me especializo en el lenguage TypeScript* para creación de aplicaciones multiplataforma con el ecosistema React. Me considero un **desarrollador Full-Stack enamorado de Front-End**. ¡Me encanta trabajar con la experiencia de usuario!'
    },
    footer: {
      description: 'Crafted with Next.js, Tailwind.css and hosted by Vercel.'
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
    stack: StackProps
    footer: Pick<FooterProps, 'description'>
    header: HeaderProps
    latest: LatestProps
    welcome: WelcomeProps
    experience: ExperienceProps
  }
}

export default translations
