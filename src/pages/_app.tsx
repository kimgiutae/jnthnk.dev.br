import DataProvider from '@/components/DataProvider'
import type { FC } from 'react'
import type { AppProps } from 'next/app'
import '@/styles/tailwind.css'

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <DataProvider>
    <Component {...pageProps} />
  </DataProvider>
)

export default App
