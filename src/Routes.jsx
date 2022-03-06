import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home'
import About from "./pages/about"
import Services from "./pages/services"


export default function () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/servicos" element={<Services />} />
      </Routes>
    </Router>
  )
}
