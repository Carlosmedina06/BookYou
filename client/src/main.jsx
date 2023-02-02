import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import store from '../src/redux/store/index.js'

import { Home } from './components/Home/home.jsx'
import App from './App'

import './assets/main.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={App}>
      <Home />
    </RouterProvider>
  </Provider>,
)
