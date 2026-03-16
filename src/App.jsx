import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import BottomNav from './components/BottomNav'
import Inicio    from './pages/Inicio'
import Comercios from './pages/Comercios'
import Mural     from './pages/Mural'
import Servicos  from './pages/Servicos'
import './index.css'

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/"          element={<Inicio />} />
          <Route path="/comercios" element={<Comercios />} />
          <Route path="/mural"     element={<Mural />} />
          <Route path="/servicos"  element={<Servicos />} />
        </Routes>
        <BottomNav />
      </BrowserRouter>
    </ThemeProvider>
  )
}
