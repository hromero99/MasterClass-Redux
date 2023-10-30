import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { IndexPage } from './pages/index.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <IndexPage />
    </Provider>
  </React.StrictMode>,
)
