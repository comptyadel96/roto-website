import React from "react"

function CiternCard({
  photo = "horizontal.png",
  hauteur,
  largeur,
  capacité,
  isHorizontal = false,
  diametre,
}) {
  return (
    <div className="flex flex-col items-center  lg:px-4 lg:py-2 lg:bg-white lg:shadow-md lg:border rounded-xl overflow-visible">
      <img
        src={`/images/${photo}`}
        alt="citérne algérie"
        className="max-h-[14rem] hover:scale-[1.1] transition-all duration-500"
      />
      <p className="lg:text-2xl font-semibold bg-gray-200 px-3 mt-2 rounded-lg ">
        {capacité} litres
      </p>

      <p className="lg:text-2xl lg:text-black text-white">Dimensions</p>
      <p className="lg:text-black text-white">Hauteur: {hauteur}cm </p>
      {isHorizontal ? (
        <p className="lg:text-black text-white">Largeur: {largeur}cm</p>
      ) : (
        <p className="lg:text-black text-white"> Diamétre:{diametre}cm </p>
      )}
    </div>
  )
}

export default CiternCard
