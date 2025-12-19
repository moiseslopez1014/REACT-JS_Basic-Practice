import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import CreatePokemonPage from './pages/CreatePokemonPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route path='/' element={<HomePage/>} />
          <Route path='/create' element={<CreatePokemonPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
