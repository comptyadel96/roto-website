import React from "react"

function Navbar() {
  return (
    <>
      <div className="lg:flex hidden items-center lemonPara w-full py-2 px-3 shadow-md bg-white justify-evenly ">
        <img
          src={"/images/logo.png"}
          className="lg:max-h-24 max-h-16"
          alt="adara-roto-logo"
        />
        <p className=" text-xl cursor-pointer hvr-underline-from-center pb-2 ">
          Acceuil
        </p>
        <p className=" text-xl cursor-pointer hvr-underline-from-center pb-2 ">
          Produits
        </p>
        <p className=" text-xl cursor-pointer hvr-underline-from-center pb-2 ">
          Qui sommes-nous
        </p>
        <p className=" text-xl cursor-pointer hvr-underline-from-center pb-2 ">
          Contactez-nous
        </p>
        <p className=" text-xl cursor-pointer hvr-underline-from-center pb-2 ">
          Fr/Ar
        </p>
      </div>
    </>
  )
}

export default Navbar
