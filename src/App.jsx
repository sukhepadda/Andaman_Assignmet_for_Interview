import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nav from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./components/Homepage"
import Blog from "./components/Blog"
import FerryBooking from "./components/bookandamanferry/FerryBooking"
import './App.css'


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/ferrybooking" element={<FerryBooking />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
