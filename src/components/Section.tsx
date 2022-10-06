import Title from '@/components/Title'
import Button from '@/components/Button'
import Container from '@/components/Container'
import type { FC } from 'react'

const Section: FC<SectionProps> = ({ notes, title, description }) => (
  <Container tag='section' className='relative items-stretch !py-6 md:flex md:!py-7 xl:!py-8'>
    <figure className='h-full shrink-0 md:order-2 md:w-1/3 md:bg-black xl:w-1/2'></figure>
    <div className='md:order-1'>
      <Title className='mb-8 !text-black'>{title}</Title>
      <p
        className='pointer-events-auto mb-6 indent-4'
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <Button href='/exp' className='mb-6 md:absolute md:right-4 md:bottom-8 md:mb-0'>
        Ver más
      </Button>
      {notes && <small className='block text-xs'>{notes}</small>}
    </div>
  </Container>
)

type SectionProps = {
  notes?: string
  title: string
  children?: undefined
  description: string
}

export default Section
export type { SectionProps }
