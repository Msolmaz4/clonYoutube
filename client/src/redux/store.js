import { configureStore ,combineReducers } from '@reduxjs/toolkit'
//combineReducers birlestirmeye temel olusturmak
import userReducer from './userSlice'
import videoReducer from "./videoSlice"

//burada redux persist kullandik
//Redux persist, redux’taki değişkenlerin, sayfa yenilendiğinde, değiştiğinde veya uygulama kapatıp tekrar açıldığında
// tekrar eski haline dönmesini veya sıfırlanmasını engellemeye yarayan, bu değişkenleri localstorage da saklayan bir pakettir.
//redux-toolkite bunu Use with Redux-Persist boyle aratirdim.
//ornege bakarak yaptim rootReducer kendim zaydim cunkju baglantiyi saglamak icin daha guyek olur

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'



const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const rootReducer = combineReducers({user:userReducer , video : videoReducer})

const persistedReducer = persistReducer(persistConfig, rootReducer)




export const store = configureStore({
  reducer:persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)