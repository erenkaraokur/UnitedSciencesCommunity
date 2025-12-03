import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projeler" element={<Projects />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route path="/hakkimizda" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App