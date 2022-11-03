import React from "react"
import { useNavigate } from "react-router-dom"
function NotFound() {
  const navigate = useNavigate()
  return (
    <div className="lg:pt-24 h-full flex flex-col">
      <img src="/images/404.png" className="lg:max-w-[50%] mx-auto " alt="" />
      <p className="lg:text-3xl lg:mt-10 text-center mx-auto lg:max-w-2xl">
        Il semble que la page que vous voulez visiter a été déplacer ou
        supprimer, assurez vous que l'url est correcte et réessayer
      </p>
      <button
        className="mx-auto mb-20 bg-sky-500 hover:bg-sky-700 text-white lg:text-2xl cursor-pointer lg:mt-20 px-4 py-2 rounded-xl"
        onClick={() => navigate("/")}
      >
        Revenir à la page d'acceuil
      </button>
    </div>
  )
}

export default NotFound
