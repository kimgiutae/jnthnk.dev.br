import Title from '@/components/Title'
import Container from '@/components/Container'
import type { FC } from 'react'

const Welcome: FC<WelcomeProps> = ({ titles }) => (
  <header>
    <Container>
      <Title tag='h1' className='mb-8'>
        {titles[0]}
        <br />
        {titles[1]}
      </Title>
      <p className='text-xl'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, error.
      </p>
    </Container>
  </header>
)

type WelcomeProps = {
  titles: [string, string]
  description: ''
}

export default Welcome
export type { WelcomeProps }
