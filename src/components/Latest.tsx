import Title from '@/components/Title'
import Container from '@/components/Container'
import type { FC } from 'react'

const Latest: FC<LatestProps> = ({ title }) => {
  return (
    <section>
      <Container>
        <Title size='lg'>{title}</Title>
        <p>Tecnologías que estou interessado:</p>
      </Container>
    </section>
  )
}

type LatestProps = {
  title: string
  children?: undefined
}

export default Latest
export type { LatestProps }
