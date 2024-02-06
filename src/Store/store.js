import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import toastAlertSlice from './Slices/toastAlertSlice'

const rootReducer = combineReducers({
  [toastAlertSlice.name]: toastAlertSlice.reducer,
})

const resetRootReducer = (state, action) => {
  if (action.type === 'reset') {
    return rootReducer(undefined, action)
  }
  return rootReducer(state, action)
}

const persistConfig = {
  key: 'AUCTION',
  storage,
  blacklist: [toastAlertSlice.name],
}

const persistedReducer = persistReducer(persistConfig, resetRootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store)
