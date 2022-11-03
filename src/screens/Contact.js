import React from "react"

function Contact() {
  return (
    <div className="lg:pt-24 w-full h-full flex flex-col">
      
      <div className="flex flex-wrap items-center lg:mb-20">
        {/* illustration and contact infos */}
        <div className="flex flex-col  bg-[#edf2f4] lg:p-10 lg:w-[40%] ">
        <h1 className="lg:text-5xl lg:mb-8">Contactez-nous</h1>
          <p>Email: roto@adarasarl.com</p>
          <p>Tél: +213 560 97 52 64</p>
          <p>55, Cité Ben Sallah, Oued El Alleug, (W) de Blida</p>
          <p>horaires de travail</p>
          <div className="flex justify-between">
            <img src="/images/chaise.png" alt="" className="lg:max-w-[15rem]  border" />
            <img src="/images/plants.png" alt="" className="max-h-[10rem] self-end" />
          </div>
          
        </div>
        {/* form */}
        <div className="flex flex-col items-center"></div>
      </div>
    </div>
  )
}

export default Contact
