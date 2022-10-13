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
    <div className="relative flex w-[80%] mx-auto  mb-16 flex-wrap">
      <div className="flex flex-col w-full">
        <img
          src={`${imgArr[currIndex].url}`}
          alt=""
          className="max-h-[70vh] object-cover mx-auto "
        />
        <FiArrowLeftCircle
          className="absolute left-12 top-1/2 translate-y-[-50%] text-emerald-500 bg-white px-2 rounded-full text-5xl cursor-pointer hover:-translate-x-2 transition-all duration-700"
          onClick={handlePreviousPage}
        />
        <FiArrowRightCircle
          onClick={handleNextPage}
          className="absolute right-12 top-1/2 translate-y-[-50%] text-emerald-500 bg-white px-2 rounded-full text-5xl cursor-pointer hover:translate-x-2 transition-all duration-700"
        />
        <div className="flex items-center  mt-4 justify-evenly">
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
