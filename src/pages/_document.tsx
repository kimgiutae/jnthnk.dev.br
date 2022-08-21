import { Html, Head, Main, NextScript } from 'next/document'
import type { FC } from 'react'

const Document: FC = () => (
  <Html className='scroll-smooth tracking-wide md:text-[17px] xl:text-[18px]'>
    <Head />
    <body className='font-open pointer-events-none min-w-[320px]'>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document
