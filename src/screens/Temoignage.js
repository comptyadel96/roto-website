import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { Navigation, Autoplay } from "swiper"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/thumbs"
import { useTranslation } from "react-i18next"
function Temoignage() {
  const screenWidth = window.innerWidth
  const { t } = useTranslation()
  return (
    <div className=" flex flex-col items-center w-full my-20 bg-[#edf2f4] lg:py-10 py-5">
      <p className="font-semibold lg:text-3xl text-2xl lg:ml-5 lg:mb-0 mb-3  ">
        {t("Temoignage")}
      </p>
      <Swiper
        spaceBetween={50}
        slidesPerView={screenWidth > 780 ? 3 : 1}
        modules={[Navigation, Autoplay]}
        navigation
        loop
        className="w-full"
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        style={{
          "--swiper-navigation-color": "#2c698d",
        }}
      >
        <SwiperSlide>
          <div className="flex flex-col items-center lg:my-20 lg:bg-white lg:shadow-lg lg:px-4 lg:py-3 py-2 rounded-xl">
            <img
              src={`/images/moi.jpg`}
              alt="profil pic"
              className="h-24 w-24 mb-2 rounded-full self-center"
            />
            <h3 className="font-semibold mb-2 text text-gray-800 ">
              Boullif adel{" "}
            </h3>
            <img src="/images/etoiles-5.png" alt="" className="h-6 mb-2" />
            <p className="max-w-xs text-center text-gray-500">
              {" "}
              trés satisfait de ma commande, trés bon acceuil et le service
              commercial est top !{" "}
            </p>
          </div>
        </SwiperSlide>
        {/* 2 */}
        <SwiperSlide>
          <div className="flex flex-col items-center lg:my-20 lg:bg-white lg:shadow-lg lg:px-4 lg:py-3 py-2 rounded-xl">
            <img
              src={`/images/medLab.jpg`}
              alt="profil pic"
              className="h-24 w-24 mb-2 rounded-full self-center"
            />
            <h3 className="font-semibold mb-2 text text-gray-800 ">med lab </h3>
            <img src="/images/etoiles-5.png" alt="" className="h-6 mb-2" />
            <p className="max-w-xs text-center text-gray-500">
              {" "}
              j'étais vraiment étonné de la qualité des citernes, bonne
              continuation{" "}
            </p>
          </div>
        </SwiperSlide>
        {/* 3 */}
        <SwiperSlide>
          <div className="flex flex-col items-center lg:my-20 lg:bg-white lg:shadow-lg lg:px-4 lg:py-3 py-2 rounded-xl">
            <img
              src={`/images/lily.jpg`}
              alt="profil pic"
              className="h-24 w-24 mb-2 rounded-full self-center"
            />
            <h3 className="font-semibold mb-2 text text-gray-800 ">
              Lily bel{" "}
            </h3>
            <img src="/images/etoiles-5.png" alt="" className="h-6 mb-2" />
            <p className="max-w-xs text-center text-gray-500">
              excellent produit vraiment rien à dire trés solide{" "}
            </p>
          </div>
        </SwiperSlide>
        {/* 4 */}
        <SwiperSlide>
          <div className="flex flex-col items-center lg:my-20 lg:bg-white lg:shadow-lg lg:px-4 lg:py-3 py-2 rounded-xl">
            <img
              src={`/images/abdelali.jpg`}
              alt="profil pic"
              className="h-24 w-24 mb-2 rounded-full self-center"
            />
            <h3 className="font-semibold mb-2 text text-gray-800 ">
              abdelali abd{" "}
            </h3>
            <img src="/images/etoiles-5.png" alt="" className="h-6 mb-2" />
            <p className="max-w-md text-center text-gray-500">
              Mon premier achat etait en 2015 chez vous et depuis je suis devenu
              votre client et je le resterai toujours merci adara
            </p>
          </div>
        </SwiperSlide>
        {/* 5 */}
        <SwiperSlide>
          <div className="flex flex-col items-center lg:my-20 lg:bg-white lg:shadow-lg lg:px-4 lg:py-3 py-2 rounded-xl">
            <img
              src={`/images/moussa.jpg`}
              alt="profil pic"
              className="h-24 w-24 mb-2 rounded-full self-center"
            />
            <h3 className="font-semibold mb-2 text text-gray-800 ">
              Moussa laadjoui
            </h3>
            <img src="/images/etoiles-5.png" alt="" className="h-6 mb-2" />
            <p className="max-w-md text-center text-gray-500">
              équipe serieuse et trés dynamique, le service aprés-vente est
              excellent, les prix sont aussi trés raisonnables
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
      <p className="text-xs text-gray-500">sarl adara roto</p>
      <p className="text-xs text-gray-500"> {new Date().getFullYear()} </p>
    </div>
  )
}

export default Temoignage
