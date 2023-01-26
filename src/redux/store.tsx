import { configureStore } from '@reduxjs/toolkit'
import discussions from './discussions'
import user from './user'

export type RootState = ReturnType<typeof store.getState>

export const store = configureStore({
  reducer: {
    discussions,
    user
  },
})