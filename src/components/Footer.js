import React from "react"
import { MdOutlineFacebook } from "react-icons/md"
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai"
function Footer() {
  return (
    <div className="mt-auto w-full bg-gray-100 flex flex-wrap items-center justify-evenly py-6 lg:px-3 lemonPara">
      {/* liens */}
      <div className="flex flex-col items-start text-gray-800">
        <p className="text-black lg:text-lg">Raccourcis</p>
        <p className="lg:text-sm my-1">Acceuil</p>
        <p className="lg:text-sm my-1">Produits</p>
        <p className="lg:text-sm my-1">Qui sommes nous ?</p>
        <p className="lg:text-sm my-1">Contactez-nous</p>
      </div>
      {/* follow us */}
      <div className="flex items-center justify-around text-gray-800  ">
        <div className="flex flex-col items-center mx-3">
          <MdOutlineFacebook className="text-5xl" />
          <p>Facebook</p>
        </div>
        <div className="flex flex-col items-center mx-3">
          <AiFillInstagram className="text-5xl" />
          <p>Instagram</p>
        </div>
        <div className="flex flex-col items-center mx-3">
          <AiOutlineTwitter className="text-5xl" />
          <p>Twitter</p>
        </div>
      </div>
      <div className="flex flex-col">
        <img
          src="/images/logo.png"
          alt="adara roto logo"
          className="max-w-[8rem]"
        />
        <p className="text-gray-800 mt-2 text-sm">
          55, Cité Ben Sallah, Oued El Alleug, (W) de Blida{" "}
        </p>
        <p className="text-sm">adara roto {new Date().getFullYear()} </p>
      </div>

      <div className="flex flex-col text-gray-800">
        <p className=" text-lg">Contact</p>
        <a href ="mailto: roto@adarasarl.com" className="text-sm">Email: roto@adarasarl.com</a>
        <a href="tel:6031112298" className="text-sm">Tél: +213 560 97 52 64</a>
      </div>
    </div>
  )
}

export default Footer
