import Title from '@/components/Title'
import Button from '@/components/Button'
import Container from '@/components/Container'
import type { FC } from 'react'

const Welcome: FC<WelcomeProps> = ({ title, labels, description }) => (
  <header className='relative pt-8'>
    <Container className='relative z-10 !pb-4 md:flex'>
      <span className='mb-8 block h-32 w-32 shrink-0 rounded-full bg-black md:order-2 md:mb-0 md:h-36 md:w-36 xl:h-40 xl:w-40' />
      <div className='md:order-1 md:pr-8 xl:pr-12'>
        <Title tag='h1' className='mb-6'>
          <span dangerouslySetInnerHTML={{ __html: title }} />
        </Title>
        <p className='mb-8 text-lg' dangerouslySetInnerHTML={{ __html: description }} />
        <div className='flex flex-col items-start xs:flex-row xs:items-center'>
          <Button href='/exp' className='mb-2 xs:mb-0 xs:mr-2'>
            {labels[0]}
          </Button>
          <Button href='/blog' mode='transparent'>
            {labels[1]}
          </Button>
        </div>
      </div>
    </Container>
  </header>
)

type WelcomeProps = {
  title: string
  labels: [string, string]
  description: string
}

export default Welcome
export type { WelcomeProps }
