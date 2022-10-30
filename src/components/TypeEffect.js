import React, { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"

function TypeEffect() {
  const { t } = useTranslation()
  const textRef = useRef(null)
  const string = t("headerTitle") 

  let [newText, setNewText] = useState("")
  let index = 0

  const randomSpeed = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
  }

  // use effect is useful here to set the setInterval and rendering our function just once :
  useEffect(() => {
    const timer = (textRef.current = setInterval(() => {
      setNewText(string.slice(0, index))
      index++
      //   if (index > string.length) {
      //     index = 0
      //   }
    }, randomSpeed(100, 300)))
    return () => {
      clearInterval(timer)
    }
  }, [index,string])
  return (
    <p ref={textRef} className="lg:text-4xl text-2xl">
      {newText}
    </p>
  )
}
export default TypeEffect
