import { useState } from 'react'
import UserContextProvider from './context/UserContext'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <UserContextProvider>


    
   </UserContextProvider>

  )
}

export default App
