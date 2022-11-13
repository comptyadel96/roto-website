import React from "react"
import { MdOutlineFacebook } from "react-icons/md"
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai"
import { useNavigate } from "react-router-dom"
function Footer() {
  const navigate = useNavigate()
  return (
    <div className="mt-auto w-full bg-gray-100 flex flex-wrap items-center justify-evenly py-6 lg:px-3 ">
      {/* liens */}
      <div className="flex flex-col items-start text-gray-800">
        <p className="text-black lg:text-lg">Raccourcis</p>
        <p
          className="lg:text-sm my-1 cursor-pointer"
          onClick={() => navigate("/")}
        >
          Acceuil
        </p>
        <p
          className="lg:text-sm my-1 cursor-pointer"
          onClick={() => navigate("/Produits")}
        >
          Produits
        </p>
        <p
          className="lg:text-sm my-1 cursor-pointer"
          onClick={() => navigate("/Apropos")}
        >
          Qui sommes nous ?
        </p>
        <p
          className="lg:text-sm my-1 cursor-pointer"
          onClick={() => navigate("/Contact")}
        >
          Contactez-nous
        </p>
      </div>
      {/* follow us */}
      <div className="flex items-center justify-around text-gray-800  ">
        <div className="flex flex-col items-center mx-3">
          <a
            href="https://www.facebook.com/profile.php?id=100082864376144"
            target="_blank"
            rel="noreferrer"
          >
            <MdOutlineFacebook className="text-5xl" />
            <p>Facebook</p>
          </a>
        </div>
        <div className="flex flex-col items-center mx-3">
          <a
            href="https://www.instagram.com/adara_roto/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillInstagram className="text-5xl" />
            <p>Instagram</p>
          </a>
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
        <p className="text-sm text-gray-800 ">
          adara roto {new Date().getFullYear()}{" "}
        </p>
      </div>

      <div className="flex flex-col text-gray-800">
        <p className=" text-lg">Contact</p>
        <a href="mailto: roto@adarasarl.com" className="text-sm">
          Email: roto@adarasarl.com
        </a>
        <a href="tel:6031112298" className="text-sm">
          Tél: +213 560 97 52 64
        </a>
      </div>
    </div>
  )
}

export default Footer
