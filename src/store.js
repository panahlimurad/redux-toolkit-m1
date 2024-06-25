import { configureStore } from '@reduxjs/toolkit'
import booleanToogle from './features/boolean/booleanSlice'
import dataInformation from './features/boolean/dataSlice'

export const store = configureStore({
  reducer: {
    boolean: booleanToogle,
    data: dataInformation,
  },
})