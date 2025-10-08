import { useState } from 'react'
import UserContextProvider from './context/UserContext'
import Card from './components/Card/Card'
import './App.css'

function App() {
 

  return (
   <UserContextProvider>

    <Card />

    
   </UserContextProvider>

  )
}

export default App
