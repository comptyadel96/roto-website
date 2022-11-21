import React from "react"
import { useTranslation } from "react-i18next"

function CiternCard({
  photo = "horizontal.png",
  hauteur,
  largeur,
  capacité,
  isHorizontal = false,
  diametre,
}) {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col items-center  lg:px-4 lg:py-2 lg:bg-white lg:shadow-md lg:border rounded-xl overflow-visible">
      <img
        src={`/images/${photo}`}
        alt="citérne algérie"
        className="max-h-[14rem] hover:scale-[1.1] transition-all duration-500"
      />
      <p className="lg:text-2xl font-semibold bg-gray-200 px-3 mt-2 rounded-lg ">
        {capacité} {t("litres")}
      </p>

      <p className="lg:text-2xl lg:text-black text-white">{t("dimensions")} </p>
      <p className="lg:text-black text-white">
        {t("hauteur")} {hauteur} {t("cm")}
      </p>
      {isHorizontal ? (
        <p className="lg:text-black text-white">
          {t("largeur")} : {largeur} {t("cm")}
        </p>
      ) : (
        <p className="lg:text-black text-white">
          {t("diamétre")} :{diametre} {t("cm")}
        </p>
      )}
    </div>
  )
}

export default CiternCard
