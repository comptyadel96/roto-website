import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Route, Routes, BrowserRouter } from "react-router-dom"

import "./index.css"
import Acceuil from "./screens/Acceuil"
import Apropos from "./screens/Apropos"
import Contact from "./screens/Contact"
import Produits from "./screens/Produits"
import NotFound from "./screens/NotFound"
import { MessengerChat } from "react-messenger-chat-plugin"
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="border-none outline-none overflow-hidden ">
        <MessengerChat
          pageId="104349362317038"
          language="fr_FR"
          themeColor={"#44BEC7"}
          bottomSpacing={10}
          loggedInGreeting="Salutations! comment pouvons-nous vous aider ?"
          loggedOutGreeting="Laissez-nous un message, on vous contactera au plus tot"
          greetingDialogDisplay={"show"}
          debugMode={true}
          onMessengerShow={() => {
            console.log("onMessengerShow")
          }}
          onMessengerHide={() => {
            console.log("onMessengerHide")
          }}
          onMessengerDialogShow={() => {
            console.log("onMessengerDialogShow")
          }}
          onMessengerDialogHide={() => {
            console.log("onMessengerDialogHide")
          }}
          onMessengerMounted={() => {
            console.log("onMessengerMounted")
          }}
          onMessengerLoad={() => {
            console.log("onMessengerLoad")
          }}
        />
      </div>

      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route element={<Acceuil />} path="/" />
        <Route element={<Apropos />} path="/Apropos" />
        <Route element={<Contact />} path="/Contact" />
        <Route element={<Produits />} path="/Produits" />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
