import Navbar from "./components/Navbar"
import { FiMail, FiPhone } from "react-icons/fi"
import { ImLocation2, ImInstagram } from "react-icons/im"
import { MdOutlineFacebook } from "react-icons/md"
// import SlideShow from "./components/SlideShow"
import Footer from "./components/Footer"
import "./App.css"
import "./index.css"
import ContactUs from "./utils/ContactUs"
function App() {
  return (
    <div className="bg-white h-full flex flex-col">
      {/* navbar */}
      <Navbar />
      {/* company infos */}
      <div className="flex items-center lemonPara w-full bg-gray-800 py-1  px-5">
        <div className="flex items-center mx-3 max-w-fit">
          <FiMail className="text-white lg:text-4xl text-xl ml-2" />
          <p className=" text-lg text-white ml-1">roto@adarasarl.com</p>
        </div>
        <div className="flex items-center mx-3 max-w-fit">
          <FiPhone className="text-white lg:text-4xl text-xl ml-2" />
          <p className=" text-lg text-white ml-1">+213 560 97 52 64</p>
        </div>
        <div className="flex items-center mx-3 max-w-fit">
          <ImLocation2 className="text-white lg:text-4xl text-xl ml-2" />
          <p className=" text-lg text-white ml-1">
            55, Cité Ben Sallah, Oued El Alleug, (W) de Blida{" "}
          </p>
        </div>
        <div className="self-end flex items-center ml-auto">
          <a
            href="https://www.facebook.com/profile.php?id=100082864376144"
            target="_blank"
            rel="noreferrer"
          >
            <MdOutlineFacebook className="text-white text-3xl mx-6 cursor-pointer" />{" "}
          </a>
          <ImInstagram className="text-white text-3xl mx-6 cursor-pointer " />
        </div>
      </div>
      {/* header */}
      <div className=" flex items-center flex-wrap-reverse justify-evenly mb-10 pt-10  bg-gray-100 relative w-full">
        <div className="flex flex-col relative ">
          {/* animated bubles */}
          <div className="absolute top-1 -left-5  lg:block hidden ">
            <div className="h-3 w-3 mt-1 bg-[#00b0ff] rounded-full animate-bounce" />
            <div className="h-3 w-3 mt-1 bg-[#00b0ff] rounded-full animate-bounce" />
            <div className="h-3 w-3 mt-1 bg-[#00b0ff] rounded-full animate-bounce" />
            <div className="h-3 w-3 mt-1 bg-[#00b0ff] rounded-full animate-bounce" />
          </div>
          <p className="lg:text-3xl lemonTitle">
            Citernes <br /> qualitée premium
          </p>
          <p className="lemonTitle text-xs text-gray-500 mt-5">
            Le meilleur service de vente <br /> de citernes à eau potable
            tri-couches en Algérie
          </p>
          <div className="flex items-center  flex-wrap self-end mt-[20%]">
            <button className=" lg:text-2xl mr-2 border-none px-3 py-1 rounded-md  bg-gray-700 hover:bg-black lemonPara text-white ">
              Découvrer
            </button>
            <button className=" hvr-bounce-to-top lg:text-2xl border-none px-3 py-1 rounded-md   lemonPara ">
              Commander
            </button>
          </div>
        </div>
        <img src="/images/header.png" alt="" className="lg:max-h-[30rem]" />
      </div>
      {/* qui somme nous */}

      <div className=" flex lg:flex-nowrap flex-wrap  justify-evenly relative w-full lg:py-10 lg:my-24">
        <div className=" relative overflow-hidden">
          <div className="absolute top-0 bottom-0 right-0 left-1/3 lg:px-3 bg-[rgba(0,0,0,0.8)]">
            <p className="text-white  lemonPara text-center mt-10 lg:text-3xl border-b-2 pb-2">
              + {new Date().getFullYear() - 2014} années d'éxperience
            </p>
            <p className="text-white  lemonPara leading-10 lg:mt-6 ">
              sarl adara roto a fait ses débuts en 2014, grace a la qualitée de
              ses produits adara roto est devenu le leader de vente de citernes
              en algérie
            </p>
          </div>
          <img
            src="/images/about-adara.jpg"
            alt="acceuil sarl adara"
            // className="lg:max-h-[30rem] object-cover ml-2"
            className=" xl:max-h-[35rem] max-h-fit"
          />
        </div>

        <div className="lg:px-5 lg:py-3 lg:ml-3 flex flex-col flex-wrap bg-yellow-300 ">
          <h1 className="xl:text-4xl text-3xl lemonTitle hvr-underline-from-center pb-2 max-w-fit xl:mb-3 ">
            Adara roto c'est quoi ?
          </h1>
          <p className=" lemonPara xl:max-w-2xl max-w-xl xl:text-lg text-base text-gray-800 xl:leading-10 leading-7">
            Adara roto est une entreprise spécialisée dans la vente de citernes
            alimentaires en plastique , spécialement "Polyethylene"
            <br />
            toutes nos citernes ont un nombre de 3 couches:
          </p>
          {/* couches */}
          <div className="flex  xl:mt-5 justify-evenly lemonPara">
            <div className="flex flex-col items-center  p-5">
              <p className="xl:text-2xl text-lg text-gray-500  mb-2 rounded-lg">
                Extérieur
              </p>
              <div className="xl:w-36 xl:h-36 w-14 h-14 skew-x-6 bg-gray-300" />
              <p className="">Gris</p>
            </div>
            <div className="flex flex-col items-center  p-5">
              <p className="xl:text-2xl text-lg text-gray-500  mb-2 rounded-lg">Centre</p>
              <div className="xl:w-36 xl:h-36 w-14 h-14 bg-black" />
              <p className="">Noir</p>
            </div>
            <div className="flex flex-col items-center  p-5">
              <p className="xl:text-2xl text-lg text-gray-500  mb-2 rounded-lg">
                Intérieur
              </p>
              <div className="xl:w-36 xl:h-36 w-14 h-14 -skew-x-6 bg-white shadow border" />
              <p className="">Blanc</p>
            </div>
          </div>
        </div>
      </div>

      {/* type de citerne */}
      <div className="flex flex-col lg:my-10 relative overflow-hidden">
        <h3 className="lemonTitle text-center lg:text-4xl">Type de citerne</h3>
        <div className="absolute lg:block hidden bottom-0 bg-[#84d8ff]  h-[150%] w-[200%] z-10 water-wave" />

        <div className="flex items-center flex-wrap my-5 justify-evenly  w-full ">
          <div className="lg:px-5 lg:py-2 flex flex-col items-center rounded-2xl z-20">
            <img
              src="/images/horizontal-gris.png"
              alt=""
              className="lg:max-h-[13rem] object-cover citerne"
            />
            <p className="lemonPara text-center lg:mt-5 ">
              citerne horizontal <br /> petit format
            </p>
          </div>
          <div className="lg:px-5 lg:py-2 flex flex-col items-center rounded-2xl z-20">
            <img
              src="/images/vertical-xl-gris.png"
              alt=""
              className="lg:max-h-[13rem] object-cover citerne2"
            />
            <p className="lemonPara text-center lg:mt-5 ">
              citerne vertical <br /> grand format
            </p>
          </div>
          <div className="lg:px-5 lg:py-2 flex flex-col items-center rounded-2xl z-20">
            <img
              src="/images/vertical-s-gris.png"
              alt=""
              className="lg:max-h-[13rem] object-cover citerne"
            />
            <p className="lemonPara text-center lg:mt-5 ">
              citerne vertical <br /> petit format
            </p>
          </div>
        </div>
      </div>
      {/*nous contacter */}
      <ContactUs />
      {/* infos */}
      <div className="w-full flex flex-wrap bg-white">
        {/* google maps adara coordinate */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3204.331100942432!2d2.816552515602864!3d36.57023818830957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128f0b1bbab614c9%3A0xbe107c8812ea8125!2sAdara%20sarl!5e0!3m2!1sfr!2sdz!4v1666011523280!5m2!1sfr!2sdz"
          style={{ border: 0 }}
          className="mx-auto my-5 lg:w-1/3 lg:h-[20rem] border-none outline-none"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="google maps adara roto vente citerne algérie"
        />
      </div>

      <Footer />
    </div>
  )
}

export default App
