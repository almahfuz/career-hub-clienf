import './App.css'
import Header from './assets/components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './assets/components/Footer/Footer'

function App() {

  return (
    <div>
      <Header></Header>
      <div className='min-h-[calc(100vh-136px)]'>
      <Outlet></Outlet>
      </div>
      
      <Footer></Footer>
    </div>
  )
}

export default App
