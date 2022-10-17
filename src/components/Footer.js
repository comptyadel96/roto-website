import React from "react"
import { FiMail, FiPhone } from "react-icons/fi"
import { ImLocation2, ImInstagram } from "react-icons/im"
import { MdOutlineFacebook } from "react-icons/md"
import {AiOutlineTwitter} from "react-icons/ai"
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
      {/* follow us */}
      <div className="flex items-center justify-around text-white  ml-[25%]">
        <div className="flex flex-col items-center mx-3">
          <MdOutlineFacebook className="text-5xl" />
          <p>Facebook</p>
        </div>
        <div className="flex flex-col items-center mx-3">
          <ImInstagram className="text-5xl"/>
          <p>Instagram</p>
        </div>
        <div className="flex flex-col items-center mx-3">
            <AiOutlineTwitter className="text-5xl"/>
          <p>Twitter</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
