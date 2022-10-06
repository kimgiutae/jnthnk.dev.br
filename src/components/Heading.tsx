import Title from '@/components/Title'
import Container from '@/components/Container'
import type { FC } from 'react'

const Heading: FC<HeadingProps> = ({ title }) => {
  return (
    <header className='bg-black text-white'>
      <Container>
        <Title size='lg' className='mr-60 !text-white'>
          {title}
        </Title>
      </Container>
    </header>
  )
}

type HeadingProps = {
  title: string
  children?: undefined
}

export default Heading
export type { HeadingProps }
