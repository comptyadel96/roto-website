import React from "react"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
function Navbar() {
  const navigation = useNavigate()
  const { i18n,t } = useTranslation()
  return (
    <>
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
            <p className="inline-flex items-center">
              <img src="/images/algerie.png" alt="" className="h-4 mr-2" />{" "}
              arabe
            </p>
          ) : (
            <p className="inline-flex items-center">
              <img src="/images/france.png" alt="" className="h-4 mr-2" />{" "}
              français{" "}
            </p>
          )}
        </p>
      </div>
    </>
  )
}

export default Navbar
