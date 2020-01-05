import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import App from './components/App'
import '@babel/polyfill'
import './css/style.css'
import 'react-toastify/dist/ReactToastify.min.css'

// react-axe will run only in dev mode
if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe')
  // running the accessibility tests 1 second after the app is loaded
  axe(React, ReactDOM, 1000)
}

ReactDOM.render(
  <BrowserRouter>
    <App />
    <ToastContainer autoClose={5000} />
  </BrowserRouter>,
  document.getElementById('root'),
)
