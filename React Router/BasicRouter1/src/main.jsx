import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider , createBrowserRouter} from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'
import './index.css'
import App from './App.jsx'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element : <App />,
      children : [
        {
            path :'',
            element : <Home />
        } , 
        {
          path : 'about',
          element : <About />
        },
        {
          path :'ContactUs',
          element: <ContactUs />
        }
      ]
    }
  ]

)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
