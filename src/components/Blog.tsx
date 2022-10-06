import Title from '@/components/Title'
import Container from '@/components/Container'
import type { FC } from 'react'

const Blog: FC<BlogProps> = ({ title }) => {
  return (
    <section>
      <Container>
        <Title size='lg' className='mb-6'>
          {title}
        </Title>
        <div className=''>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ducimus quos consectetur
            facere esse exercitationem laboriosam magnam laborum, aperiam aliquid labore obcaecati
            temporibus inventore maiores ab fugiat totam blanditiis consequatur!
          </p>
        </div>
        <ul>
          <li></li>
        </ul>
      </Container>
    </section>
  )
}

type BlogProps = {
  title: string
  children?: undefined
}

export default Blog
export type { BlogProps }
