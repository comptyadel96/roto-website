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
    <div className="relative flex w-[80%] mx-auto bg-black mb-16 flex-wrap">
      <div className="flex flex-col w-full">
        <img
          src={`${imgArr[currIndex].url}`}
          alt=""
          className="max-h-[70vh] object-cover mx-auto "
        />
        <FiArrowLeftCircle
          className="absolute left-5 top-1/2 translate-y-[-50%] text-white text-3xl cursor-pointer hover:-translate-x-2 transition-all duration-700"
          onClick={handlePreviousPage}
        />
        <FiArrowRightCircle
          onClick={handleNextPage}
          className="absolute right-5 top-1/2 translate-y-[-50%] text-white text-3xl cursor-pointer hover:translate-x-2 transition-all duration-700"
        />
        <div className="flex items-center bg-yellow-400">
          {imgArr

            .filter((img, index) => {
              console.log(index, currIndex)
              return index !== currIndex
            })
            .map((img, index) => (
              <img
                key={img.id}
                src={`${img.url}`}
                alt=""
                className="max-w-xs mx-1 cursor-pointer brightness-50"
                onClick={() => setCurrentIndex(index)}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default SlideShow
