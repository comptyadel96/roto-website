import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Route, Routes, BrowserRouter } from "react-router-dom"

import "./index.css"
import Acceuil from "./screens/Acceuil"
import Apropos from "./screens/Apropos"
import Contact from "./screens/Contact"
import Produits from "./screens/Produits"
import NotFound from "./screens/NotFound"
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path='*' element={<NotFound />} />
        <Route element={<Acceuil />} path="/" />
        <Route element={<Apropos />} path="/Apropos" />
        <Route element={<Contact/>} path="/Contact" />
        <Route element={<Produits/>} path="/Produits" />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
