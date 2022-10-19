import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { Navigation, Autoplay, Thumbs, FreeMode } from "swiper"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/thumbs"

function Slide2() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Navigation, Autoplay, Thumbs, FreeMode]}
        navigation
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        style={{
          "--swiper-navigation-color": "#10b981",
        }}
      >
        <SwiperSlide>
          <img
            src="/images/bureau.jpg"
            alt="bureau adara"
            className="lg:max-w-[60rem] max-w-[100%] object-cover lg:mx-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/acceuil.jpg"
            alt="bureau adara"
            className="lg:max-w-[60rem] max-w-[100%] object-cover lg:mx-auto"
          />
        </SwiperSlide>
        {/* <SwiperSlide>
        <img
          src="/images/citernes.png"
          alt="bureau adara"
          className="lg:max-w-[60rem] max-w-[100%] object-cover lg:mx-auto  "
        />
      </SwiperSlide> */}
        <SwiperSlide>
          <img
            src="/images/citerne-blanche.jpg"
            alt="bureau adara"
            className="lg:max-w-[60rem] max-w-[100%] object-cover lg:mx-auto"
          />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/images/bureau.jpg" alt="bureau adara" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/acceuil.jpg" alt="bureau adara" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/images/citerne-blanche.jpg" alt="bureau adara" />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Slide2
