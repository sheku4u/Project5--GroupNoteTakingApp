import React from 'react'
import ReactDOM from 'react-dom/client'
// import { PersistGate } from 'redux-persist/integration/react'
// import { store, persistor } from './app/store.js';
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom"
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= <App/>  />, 
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
    <RouterProvider router={router}/>
    {/* <App /> */}
    {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
)
