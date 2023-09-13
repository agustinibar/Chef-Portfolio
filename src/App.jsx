import { Route, Routes } from 'react-router-dom'
import { Home } from './views/Home'
import { Contact } from './components/Contact'
import  MyBegginings  from './views/MyBegginings'
import  LeadershipStories from './views/LeadershipStories'
import { FoodieSiteLab } from './views/FoodieSiteLab'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/background/order-1' element={<MyBegginings/>}/>
      <Route path='/background/order-4' element={<LeadershipStories/>}/>
      <Route path='/foodiesitelab' element={<FoodieSiteLab/>}/>
    </Routes>
    </>
  )
}

export default App
