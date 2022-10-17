import React from "react"

function Footer() {
  return (
    <div className="mt-auto w-full bg-gray-800 flex flex-wrap items-center py-6 lg:px-3">
      {/* liens */}
      <div className="flex flex-col items-start text-white">
        <p className="text-emerald-400 text-3xl">Liens</p>
        <p className="font-semibold lg:text-xl">Acceuil</p>
        <p className="font-semibold lg:text-xl">Produits</p>
        <p className="font-semibold lg:text-xl">Qui sommes nous ?</p>
        <p className="font-semibold lg:text-xl">Contactez-nous</p>
      </div>
    </div>
  )
}

export default Footer
