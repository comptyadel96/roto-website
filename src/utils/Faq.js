import React, { useState, useRef } from "react"

function Faq({
  question = "puis-je ????",
  reponse = "oui,vous pouvez si vous voulez",
}) {
  const [isOpen, setIsOpen] = useState(false)
  const resRef = useRef(null)
  return (
    <div className=" flex flex-col items-center lg:max-w-md relative bg-white lg:px-3 py-2">
      <p> {question} </p>
      <p></p>
    </div>
  )
}

export default Faq
