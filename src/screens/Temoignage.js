import React, { useEffect, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { Navigation, Autoplay } from "swiper"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/thumbs"


function Temoignage({
  nom = "boullif adel",
  commentaire = " Produit excellent, trés satisfait de ma commande",
  photo = "moi.jpg",
}) {
  return (
    <div className=" flex flex-col items-center w-full my-20 bg-[#0c162b] lg:py-10">
      <p className="font-semibold lg:text-3xl ml-5 text-white ">
        Temoignages de nos clients
      </p>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        // onSwiper={(swiper) => console.log(swiper)}
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
          <div className="flex flex-col items-center lg:my-20 bg-white shadow-lg lg:px-4 lg:py-3 rounded-xl">
            <img
              src={`/images/${photo}`}
              alt="profil pic"
              className="h-24 w-24 rounded-full self-center"
            />
            <h3 className="font-semibold text text-gray-800 "> {nom} </h3>
            <img src="/images/etoiles-5.png" alt="" className="h-6" />
            <p className="max-w-xs text-center text-gray-500">{commentaire}</p>
          </div>
        </SwiperSlide>
        {/* 2 */}
        <SwiperSlide>
          <div className="flex flex-col items-center lg:my-20 bg-white shadow-lg lg:px-4 lg:py-3 rounded-xl">
            <img
              src={`/images/${photo}`}
              alt="profil pic"
              className="h-24 w-24 rounded-full self-center"
            />
            <h3 className="font-semibold text text-gray-800 "> {nom} </h3>
            <img src="/images/etoiles-5.png" alt="" className="h-6" />
            <p className="max-w-xs text-center text-gray-500">{commentaire}</p>
          </div>
        </SwiperSlide>
        {/* 3 */}
        <SwiperSlide>
          <div className="flex flex-col items-center lg:my-20 bg-white shadow-lg lg:px-4 lg:py-3 rounded-xl">
            <img
              src={`/images/${photo}`}
              alt="profil pic"
              className="h-24 w-24 rounded-full self-center"
            />
            <h3 className="font-semibold text text-gray-800 "> {nom} </h3>
            <img src="/images/etoiles-5.png" alt="" className="h-6" />
            <p className="max-w-xs text-center text-gray-500">{commentaire}</p>
          </div>
        </SwiperSlide>
        {/* 4 */}
        <SwiperSlide>
          <div className="flex flex-col items-center lg:my-20 bg-white shadow-lg lg:px-4 lg:py-3 rounded-xl">
            <img
              src={`/images/${photo}`}
              alt="profil pic"
              className="h-24 w-24 rounded-full self-center"
            />
            <h3 className="font-semibold text text-gray-800 "> {nom} </h3>
            <img src="/images/etoiles-5.png" alt="" className="h-6" />
            <p className="max-w-xs text-center text-gray-500">{commentaire}</p>
          </div>
        </SwiperSlide>
        {/* 5 */}
        <SwiperSlide>
          <div className="flex flex-col items-center lg:my-20 bg-white shadow-lg lg:px-4 lg:py-3 rounded-xl">
            <img
              src={`/images/${photo}`}
              alt="profil pic"
              className="h-24 w-24 rounded-full self-center"
            />
            <h3 className="font-semibold text text-gray-800 "> {nom} </h3>
            <img src="/images/etoiles-5.png" alt="" className="h-6" />
            <p className="max-w-xs text-center text-gray-500">{commentaire}</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Temoignage
