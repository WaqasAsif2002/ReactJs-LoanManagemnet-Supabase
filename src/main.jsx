// index.js

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App' // Only import App here

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App /> {/* No need for BrowserRouter here */}
  </React.StrictMode>
)
