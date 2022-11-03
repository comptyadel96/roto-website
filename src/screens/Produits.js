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
      <div className="flex  items-center relative lg:mb-24 bg-gray-50">
        <svg
          className="lg:block hidden absolute top-0 left-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#edf2f4"
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

          <div className="flex flex-col lg:mt-[20%] xl:mt-[20%] text-right lg:mr-10  xl:ml-auto xl:mr-16 xl:pl-5 xl:pt-3 xl:pr-2 bg-white border border-black rounded-xl">
            <p className="xl:self-center xl:text-5xl xl:font-semibold">
              Citernes Adara
            </p>
            <div className="flex lg:flex-col xl:flex-row xl:items-center xl:my-7 lg:my-4">
              <p className="lg:text-5xl font-semibold inline-flex items-center">
                <span className="lg:block hidden h-7 w-7 mr-3 rounded-full bg-[#edf2f4]" />
                Matiére:
              </p>
              <p className="lg:text-3xl xl:text-4xl xl:ml-3 text-gray-500 ">
                Polyethylene
              </p>
            </div>

            <div className="flex lg:flex-col xl:flex-row xl:items-center xl:my-7 lg:my-4">
              <p className="lg:text-5xl  font-semibold inline-flex items-center">
                <span className="lg:block hidden h-7 w-7 mr-3 rounded-full bg-[#edf2f4]" />{" "}
                Nb de couche:
              </p>
              <p className="lg:text-3xl xl:text-4xl xl:ml-3 text-gray-500 ">
                3 couches
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* types de citérnes */}
      {/* horizontal */}
      <p id="horizontal" className="text-center lg:text-4xl lg:mb-8">
        Horizontale
      </p>
      <div className="flex items-center justify-around flex-wrap lg:my-10 relative w-full">
        <div className="absolute -bottom-[20%] w-full h-1/2 bg-[#edf2f4] -z-10" />
        <Swiper
          spaceBetween={50}
          slidesPerView={WINDOW_Width <= 769 ? 2 : WINDOW_Width >= 1280 ? 5 : 2}
          modules={[Navigation, Autoplay]}
          navigation
          style={{
            "--swiper-navigation-color": "#edf2f4",
          }}
          className="xl:w-[95%]"
        >
          <SwiperSlide>
            <CiternCard
              isHorizontal
              capacité={700}
              hauteur={98}
              largeur={112}
              photo="horizontal-s.png"
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
              photo="horizontal-s.png"
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
              photo="horizontal-s.png"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* vertical */}
      <p id="vertical-p" className="text-center lg:text-4xl lg:mb-8 lg:mt-24">
        Verticale petit volume
      </p>
      <div className="flex items-center justify-around flex-wrap lg:my-10 relative w-full">
        <div className="absolute -bottom-[20%] w-full h-1/2 bg-[#1098F7] -z-10" />
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
              capacité={500}
              hauteur={151}
              diametre={72}
              photo={"vertical-s.png"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <CiternCard
              isHorizontal={false}
              capacité={700}
              hauteur={160}
              diametre={80}
              photo={"vertical-m.png"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <CiternCard
              isHorizontal={false}
              capacité={700}
              hauteur={230}
              diametre={65}
              photo={"vertical-s.png"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <CiternCard
              isHorizontal={false}
              capacité={800}
              hauteur={214}
              diametre={74}
              photo={"vertical-m.png"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <CiternCard
              isHorizontal={false}
              capacité={1000}
              hauteur={195}
              diametre={89}
              photo={"vertical-m.png"}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* vertical lg */}
      <p className="text-center lg:text-4xl lg:mb-8 lg:mt-24">
        Verticale moyen volume
      </p>
      <div className="flex items-center justify-around flex-wrap lg:my-10 relative w-full">
        <div className="absolute -bottom-[20%] w-full h-1/2 bg-[#5E239D] -z-10" />
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
              capacité={1000}
              hauteur={129}
              diametre={116}
              photo={"1000.png"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <CiternCard
              isHorizontal={false}
              capacité={1500}
              hauteur={144}
              diametre={128}
              photo={"2000.png"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <CiternCard
              isHorizontal={false}
              capacité={2000}
              hauteur={221}
              diametre={116}
              photo={"2000.png"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <CiternCard
              isHorizontal={false}
              capacité={"2000-b"}
              hauteur={169}
              diametre={140}
              photo={"2000-b.png"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <CiternCard
              isHorizontal={false}
              capacité={3000}
              hauteur={217}
              diametre={142}
              photo={"3000.png"}
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Grand volume */}
      <p id="vertical-g" className="text-center lg:text-4xl lg:mb-8 lg:mt-24">Grand volume</p>
      <div className="flex items-center justify-around flex-wrap lg:my-10 relative w-full">
        <div className="absolute -bottom-[20%] w-full h-1/2 bg-[#F61067] -z-10" />
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
              capacité={5000}
              hauteur={215}
              diametre={183}
              photo={"5000.png"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <CiternCard
              isHorizontal={false}
              capacité={10000}
              hauteur={257}
              diametre={245}
              photo={"5000.png"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <CiternCard
              isHorizontal={false}
              capacité={15000}
              hauteur={349}
              diametre={253}
              photo={"vertical-xl.png"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <CiternCard
              isHorizontal={false}
              capacité={20000}
              hauteur={401}
              diametre={277}
              photo={"2000-b.png"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <CiternCard
              isHorizontal={false}
              capacité={30000}
              hauteur={355}
              diametre={340}
              photo={"30000.png"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CiternCard
              isHorizontal={false}
              capacité={3000}
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
