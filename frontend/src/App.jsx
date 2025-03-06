import { useState } from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './App.css'
import { LandingPage } from './screens/LandingPage'
import { Game } from './screens/Game'
 
function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <BrowserRouter>
       <Routes>
       <Route path='/'element={<LandingPage/>}/>
       <Route path='/game'element={<Game/>}/>
       </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
