import React from "react"
import { useTranslation } from "react-i18next"
import Faq from "../utils/Faq"
function Apropos() {
  const { t } = useTranslation()
  return (
    <div className="lg:pt-24">
      <div className="flex flex-wrap justify-around w-full">
        <img
          src="/images/about.jpg"
          alt=""
          className="lg:max-w-[50%] object-cover"
        />
        <div className="flex flex-col lg:max-w-[40%] xl:px-5 px-2 xl:py-2">
          <p className="xl:text-4xl text-2xl font-semibold">
            {t("historique")}
          </p>
          <p className="lg:mt-5 lg:text-xl text-gray-600 leading-8">
            {t("subHistorique")}
          </p>
          <p className="xl:text-4xl text-2xl font-semibold lg:mt-5">
            {t("partout")}
          </p>
          <p className="lg:mt-5 lg:text-xl text-gray-600 leading-7">
            {t("subPartout")}
          </p>
          <p className="xl:text-4xl text-2xl font-semibold lg:mt-5">
            {t("polyvalence")}
          </p>
          <p className="lg:mt-5 lg:text-xl text-gray-600 leading-7">
            {t("subPolyvalence")}
          </p>
        </div>
      </div>
      {/* todo faq with background image and maps + image gallery */}
      <div className="w-full lg:mt-20 lg:py-24 lg:p-5 bg-gray-100 mb-20">
        <p className="text-center lg:text-4xl font-semibold mb-7">{t("faq")}</p>
        <div className="flex  flex-col  items-center justify-evenly">
          <Faq question={t("faq1")} reponse={t("faq1r")} />
          <Faq question={t("faq2")} reponse={t("faq2r")} />
          <Faq question={t("faq3")} reponse={t("faq3r")} />
          <Faq question={t("faq4")} reponse={t("faq4r")} />
          <Faq question={t("faq5")} reponse={t("faq5r")} />
        </div>
      </div>
      <div className="flex flex-col w-full bg-[#1d3557] lg:pb-16 lg:py-10 lg:mb-20">
        <p className="lg:text-3xl text-center text-white font-semibold">
          {t("seDeplacer")}
        </p>
        {/* google maps */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3204.331100942432!2d2.816552515602864!3d36.57023818830957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128f0b1bbab614c9%3A0xbe107c8812ea8125!2sAdara%20sarl!5e0!3m2!1sfr!2sdz!4v1666011523280!5m2!1sfr!2sdz"
          style={{ border: 0 }}
          className=" my-5 lg:w-full lg:h-[25rem] border-none outline-none"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="google maps adara roto vente citerne algérie"
        />
        <div className="flex flex-col items-center text-white self-center">
          <p className="lg:text-xl mr-3">{t("houv")} </p>
          <p>{t("subHouv")} </p>
        </div>
      </div>
    </div>
  )
}

export default Apropos
