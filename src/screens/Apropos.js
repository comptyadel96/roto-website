import React from "react"

function Apropos() {
  return (
    <div className="lg:pt-24">
      <div className="flex flex-wrap justify-around w-full">
        <img src="/images/about.jpg" alt="" className="lg:max-w-[50%] object-cover" />
        <p className="max-w-[40%]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit sint vel, saepe accusantium, molestiae repellat nobis
          optio voluptas iste eaque nesciunt nulla? Amet possimus adipisci vitae
          id consequuntur sunt a.
        </p>
      </div>
      {/* todo faq with background image and maps + image gallery */}
    </div>
  )
}

export default Apropos
