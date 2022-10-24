import Navbar from "./components/Navbar"
import { FiMail, FiPhone } from "react-icons/fi"
import { ImLocation2, ImInstagram } from "react-icons/im"
import { MdOutlineFacebook } from "react-icons/md"
// import SlideShow from "./components/SlideShow"
import Footer from "./components/Footer"
import "./App.css"
import "./index.css"
import ContactUs from "./utils/ContactUs"
import Temoignage from "./screens/Temoignage"
function App() {
  return (
    <div className=" h-full flex flex-col bg-white">
      {/* navbar */}
      <Navbar />
      {/* company infos */}
      <div className="flex items-center  w-full bg-gray-800 py-1  px-5">
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
      <div className=" flex items-center flex-wrap-reverse justify-evenly pt-10 lg:pb-10 bg-gray-50 border-b relative w-full">
        <div className="flex flex-col relative ">
          {/* animated bubles */}
          <div className="absolute top-1 -left-5  lg:block hidden ">
            <div className="h-3 w-3 mt-1 bg-[#00b0ff] rounded-full animate-bounce" />
            <div className="h-3 w-3 mt-1 bg-[#00b0ff] rounded-full animate-bounce" />
            <div className="h-3 w-3 mt-1 bg-[#00b0ff] rounded-full animate-bounce" />
            <div className="h-3 w-3 mt-1 bg-[#00b0ff] rounded-full animate-bounce" />
          </div>
          <p className="lg:text-4xl ">
            Citernes <br /> qualitée premium
          </p>
          <p className=" text-base text-gray-500 mt-5">
            Le meilleur service de vente <br /> de citernes à eau potable
            tri-couches en Algérie
          </p>
          <div className="flex items-center  flex-wrap self-end mt-[20%]">
            <button className=" lg:text-2xl mr-2 border-none px-3 py-1 rounded-md  bg-gray-700 hover:bg-black  text-white ">
              Découvrer
            </button>
            <button className=" hvr-bounce-to-top lg:text-2xl border-none px-3 py-1 rounded-md    ">
              Commander
            </button>
          </div>
        </div>
        <img
          src="/images/header.png"
          alt=""
          className="lg:max-h-[30rem] z-10"
        />
      </div>
      {/* qui somme nous */}

      <div className="flex flex-col  items-center lg:py-20 z-10 ">
        <h1 className="xl:text-5xl text-3xl font-semibold pb-2 max-w-fit lg:mb-3 ">
          Adara roto c'est quoi ?
        </h1>
        <p className=" xl:max-w-3xl  max-w-sm xl:text-2xl   text-base  xl:leading-10 leading-7">
          Adara roto est une entreprise spécialisée dans la vente de citernes
          alimentaires en plastique , spécialement "Polyethylene", elle a fait
          ses débuts officielement en 2014 gràce à la qualitée exeptionelle de
          ses produits sarl adara est devenu le leader dans le domaine de vente
          des citernes en algérie
        </p>
        <div className="flex items-center flex-wrap mt-10">
          <div className="border-2 border-black w-52 h-52 mx-4"></div>
          <div className="border-2 border-black w-52 h-52 mx-4"></div>
          <div className="border-2 border-black w-52 h-52 mx-4"></div>
        </div>
      </div>
      {/* temoignages clients */}

      <Temoignage />
      {/* type de citerne */}
      <div className="flex flex-col lg:my-10 relative overflow-hidden lg:py-24 bg-gray-50 ">
        <h3 className=" text-center lg:text-4xl lg:mb-16 font-semibold ">
          Types de citernes
        </h3>
        {/* <div className="absolute lg:block hidden bottom-0 bg-[#a4e2ff]  h-[150%] w-[120%] z-10 water-wave" /> */}

        <div className="flex items-center flex-wrap my-5 justify-evenly  w-full ">
          <div className="lg:pr-5 pl-20 lg:py-2 flex lg:mx-20 bg-white shadow-md lg:w-[34%] xl:w-1/3  h-[13rem] flex-col  rounded-2xl overflow-visible lg:p-4 relative border ">
            <img
              src="/images/horizontal.png"
              alt=""
              className="lg:max-h-[9rem] xl:max-h-[13rem] absolute lg:top-24 xl:-top-24 -left-20 object-cover citerne"
            />
            <p className="lg:ml-auto font-semibold lg:mt-2 lg:text-2xl mb-5 ">
              Horizontale petit format
            </p>
            <p className="text-center  xl:max-w-[70%] ml-auto">
              idéal pour une utilisation dans votre domicile <br />
              capacité de 700 à 3000 litres
            </p>
            <p className="ml-auto text-[#403233] mt-auto font-semibold text-xl">
              à partir de 18500 Da
            </p>
          </div>
          <div className="lg:px-5 lg:py-2 flex lg:mx-20 bg-white shadow-md lg:w-[34%] xl:w-1/3  h-[13rem] flex-col items-center rounded-2xl overflow-visible lg:p-4 relative border">
            <img
              src="/images/vertical-xl.png"
              alt=""
              className="lg:max-h-[13rem] absolute -top-14 -left-12 object-cover citerne2"
            />
            <p className="lg:ml-auto font-semibold xl:mx-auto lg:mt-2 lg:text-2xl mb-5">
              Vertical grand format
            </p>
            <p className="text-center  xl:max-w-[70%] ml-auto">
              Spécialement conçu pour une utilisation fréquente et a grande
              quantité capacité de 5000 à 30.000 litres
            </p>
            <p className="ml-auto text-[#403233] mt-auto font-semibold text-xl">
              à partir de 81.000 Da
            </p>
          </div>
          <div className="lg:px-5 lg:py-2 flex lg:mx-20 bg-white shadow-md mt-20 lg:w-[34%] xl:w-1/3  h-[13rem] flex-col items-center rounded-2xl overflow-visible lg:p-4 relative border ">
            <img
              src="/images/vertical-s.png"
              alt=""
              className="lg:max-h-[17rem] absolute -top-14 -left-5 object-cover citerne"
            />
            <p className="lg:ml-auto font-semibold xl:mx-auto lg:mt-2 lg:text-2xl mb-5">
              Vertical petit format
            </p>
            <p className="text-center xl:max-w-[70%] ml-auto">
              Citerne polyvalente avec différente capacitée de stockage, de 500
              à 2000 litres
            </p>
            <p className="ml-auto text-[#403233] mt-auto font-semibold text-xl">
              à partir de 14500 Da
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
