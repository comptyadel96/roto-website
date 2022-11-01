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
    <div className="flex flex-col items-center lg:px-4 lg:py-2 bg-white shadow-md border rounded-xl">
      <img
        src={`/images/${photo}`}
        alt="citérne algérie"
        className="max-h-[14rem]"
      />
      <p className="lg:text-2xl font-semibold bg-gray-200 lg:px-3 mt-2 rounded-lg "> {capacité} litres </p>

      <p className="lg:text-2xl">Dimensions</p>
      <p>Hauteur: {hauteur}cm </p>
      {isHorizontal ? (
        <p>Largeur: {largeur}cm</p>
      ) : (
        <p> Diamétre:{diametre}cm </p>
      )}
    </div>
  )
}

export default CiternCard
