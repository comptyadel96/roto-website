import React from "react"
import { useTranslation } from "react-i18next"

function Produits() {
  const { t, i18n } = useTranslation()
  return (
    <div className="lg:pt-24 w-full h-full">
      <div className="flex flex-col items-center">
        {/* head section */}
        <div className="flex">
          <img
            src="/images/acceuil.jpg"
            alt="citernes"
            className="object-cover w-full"
          />
        </div>
        <p> {t("Welcome to React")} </p>
      </div>
    </div>
  )
}

export default Produits
