import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
const store = configureStore({
  reducer: {
    cartReducer
  }
})

export type RootLocalState = ReturnType< typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;