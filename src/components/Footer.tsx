import { useId } from 'react'
import NextLink from 'next/link'
import Container from '@/components/Container'
import SocialIcon from '@/components/SocialIcon'
import type { FC } from 'react'
import type { Link } from '@/types/Link'
import type { SocialIconProps } from '@/components/SocialIcon'

const networks: SocialLink[] = [
  {
    href: '/',
    icon: 'instagram',
    label: 'Instagram'
  },
  {
    href: '/',
    icon: 'facebook',
    label: 'Facebook'
  },
  {
    href: '/',
    icon: 'github',
    label: 'GitHub'
  },
  {
    href: '/',
    icon: 'youtube',
    label: 'YouTube'
  }
]

const Footer: FC<FooterProps> = ({ links, description }) => (
  <footer className='relative z-0 border-t'>
    <Container>
      <nav className='mb-8 md:flex md:items-center md:justify-between'>
        <ul className='-m-2 mb-6 flex flex-wrap leading-4 md:-mb-2'>
          {links.map(({ href, label }, index) => (
            <li key={index} className='block p-2'>
              <NextLink passHref href={href}>
                <a className='pointer-events-auto -m-1 block p-1'>{label}</a>
              </NextLink>
            </li>
          ))}
        </ul>
        <ul className='-m-1 flex items-center leading-4'>
          {networks.map(({ href, icon, label }) => (
            <li key={icon} className='block p-1'>
              <a
                rel='nofollow'
                href={href}
                className='pointer-events-auto flex h-6 w-6 items-center overflow-hidden'
              >
                <SocialIcon name={icon} className='mr-2 h-6 w-6' />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className='border-t border-gray/50 pt-8 text-center'>
        <p
          className='pointer-events-auto mb-2 text-sm'
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <small className='pointer-events-auto text-sm'>
          <strong>jnthnk.dev.br</strong> / 2020-2022.
        </small>
      </div>
    </Container>
  </footer>
)

type SocialLink = Link & {
  icon: SocialIconProps['name']
}

type FooterProps = {
  links: Link[]
  children?: undefined
  description: string
}

export default Footer
export type { FooterProps }
