import React, { useState } from "react"
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi"
function SlideShow() {
  let imgArr = [
    { url: "/images/acceuil.jpg", id: "1" },
    { url: "/images/bureau.jpg", id: "2" },
    { url: "/images/citernes-grises.jpg", id: "3" },
  ]
  const [currIndex, setCurrentIndex] = useState(0)
  const handleNextPage = () => {
    setCurrentIndex((prevIndex) =>
      currIndex < imgArr.length - 1 ? prevIndex + 1 : 0
    )
  }
  const handlePreviousPage = () => {
    setCurrentIndex((prevIndex) =>
      currIndex > 0 ? prevIndex - 1 : imgArr.length - 1
    )
  }
  return (
    <div className="relative flex  w-full mx-auto  mb-16 flex-wrap">
      <div className="flex flex-col w-full">
        <img
          src={`${imgArr[currIndex].url}`}
          alt=""
          className="lg:max-w-[70rem] max-w-[100%] object-cover lg:mx-auto  "
        />
        <FiArrowLeftCircle
          className="absolute lg:left-12 left-3 top-1/2 lg:translate-y-[-100%]  text-emerald-500 lg:bg-white bg-[rgba(0,0,0,0.4)] lg:px-2 px-1  rounded-full lg:text-5xl text-4xl cursor-pointer hover:-translate-x-2 transition-all duration-700"
          onClick={handlePreviousPage}
        />
        <FiArrowRightCircle
          onClick={handleNextPage}
          className="absolute lg:right-12 right-3 top-1/2 lg:translate-y-[-100%]  text-emerald-500 lg:bg-white bg-[rgba(0,0,0,0.4)] lg:px-2 px-1  rounded-full lg:text-5xl text-4xl cursor-pointer hover:translate-x-2 transition-all duration-700"
        />
        <div className="md:flex items-center  mt-4 justify-evenly hidden">
          {imgArr.map((img, index) => (
            <img
              key={img.id}
              src={`${img.url}`}
              alt=""
              className="max-w-xs mx-1 cursor-pointer brightness-50"
              onClick={() => {
                setCurrentIndex(index)
                console.log(index)
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SlideShow
