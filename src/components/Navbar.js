import React from 'react'

function Navbar() {
  return (
    <div className='flex items-center w-full py-2 px-3 shadow-md bg-white justify-evenly mb-10'>
        <img src={"/images/logo.png"} className="lg:max-h-24" alt="adara-roto-logo" />
        <p className='font-semibold text-xl cursor-pointer hover:text-green-500'>Acceuil</p>
        <p className='font-semibold text-xl cursor-pointer hover:text-green-500'>Produits</p>
        <p className='font-semibold text-xl cursor-pointer hover:text-green-500'>Qui sommes-nous</p>
        <p className='font-semibold text-xl cursor-pointer hover:text-green-500'>Contactez-nous</p>
        <p className='font-semibold text-xl cursor-pointer hover:text-green-500'>Fr/Ar</p>
    </div>
  )
}

export default Navbar