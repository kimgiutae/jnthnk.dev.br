import Title from '@/components/Title'
import Button from '@/components/Button'
import Container from '@/components/Container'
import type { FC } from 'react'

const Welcome: FC<WelcomeProps> = ({ title, description }) => (
  <header className='relative'>
    <Container className='md:flex'>
      <span className='mb-8 block h-32 w-32 shrink-0 rounded-full bg-black md:order-2 md:mb-0 md:h-36 md:w-36 xl:h-40 xl:w-40' />
      <div className='md:order-1 md:pr-8 xl:pr-12'>
        <Title isHTML tag='h1' className='mb-6'>
          {title}
        </Title>
        <p className='text-xl' dangerouslySetInnerHTML={{ __html: description }} />
        <div className='mt-8'>
          <Button href='/projetos'>Ver meus projetos</Button>
        </div>
      </div>
    </Container>
  </header>
)

type WelcomeProps = {
  title: string
  description: string
}

export default Welcome
export type { WelcomeProps }
