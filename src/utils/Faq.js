import React, { useRef, useState } from "react"
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5"
function Faq({
  question = "Les citernes sont ils assurées ?",
  reponse = "oui, lors de votre achat vous bénéficerai d'une assurance de 6 mois",
}) {
  const [isOpen, setIsOpen] = useState(false)
  const resRef = useRef(null)
  const toggleRef = () => {
    if (resRef.current.classList.contains("max-h-0")) {
      resRef.current.classList.remove("max-h-0")
      resRef.current.classList.add("max-h-[10rem]")
      setIsOpen(!isOpen)
    } else {
      resRef.current.classList.add("max-h-0")
      resRef.current.classList.remove("max-h-[10rem]")
      setIsOpen(!isOpen)
    }
  }
  return (
    <div
      onClick={toggleRef}
      className="my-3 lg:mx-5 overflow-hidden cursor-pointer flex flex-col items-center lg:max-w-md relative bg-white lg:px-3 lg:rounded-xl border border-gray-600 "
    >
      <div className="flex items-center w-full">
        <p className="lg:text-2xl"> {question} </p>
        {!isOpen ? (
          <IoChevronDownSharp className="lg:text-xl text-gray-400 ml-auto lg:mt-1" />
        ) : (
          <IoChevronUpSharp className="lg:text-xl text-gray-400 ml-auto lg:mt-1" />
        )}
      </div>

      <p
        ref={resRef}
        className="max-h-0 text-gray-500 text-center max-w-fit cursor-default lg:my-1 transition-all duration-1000 "
        onClick={(e) => e.stopPropagation()}
      >
        {reponse}
      </p>
    </div>
  )
}

export default Faq
