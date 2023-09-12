import { Route, Routes } from 'react-router-dom'
import { Home } from './views/Home'
import { Contact } from './components/Contact'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App
