import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card10 from './components/Card'
import Card1 from './components/Card1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-4xl mb-4'>Welcome My friends</h1>
      <Card10  />
      <Card10 />
      <Card1 username="Arush" />
    </>
  );
}

export default App
