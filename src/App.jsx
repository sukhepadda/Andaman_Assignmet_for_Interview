import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/home.jsx"
import Navbar from "./components/Navbar.jsx"
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
