import React from "react"
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
    <div className=" flex flex-col items-center w-full my-20 bg-[#f3f3f3] lg:py-10">
      <p className="font-semibold lg:text-2xl ml-5">
        Temoignages de nos clients
      </p>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
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
          <div className="flex flex-col items-center lg:my-10">
            <img
              src={`/images/${photo}`}
              alt="profil pic"
              className="h-24 w-24 rounded-full self-center"
            />
            <h3 className="font-semibold text "> {nom} </h3>
            <img src="/images/etoiles-5.png" alt="" className="h-6" />
            <p className="max-w-xs text-center">{commentaire}</p>
          </div>
        </SwiperSlide>
        {/* 2 */}
        <SwiperSlide>
          <div className="flex flex-col items-center lg:my-10">
            <img
              src={`/images/${photo}`}
              alt="profil pic"
              className="h-24 w-24 rounded-full self-center"
            />
            <h3 className="font-semibold text "> {nom} </h3>
            <img src="/images/etoiles-5.png" alt="" className="h-6" />
            <p className="max-w-xs text-center">{commentaire}</p>
          </div>
        </SwiperSlide>
        {/* 3 */}
        <SwiperSlide>
          <div className="flex flex-col items-center lg:my-10">
            <img
              src={`/images/${photo}`}
              alt="profil pic"
              className="h-24 w-24 rounded-full self-center"
            />
            <h3 className="font-semibold text "> {nom} </h3>
            <img src="/images/etoiles-5.png" alt="" className="h-6" />
            <p className="max-w-xs text-center">{commentaire}</p>
          </div>
        </SwiperSlide>
        {/* 4 */}
        <SwiperSlide>
          <div className="flex flex-col items-center lg:my-10">
            <img
              src={`/images/${photo}`}
              alt="profil pic"
              className="h-24 w-24 rounded-full self-center"
            />
            <h3 className="font-semibold text "> {nom} </h3>
            <img src="/images/etoiles-5.png" alt="" className="h-6" />
            <p className="max-w-xs text-center">{commentaire}</p>
          </div>
        </SwiperSlide>
        {/* 5 */}
        <SwiperSlide>
          <div className="flex flex-col items-center lg:my-10">
            <img
              src={`/images/${photo}`}
              alt="profil pic"
              className="h-24 w-24 rounded-full self-center"
            />
            <h3 className="font-semibold text "> {nom} </h3>
            <img src="/images/etoiles-5.png" alt="" className="h-6" />
            <p className="max-w-xs text-center">{commentaire}</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Temoignage
