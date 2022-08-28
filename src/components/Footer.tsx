import { useId } from 'react'
import NextLink from 'next/link'
import Container from '@/components/Container'
import type { FC } from 'react'
import type { Link } from '@/types/Link'

const networks: Link[] = [
  {
    href: '/',
    label: 'Instagram'
  },
  {
    href: '/',
    label: 'YouTube'
  },
  {
    href: '/',
    label: 'GitHub'
  },
  {
    href: '/',
    label: 'Facebook'
  }
]

const Footer: FC<FooterProps> = ({ links, description }) => (
  <footer className='relative z-0 border-t'>
    <Container>
      <nav className='mb-8'>
        <ul className='flex flex-wrap leading-4'>
          {links.map(({ href, label }, index) => (
            <li key={index} className='block'>
              <NextLink passHref href={href}>
                <a className='pointer-events-auto -m-1 block p-1'>{label}</a>
              </NextLink>
            </li>
          ))}
        </ul>
        <ul className='flex leading-4'>
          {networks.map(({ href, label }, index) => (
            <li key={index} className='block'>
              <a href={href} className='pointer-events-auto flex items-center'>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <p className='mb-2 text-sm'>{description}</p>
      <small className='text-sm'>
        <strong>jnthnk.dev.br</strong> / 2020-2022.
      </small>
    </Container>
  </footer>
)

type FooterProps = {
  links: Link[]
  children?: undefined
  description: string
}

export default Footer
export type { FooterProps }
