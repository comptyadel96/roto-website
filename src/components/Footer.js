import React from "react"
import { FiMail, FiPhone } from "react-icons/fi"
import { ImLocation2 } from "react-icons/im"
import { MdOutlineFacebook } from "react-icons/md"
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai"
function Footer() {
  return (
    <div className="mt-auto w-full bg-gray-800 flex flex-wrap items-center justify-evenly py-6 lg:px-3">
      {/* liens */}
      <div className="flex flex-col items-start text-white">
        <p className="text-emerald-400 text-3xl">Raccourcis</p>
        <p className="lg:text-lg">Acceuil</p>
        <p className="lg:text-lg">Produits</p>
        <p className="lg:text-lg">Qui sommes nous ?</p>
        <p className="lg:text-lg">Contactez-nous</p>
      </div>
      {/* follow us */}
      <div className="flex items-center justify-around text-white  ">
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
          src="/images/roto-white.png"
          alt="adara roto logo"
          className="max-w-[8rem]"
        />
        <p className="text-white mt-2">
          55, Cité Ben Sallah, Oued El Alleug, (W) de Blida{" "}
        </p>
        <p className="text-gray-100">adara roto {new Date().getFullYear()} </p>
      </div>

      <div className="flex flex-col text-white">
        <p className="font-semibold text-lg">Contact</p>
        <a href ="mailto: roto@adarasarl.com">Email: roto@adarasarl.com</a>
        <a href="tel:6031112298">Tél: +213 560 97 52 64</a>
      </div>
    </div>
  )
}

export default Footer
