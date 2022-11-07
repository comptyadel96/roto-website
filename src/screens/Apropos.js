import React from "react"
import Faq from "../utils/Faq"
function Apropos() {
  return (
    <div className="lg:pt-24">
      <div className="flex flex-wrap justify-around w-full">
        <img
          src="/images/about.jpg"
          alt=""
          className="lg:max-w-[50%] object-cover"
        />
        <div className="flex flex-col max-w-[40%] xl:px-5 xl:py-2">
          <p className="xl:text-4xl font-semibold">
            Historique de l'entreprise
          </p>
          <p className="lg:mt-5 lg:text-xl leading-8">
            l'entreprise "Adara roto" a été créer en 2014, soit 14 ans aprés la
            création de l'entreprise sarl adara (créer en l'an 2000), notre
            entreprise a commancer officiellement la vente de citérnes en 2015.{" "}
            <br />
          </p>
          <p className="xl:text-4xl font-semibold lg:mt-5">
            Partout en algérie
          </p>
          <p className="lg:mt-5 lg:text-xl leading-7">
            notre succée dans le domaine est principalement dû à la qualité
            supérieur de nos citernes 3 couches conçus pour contenir eau et
            acide
          </p>
          <p className="xl:text-4xl font-semibold lg:mt-5">Polyvalence</p>
          <p className="lg:mt-5 lg:text-xl leading-7">
            l'entreprise sarl adara, et spécialisé dans la vente de citernes
            mais aussi pour la vente de matériels de plomberie et de tuyauterie
            PPRC (Polypropylène Random Copolymère). Son objectif est d’apporter
            une contribution pour pallier l’insuffisance des ressources
            hydriques en mettant sur le marché un nouveau type de produit
            d’étanchéité garanti et qui, grâce à ses caractéristiques chimiques
            et mécaniques, offre un double avantage par sa résistance aux
            températures extrêmes et par une absence totale de réaction au
            contact des agents corrosifs.
          </p>
        </div>
      </div>
      {/* todo faq with background image and maps + image gallery */}
      <div className="flex flex-col items-center  w-full lg:mt-20">
        <p className="text-center lg:text-3xl font-semibold">
          Questions fréquemment posées
        </p>
        <div className="flex flex-wrap items-center"></div>
        <Faq />
      </div>
    </div>
  )
}

export default Apropos
