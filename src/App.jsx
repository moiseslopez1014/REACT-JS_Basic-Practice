import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route path='/' element={<HomePage/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
