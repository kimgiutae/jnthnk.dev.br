import { useState } from 'react'
import DataContext from '@/contexts/DataContext'
import type { FC } from 'react'

const DataProvider: FC<DataProviderProps> = ({ children }) => {
  const [menu, menuUpdate] = useState(false)
  const [popup, popupUpdate] = useState(false)
  return (
    <DataContext.Provider
      value={{
        menu,
        popup,
        menuUpdate,
        popupUpdate
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

type DataProviderProps = {
  children: JSX.Element | JSX.Element[]
}

export default DataProvider
export type { DataProviderProps }
