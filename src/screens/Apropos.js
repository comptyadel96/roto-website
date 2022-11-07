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
          <p className="lg:mt-5 lg:text-xl text-gray-600 leading-8">
            l'entreprise "Adara roto" a été créer en 2014, soit 14 ans aprés la
            création de l'entreprise sarl adara (créer en l'an 2000), notre
            entreprise a commancer officiellement la vente de citérnes en 2015.{" "}
          </p>
          <p className="xl:text-4xl font-semibold lg:mt-5">
            Partout en algérie
          </p>
          <p className="lg:mt-5 lg:text-xl text-gray-600 leading-7">
            notre succée dans le domaine est principalement dû à la qualité
            supérieur de nos citernes 3 couches conçus pour contenir eau et
            acide.
          </p>
          <p className="xl:text-4xl font-semibold lg:mt-5">Polyvalence</p>
          <p className="lg:mt-5 lg:text-xl text-gray-600 leading-7">
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
      <div className="w-full lg:mt-20 lg:py-24 lg:p-5 bg-gray-100 mb-20">
        <p className="text-center lg:text-4xl font-semibold mb-7">
          Questions fréquemment posées
        </p>
        <div className="flex lg:flex-row flex-col flex-wrap items-center justify-evenly">
          <Faq />
          <Faq
            question="Adara fait-elle la livraison ?"
            reponse="si vous faite une commande importante, un grand nombre de citernes ou une citerne de 30.000 litres, nous vous assurerons une livraison gratuite "
          />
          <Faq
            question="Toute température ?"
            reponse="absolument, nos citérnes supportent une température de plus de 60 degrés celsius ainsi qu'une temperature relativement basse "
          />
          <Faq
            question="seulement du 3 couches ?"
            reponse="oui, adara roto ne produit que des citérnes 3 couches, vous ne pouvez donc pas faire une commande de plus ou de moins que 3 couches"
          />
          <Faq
            question="Type de liquide supporter ?"
            reponse="Notre usine produit des citérnes pour eau mais aussi pour les acides, avec les memes spécifications et les memes dimensions "
          />
        </div>
      </div>
      <div className="flex flex-col w-full bg-[#1d3557] lg:pb-16 lg:py-10 lg:mb-20">
        <p className="lg:text-3xl text-center text-white font-semibold">
          Se déplacer vers notre emplacement
        </p>
        {/* google maps */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3204.331100942432!2d2.816552515602864!3d36.57023818830957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128f0b1bbab614c9%3A0xbe107c8812ea8125!2sAdara%20sarl!5e0!3m2!1sfr!2sdz!4v1666011523280!5m2!1sfr!2sdz"
          style={{ border: 0 }}
          className=" my-5 lg:w-full lg:h-[25rem] border-none outline-none"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="google maps adara roto vente citerne algérie"
        />
        <div className="flex flex-col items-center text-white self-center">
          <p className="lg:text-xl mr-3"> Horaires d'ouverture:</p>
          <p>Du dimanche au jeudi de 8 heure à 16:30 </p>
        </div>
      </div>
    </div>
  )
}

export default Apropos
