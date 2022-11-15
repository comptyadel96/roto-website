import React, { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { AiOutlineMenu } from "react-icons/ai"
function Navbar() {
  const navigation = useNavigate()
  const { i18n, t } = useTranslation()
  const navRef = useRef(null)
  const toggleMenu = () => {
    const visibleArr = ["max-h-[20rem]", "shadow-md", "py-2",]
    const hideArr = ["max-h-0", "shadow-none", "py-0"]
    if (navRef.current.classList.contains("max-h-0")) {
      hideArr.map((clas) => navRef.current.classList.remove(clas))
      visibleArr.map((clas) => navRef.current.classList.add(clas))
    } else {
      visibleArr.map((clas) => navRef.current.classList.remove(clas))
      hideArr.map((clas) => navRef.current.classList.add(clas))
    }
  }
  return (
    <div>
      {/* horizontal  */}
      <div className="lg:flex hidden items-center fixed z-50 top-0 w-full py-2 px-3 shadow-md bg-white justify-evenly mt-auto ">
        <img
          src={"/images/logo.png"}
          className="lg:max-h-14 max-h-16 cursor-pointer"
          alt="adara-roto-logo"
          onClick={() => navigation("/")}
        />
        <p
          onClick={() => navigation("/")}
          className=" text-xl cursor-pointer hvr-underline-from-center pb-2 "
        >
          {t("acceuil")}
        </p>
        <p
          onClick={() => navigation("/Produits")}
          className=" text-xl cursor-pointer hvr-underline-from-center pb-2 "
        >
          {t("produits")}
        </p>
        <p
          onClick={() => navigation("/Apropos")}
          className=" text-xl cursor-pointer hvr-underline-from-center pb-2 "
        >
          {t("Apropos")}
        </p>
        <p
          onClick={() => navigation("/Contact")}
          className=" text-xl cursor-pointer hvr-underline-from-center pb-2 "
        >
          {t("contactez-nous")}
        </p>
        <p
          onClick={() => {
            i18n.changeLanguage(i18n.language === "fr" ? "ar" : "fr")
          }}
          className="text-xl cursor-pointer pb-2 "
        >
          {i18n.language === "fr" ? (
            <span className="inline-flex items-center">
              <img src="/images/algerie.png" alt="" className="h-4 mr-2" />{" "}
              arabe
            </span>
          ) : (
            <span className="inline-flex items-center">
              <img src="/images/france.png" alt="" className="h-4 mr-2" />{" "}
              français{" "}
            </span>
          )}
        </p>
      </div>
      {/* mobile nav */}
      <div className="flex justify-between py-1 lg:hidden w-full z-50 items-center shadow fixed top-0 bg-white">
        <img
          src={"/images/logo.png"}
          className="max-h-12 ml-2"
          alt="adara-roto-logo"
          onClick={() => navigation("/")}
        />
        <AiOutlineMenu className="mr-4" size={30} onClick={toggleMenu} />
        <div
          ref={navRef}
          className="absolute transition-all duration-700 overflow-hidden mb-2 -bottom-[172px] max-h-0 w-full flex flex-col bg-white  px-2 text-lg items-center"
        >
          <p>{t("acceuil")}</p>
          <p> {t("produits")}</p>
          <p>{t("Apropos")}</p>
          <p>{t("contactez-nous")}</p>
          <p
          onClick={() => {
            i18n.changeLanguage(i18n.language === "fr" ? "ar" : "fr")
          }}
          className="text-xl cursor-pointer pb-2 "
        >
          {i18n.language === "fr" ? (
            <span className="inline-flex items-center">
              <img src="/images/algerie.png" alt="" className="h-4 mr-2" />{" "}
              arabe
            </span>
          ) : (
            <span className="inline-flex items-center">
              <img src="/images/france.png" alt="" className="h-4 mr-2" />{" "}
              français{" "}
            </span>
          )}
        </p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
