import { useId } from 'react'
import Language from '@/components/Language'
import NextLink from 'next/link'
import Container from '@/components/Container'
import type { FC } from 'react'
import type { Link } from '@/types/Link'

const Header: FC<HeaderProps> = ({ links }) => {
  const linkId = useId()
  return (
    <header className='relative z-20 overflow-hidden'>
      <Container tag='nav' className='!py-8 md:!py-6 xl:!py-4'>
        <ul className='-m-2 flex leading-4'>
          {links.map(({ href, label }) => (
            <li key={`${linkId}-${href}`} className='block p-2'>
              <NextLink passHref href={href}>
                <a className='pointer-events-auto -m-1 block p-1 font-semibold'>{label}</a>
              </NextLink>
            </li>
          ))}
        </ul>
        <div>
          <Language />
        </div>
      </Container>
    </header>
  )
}

type HeaderProps = {
  links: Link[]
  children?: undefined
}

export default Header
export type { HeaderProps }
