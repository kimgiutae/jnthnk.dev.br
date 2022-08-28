import { Html, Head, Main, NextScript } from 'next/document'
import type { FC } from 'react'

const Document: FC = () => (
  <Html className='scroll-smooth font-light tracking-wide md:text-[17px] xl:text-[18px]'>
    <Head />
    <body className='pointer-events-none min-w-[320px] font-poppins'>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document
