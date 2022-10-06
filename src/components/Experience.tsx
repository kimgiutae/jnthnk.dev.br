import Title from '@/components/Title'
import Heading from '@/components/Heading'
import Container from '@/components/Container'
import { kebabCase } from 'lodash'
import type { FC } from 'react'

const Experience: FC<ExperienceProps> = ({ title, content }) => {
  const items = [
    {
      icon: (
        <>
          <path d='M21 6h-2l-1.27-1.27A2.49 2.49 0 0 0 16 4h-2.5A2.64 2.64 0 0 0 11 2v6.36a4.38 4.38 0 0 0 1.13 2.72 6.57 6.57 0 0 0 4.13 1.82l3.45-1.38a3 3 0 0 0 1.73-1.84L22 8.15a1.06 1.06 0 0 0 0-.31V7a1 1 0 0 0-1-1zm-5 2a1 1 0 1 1 1-1 1 1 0 0 1-1 1z' />
          <path d='M11.38 11.74A5.24 5.24 0 0 1 10.07 9H6a1.88 1.88 0 0 1-2-2 1 1 0 0 0-2 0 4.69 4.69 0 0 0 .48 2A3.58 3.58 0 0 0 4 10.53V22h3v-5h6v5h3v-8.13a7.35 7.35 0 0 1-4.62-2.13z' />
        </>
      ),
      label: 'Me encantan los perros'
    },
    {
      icon: (
        <path d='M7 22h10a1 1 0 0 0 .99-.858L19.867 8H21V6h-1.382l-1.724-3.447A.998.998 0 0 0 17 2H7c-.379 0-.725.214-.895.553L4.382 6H3v2h1.133L6.01 21.142A1 1 0 0 0 7 22zm10.418-11H6.582l-.429-3h11.693l-.428 3zm-9.551 9-.429-3h9.123l-.429 3H7.867zM7.618 4h8.764l1 2H6.618l1-2z' />
      ),
      label: 'Me encantan los perros'
    },
    {
      icon: (
        <>
          <path d='M19.071 4.929a9.936 9.936 0 0 0-7.07-2.938 9.943 9.943 0 0 0-7.072 2.938c-3.899 3.898-3.899 10.243 0 14.142a9.94 9.94 0 0 0 7.073 2.938 9.936 9.936 0 0 0 7.07-2.937c3.899-3.898 3.899-10.243-.001-14.143zM12.181 4h-.359c.061-.001.119-.009.18-.009s.118.008.179.009zm6.062 13H16l-1.258 2.516a7.956 7.956 0 0 1-2.741.493 7.96 7.96 0 0 1-2.746-.494L8 17.01H5.765a7.96 7.96 0 0 1-1.623-3.532L6 11 4.784 8.567a7.936 7.936 0 0 1 1.559-2.224 7.994 7.994 0 0 1 3.22-1.969L12 6l2.438-1.625a8.01 8.01 0 0 1 3.22 1.968 7.94 7.94 0 0 1 1.558 2.221L18 11l1.858 2.478A7.952 7.952 0 0 1 18.243 17z' />
          <path d='m8.5 11 1.5 4h4l1.5-4L12 8.5z' />
        </>
      ),
      label: 'Me encanta el fútbol'
    },
    {
      icon: (
        <>
          <path d='M19.071 4.929a9.936 9.936 0 0 0-7.07-2.938 9.943 9.943 0 0 0-7.072 2.938c-3.899 3.898-3.899 10.243 0 14.142a9.94 9.94 0 0 0 7.073 2.938 9.936 9.936 0 0 0 7.07-2.937c3.899-3.898 3.899-10.243-.001-14.143zM12.181 4h-.359c.061-.001.119-.009.18-.009s.118.008.179.009zm6.062 13H16l-1.258 2.516a7.956 7.956 0 0 1-2.741.493 7.96 7.96 0 0 1-2.746-.494L8 17.01H5.765a7.96 7.96 0 0 1-1.623-3.532L6 11 4.784 8.567a7.936 7.936 0 0 1 1.559-2.224 7.994 7.994 0 0 1 3.22-1.969L12 6l2.438-1.625a8.01 8.01 0 0 1 3.22 1.968 7.94 7.94 0 0 1 1.558 2.221L18 11l1.858 2.478A7.952 7.952 0 0 1 18.243 17z' />
          <path d='m8.5 11 1.5 4h4l1.5-4L12 8.5z' />
        </>
      ),
      label: 'Me encanta el fútbol'
    }
  ]
  return (
    <article className='relative z-10 pt-12'>
      <Heading title={title} />
      <Container>
        <div className='prose pointer-events-auto' dangerouslySetInnerHTML={{ __html: content }} />
      </Container>
      <section className='border-t bg-secondary/10'>
        <Container>
          <Title className='mb-6'>Más sobre mi:</Title>
          <ul className='-m-2 flex flex-wrap'>
            {items.map(({ icon, label }) => (
              <li className='flex w-full items-center p-2 md:w-1/2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  className='mr-4 h-10 w-10 shrink-0'
                >
                  {icon}
                </svg>
                <Title tag='span' size='sm' className='!font-light !text-black'>
                  {label}
                </Title>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </article>
  )
}

type ExperienceProps = {
  title: string
  content: string
  children?: undefined
}

export default Experience
export type { ExperienceProps }
