import headers from '@/constants/headers'
import type { PageProps } from '@/types/PageProps'
import type { FooterProps } from '@/components/Footer'

const footers: Headers = {
  pt: {
    links: headers.pt.links,
    description: 'Crafted with Next.js, Tailwind.css and hosted by Vercel.'
  },
  es: {
    links: headers.es.links,
    description: 'Crafted with Next.js, Tailwind.css and hosted by Vercel.'
  },
  en: {
    links: headers.en.links,
    description: 'Crafted with Next.js, Tailwind.css and hosted by Vercel.'
  }
}

type Headers = {
  [key in PageProps['lang']]: FooterProps
}

export default footers
