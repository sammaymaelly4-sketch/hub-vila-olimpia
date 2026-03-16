import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BottomNav from './components/BottomNav'
import Feed from './pages/Feed'
import Comercios from './pages/Comercios'
import Servicos from './pages/Servicos'
import Mural from './pages/Mural'
import './index.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"          element={<Feed />} />
        <Route path="/comercios" element={<Comercios />} />
        <Route path="/servicos"  element={<Servicos />} />
        <Route path="/mural"     element={<Mural />} />
      </Routes>
      <BottomNav />
    </BrowserRouter>
  )
}
