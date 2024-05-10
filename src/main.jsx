import React from 'react'
import ReactDOM from 'react-dom/client'

// Routes
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes';

// Style
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
