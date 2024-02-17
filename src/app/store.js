import {configureStore} from '@reduxjs/toolkit'

// import { createStore } from 'redux'
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
import rootReducer from '../features/RootReducer'

// const persistConfig = {
//     key: 'root',
//     storage,
//   }

//   const persistedReducer = persistReducer(persistConfig, rootReducer)

//   export default ()=>{
//     let store = createStore(persistedReducer)
//   let persistor = persistStore(store)
//   return { store, persistor }
//   }

export const store = configureStore(
    {
        reducer: rootReducer
    }
)