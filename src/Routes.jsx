import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home'
import About from "./pages/about"


export default function () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
      </Routes>
    </Router>
  )
}
