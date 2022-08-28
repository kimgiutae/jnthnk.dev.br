import Title from '@/components/Title'
import Container from '@/components/Container'
import type { FC } from 'react'

const Showcase: FC<ShowcaseProps> = ({ title }) => {
  return (
    <section>
      <Container>
        <Title size='lg'>{title}</Title>
        <p>Tecnologías que estou interessado:</p>
      </Container>
    </section>
  )
}

type ShowcaseProps = {
  title: string
  children?: undefined
}

export default Showcase
export type { ShowcaseProps }
