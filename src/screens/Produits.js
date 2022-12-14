import React from "react"
import { useTranslation } from "react-i18next"
import CiternCard from "../components/CiternCard"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { Navigation, Autoplay } from "swiper"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/thumbs"
import { AiFillSafetyCertificate } from "react-icons/ai"
import { GiImperialCrown } from "react-icons/gi"
function Produits() {
  const { t } = useTranslation()
  const WINDOW_Width = window.innerWidth
  return (
    <div className="lg:pt-[73px] pt-16 pb-16 w-full h-full">
      {/* head section */}
      <div className="flex  items-center lg:flex-nowrap flex-wrap relative lg:mb-24 bg-white">
        <svg
          className="lg:block hidden absolute top-0 left-0 lg:h-[130%] xl:h-auto"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#1d3557"
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
          <p className="lg:text-6xl font-semibold text-white ">
            {t("jusqua30000")}
          </p>

          <div className="flex flex-col lg:mt-[20%] lg:mr-10  xl:ml-auto xl:mr-16 lg:my-0 my-5 xl:pl-5 lg:pl-3 p-3 bg-white lg:border lg:border-black rounded-xl">
            <p className="xl:text-5xl lg:text-3xl text-2xl lg:self-start self-center text-center inline-flex items-center lg:mb-3">
              <GiImperialCrown className="lg:mr-4" /> Adara roto
            </p>
            <p className="text-gray-600 xl:max-w-[575px] xl:text-3xl text-xl">
              {t("produitSubDescription")}
            </p>
          </div>
          <div className="inline-flex items-center justify-evenly flex-wrap lg:mt-20 lg:mb-0 mb-5 xl:ml-auto xl:mr-16">
            <p className="inline-flex items-center lg:mx-0 mx-[2px] mt-3 xl:px-4 px-1 lg:px-1 py-1 border-2 rounded-lg border-[#1d3557] text-[#1d3557] lg:mr-5">
              <AiFillSafetyCertificate className="mr-1" /> {t("produitAd1")}
            </p>
            <p className="inline-flex items-center lg:mx-0 mx-[2px] mt-3 xl:px-4 px-1 lg:px-1 py-1 border-2 rounded-lg border-[#1d3557] text-[#1d3557] lg:mr-5">
              <AiFillSafetyCertificate className="mr-1" /> {t("produitAd2")}
            </p>
            <p className="inline-flex items-center lg:mx-0 mx-[2px] mt-3 xl:px-4 px-1 lg:px-1 py-1 border-2 rounded-lg border-[#1d3557] text-[#1d3557]">
              <AiFillSafetyCertificate className="mr-1" /> {t("produitAd3")}
            </p>
          </div>
        </div>
      </div>
      {/* types de cit??rnes */}
      {/* horizontal */}
      <p
        id="horizontal"
        className="text-center lg:text-4xl text-2xl lg:mb-8 mb-4 lg:10t-0 mt-4"
      >
        {t("horizontale")}
      </p>
      <div className="flex items-center justify-around flex-wrap lg:my-10 relative w-full">
        <div className="absolute lg:-bottom-[20%] -bottom-[0%] w-full h-1/2 bg-[#1d3557] -z-10" />
        <Swiper
          spaceBetween={50}
          slidesPerView={WINDOW_Width <= 769 ? 2 : WINDOW_Width >= 1280 ? 5 : 2}
          modules={[Navigation, Autoplay]}
          navigation
          style={{
            "--swiper-navigation-color": "#1098F7",
          }}
          className="xl:w-[95%]"
        >
          <SwiperSlide>
            <CiternCard
              isHorizontal
              capacit??={700}
              hauteur={98}
              largeur={112}
              photo="horizontal-s.png"
            />
          </SwiperSlide>

          <SwiperSlide>
            <CiternCard
              isHorizontal
              capacit??={1000}
              hauteur={107}
              largeur={128}
            />
          </SwiperSlide>

          <SwiperSlide>
            <CiternCard
              isHorizontal
              capacit??={1500}
              hauteur={120}
              largeur={145}
              photo="horizontal-s.png"
            />
          </SwiperSlide>

          <SwiperSlide>
            <CiternCard
              isHorizontal
              capacit??={2000}
              hauteur={139}
              largeur={155}
            />
          </SwiperSlide>

          <SwiperSlide>
            <CiternCard
              isHorizontal
              capacit??={3000}
              hauteur={158}
              largeur={191}
              photo="horizontal-s.png"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* vertical */}
      <p
        id="vertical-p"
        className="text-center lg:text-4xl text-2xl lg:mb-8 mb-4 lg:10t-0 mt-4 lg:mt-24"
      >
        {t("vpv")}
      </p>
      <div className="flex items-center justify-around flex-wrap lg:my-10 relative w-full">
        <div className="absolute lg:-bottom-[20%] -bottom-[0%] w-full h-1/2 bg-[#1d3557] -z-10" />
        <Swiper
          spaceBetween={50}
          slidesPerView={WINDOW_Width <= 768 ? 2 : WINDOW_Width >= 1280 ? 5 : 2}
          modules={[Navigation, Autoplay]}
          navigation
          style={{
            "--swiper-navigation-color": "#1098F7",
          }}
          className="xl:w-[95%]"
        >
          <SwiperSlide>
            <CiternCard
              isHorizontal={false}
              capacit??={500}
              hauteur={151}
              diametre={72}
              photo={"vertical-s.png"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <CiternCard
              isHorizontal={false}
              capacit??={700}
              hauteur={160}
              diametre={80}
              photo={"vertical-m.png"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <CiternCard
              isHorizontal={false}
              capacit??={700}
              hauteur={230}
              diametre={65}
              photo={"vertical-s.png"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <CiternCard
              isHorizontal={false}
              capacit??={800}
              hauteur={214}
              diametre={74}
              photo={"vertical-m.png"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <CiternCard
              isHorizontal={false}
              capacit??={1000}
              hauteur={195}
              diametre={89}
              photo={"vertical-m.png"}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* vertical lg */}
      <p className="text-center lg:text-4xl text-2xl lg:mb-8 mb-4  mt-4 lg:mt-24">
        {t("vmv")}
      </p>
      <div className="flex items-center justify-around flex-wrap lg:my-10 relative w-full">
        <div className="absolute lg:-bottom-[20%] -bottom-[0%] w-full h-1/2 bg-[#1d3557] -z-10" />
        <Swiper
          spaceBetween={50}
          slidesPerView={WINDOW_Width <= 768 ? 2 : WINDOW_Width >= 1280 ? 5 : 2}
          modules={[Navigation, Autoplay]}
          navigation
          style={{
            "--swiper-navigation-color": "#1098F7",
          }}
          className="xl:w-[95%]"
        >
          <SwiperSlide>
            <CiternCard
              isHorizontal={false}
              capacit??={1000}
              hauteur={129}
              diametre={116}
              photo={"1000.png"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <CiternCard
              isHorizontal={false}
              capacit??={1500}
              hauteur={144}
              diametre={128}
              photo={"2000.png"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <CiternCard
              isHorizontal={false}
              capacit??={2000}
              hauteur={221}
              diametre={116}
              photo={"2000.png"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <CiternCard
              isHorizontal={false}
              capacit??={"2000-b"}
              hauteur={169}
              diametre={140}
              photo={"2000-b.png"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <CiternCard
              isHorizontal={false}
              capacit??={3000}
              hauteur={217}
              diametre={142}
              photo={"3000.png"}
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Grand volume */}
      <p
        id="vertical-g"
        className="text-center lg:text-4xl text-2xl lg:mb-8 mb-4 mt-10 lg:mt-24"
      >
        {t("gv")}
      </p>
      <div className="flex items-center justify-around flex-wrap lg:my-10 relative w-full">
        <div className="absolute lg:-bottom-[20%] -bottom-[0%] w-full h-1/2 bg-[#1d3557] -z-10" />
        <Swiper
          spaceBetween={50}
          slidesPerView={WINDOW_Width <= 768 ? 2 : WINDOW_Width >= 1280 ? 5 : 2}
          modules={[Navigation, Autoplay]}
          navigation
          style={{
            "--swiper-navigation-color": "#1098F7",
          }}
          className="xl:w-[95%]"
        >
          <SwiperSlide>
            <CiternCard
              isHorizontal={false}
              capacit??={5000}
              hauteur={215}
              diametre={183}
              photo={"5000.png"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <CiternCard
              isHorizontal={false}
              capacit??={10000}
              hauteur={257}
              diametre={245}
              photo={"5000.png"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <CiternCard
              isHorizontal={false}
              capacit??={15000}
              hauteur={349}
              diametre={253}
              photo={"vertical-xl.png"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <CiternCard
              isHorizontal={false}
              capacit??={20000}
              hauteur={401}
              diametre={277}
              photo={"2000-b.png"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <CiternCard
              isHorizontal={false}
              capacit??={30000}
              hauteur={355}
              diametre={340}
              photo={"30000.png"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CiternCard
              isHorizontal={false}
              capacit??={3000}
              hauteur={236}
              diametre={142}
              photo={"conique.png"}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Produits
