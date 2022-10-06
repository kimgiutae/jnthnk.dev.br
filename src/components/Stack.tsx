import Title from '@/components/Title'
import Button from '@/components/Button'
import Container from '@/components/Container'
import type { FC } from 'react'

const Stack: FC<StackProps> = ({ title, description }) => (
  <section>
    <Container className='relative flex items-center'>
      <figure className='h-full shrink-0 md:order-2 md:w-1/3 md:bg-black xl:w-1/2'></figure>
      <div className='md:order-1'>
        <Title className='mb-8 !text-black'>{title}</Title>
        <p
          className='pointer-events-auto indent-4'
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <Button href='/exp' className='mb-6 md:absolute md:right-4 md:bottom-16 md:mb-0'>
          Ver más
        </Button>
      </div>
    </Container>
  </section>
)

type StackProps = {
  title: string
  children?: undefined
  description: string
}

export default Stack
export type { StackProps }
