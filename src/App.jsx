import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './assets/components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <div className='min-h-[calc(100vh-136px)]'>
      <Outlet></Outlet>
      </div>
      
      <Footer></Footer>
    </>
  )
}

export default App
