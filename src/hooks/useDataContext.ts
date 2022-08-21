import { useContext } from 'react'
import DataContext from '@/contexts/DataContext'

const useDataContext = () => useContext(DataContext)

export default useDataContext
