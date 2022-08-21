import { createContext } from 'react'
import type { Dispatch, SetStateAction } from 'react'

const DataContext = createContext<DataContextProps>(null)

type DataContextProps = {
  menu: boolean
  popup: boolean
  menuUpdate: Dispatch<SetStateAction<boolean>>
  popupUpdate: Dispatch<SetStateAction<boolean>>
}

export default DataContext
export type { DataContextProps }
