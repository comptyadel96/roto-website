import React from "react"
import { useTranslation } from "react-i18next"
import CiternCard from "../components/CiternCard"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { Navigation, Autoplay } from "swiper"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/thumbs"

function Produits() {
  const { t } = useTranslation()
  const WINDOW_Width = window.innerWidth
  return (
    <div className="lg:pt-[73px] w-full h-full">
      {/* head section */}
      <div className="flex  items-center relative lg:mb-24 shadow-md">
        <svg
          className="lg:block hidden absolute top-0 left-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#66ecd1"
            fillOpacity="1"
            d="M0,224L48,192C96,160,192,96,288,101.3C384,107,480,181,576,202.7C672,224,768,192,864,176C960,160,1056,160,1152,154.7C1248,149,1344,139,1392,133.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        <img
          src="/images/product-head.png"
          className="lg:max-h-[40rem] lg:ml-[3%] z-40"
          alt=""
        />
        <div className="flex flex-col lg:self-start lg:mt-10  z-40 lg:ml-3  xl:w-full ">
          <p className="lg:text-6xl font-semibold ">jusqu'a 30.000 litres</p>

          <div className="flex flex-col lg:mt-[20%] xl:mt-[20%] text-right lg:mr-10  xl:ml-auto xl:mr-16">
            <div className="flex lg:flex-col xl:flex-row xl:items-center xl:my-7 lg:my-4">
              <p className="lg:text-5xl font-semibold">Matiére: </p>
              <p className="lg:text-3xl xl:ml-3 text-gray-500 ">Polyethylene</p>
            </div>

            <div className="flex lg:flex-col xl:flex-row xl:items-center xl:my-7 lg:my-4">
              <p className="lg:text-5xl  font-semibold">Nombre de couche:</p>
              <p className="lg:text-3xl xl:ml-3 text-gray-500 ">3 couches</p>
            </div>
          </div>
        </div>
      </div>
      {/* types de citérnes */}
      {/* horizontal */}
      <p className="text-center lg:text-4xl lg:mb-8">Horizontal</p>
      <div className="flex items-center justify-around flex-wrap lg:my-10 relative w-full">
        <div className="absolute -bottom-[20%] w-full h-1/2 bg-[#66ecd1] -z-10" />
        <Swiper
          spaceBetween={50}
          slidesPerView={WINDOW_Width >= 1280 ? 5 : 3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          modules={[Navigation, Autoplay]}
          navigation
          style={{
            "--swiper-navigation-color": "#66ecd1",
          }}
          className="xl:w-[95%]"
        >
          <SwiperSlide>
            <CiternCard
              isHorizontal
              capacité={700}
              hauteur={98}
              largeur={112}
            />
          </SwiperSlide>

          <SwiperSlide>
            <CiternCard
              isHorizontal
              capacité={1000}
              hauteur={107}
              largeur={128}
            />
          </SwiperSlide>

          <SwiperSlide>
            <CiternCard
              isHorizontal
              capacité={1500}
              hauteur={120}
              largeur={145}
            />
          </SwiperSlide>

          <SwiperSlide>
            <CiternCard
              isHorizontal
              capacité={2000}
              hauteur={139}
              largeur={155}
            />
          </SwiperSlide>

          <SwiperSlide>
            <CiternCard
              isHorizontal
              capacité={3000}
              hauteur={158}
              largeur={191}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Produits
