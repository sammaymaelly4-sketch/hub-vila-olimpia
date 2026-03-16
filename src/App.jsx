import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import BottomNav from './components/BottomNav'
import Inicio    from './pages/Inicio'
import Comercios from './pages/Comercios'
import Mural     from './pages/Mural'
import Servicos  from './pages/Servicos'
import './index.css'

function AppInner() {
  const location = useLocation()
  const prevPath = useRef(location.pathname)

  useEffect(() => {
    prevPath.current = location.pathname
  }, [location.pathname])

  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path="/"          element={<Inicio />} />
        <Route path="/comercios" element={<Comercios />} />
        <Route path="/mural"     element={<Mural />} />
        <Route path="/servicos"  element={<Servicos />} />
      </Routes>
      <BottomNav />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  )
}
