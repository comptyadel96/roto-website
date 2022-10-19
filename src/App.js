import Navbar from "./components/Navbar"
import { FiMail, FiPhone } from "react-icons/fi"
import { ImLocation2, ImInstagram } from "react-icons/im"
import { MdOutlineFacebook } from "react-icons/md"
import SlideShow from "./components/SlideShow"
import Footer from "./components/Footer"
import Slide2 from "./components/Slide2"

function App() {
  return (
    <div className="bg-gray-100 h-full flex flex-col">
      {/* navbar */}
      <Navbar />
      {/* company infos */}
      <div className="flex items-center w-full bg-gray-800 py-1  px-5">
        <div className="flex items-center mx-3 max-w-fit">
          <FiMail className="text-white lg:text-4xl text-xl ml-2" />
          <p className="font-semibold text-lg text-white ml-1">
            roto@adarasarl.com
          </p>
        </div>
        <div className="flex items-center mx-3 max-w-fit">
          <FiPhone className="text-white lg:text-4xl text-xl ml-2" />
          <p className="font-semibold text-lg text-white ml-1">
            +213 560 97 52 64
          </p>
        </div>
        <div className="flex items-center mx-3 max-w-fit">
          <ImLocation2 className="text-white lg:text-4xl text-xl ml-2" />
          <p className="font-semibold text-lg text-white ml-1">
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
      <div className="mb-10 mt-5 bg-white relative w-full">
        {/* <SlideShow /> */}
        <Slide2 />
      </div>
      {/* body */}
      <div className="bg-white lg:w-full lg:py-10 mx-auto p-4 flex flex-col shadow-md border mb-10 relative">
        <div className=" lg:block hidden absolute top-1/2 -translate-y-1/2 left-0 w-0 h-0 border-t-[66px] border-t-transparent border-b-[74px] border-b-transparent border-l-[140px] border-l-emerald-400" />
        <div className="flex justify-center flex-wrap relative">
          <img
            src="/images/citernes.png"
            alt="citernes adara"
            className="lg:max-h-[20rem] max-h-[100%] lg:bg-inherit bg-gray-200  object-cover lg:border-r-2 border-r-green-500 lg:pr-4"
          />
          <div className=" lg:ml-[10%]">
            <h1 className="lg:text-4xl text-3xl  font-semibold border-b-2 border-b-green-500 pb-2 max-w-fit mb-3 ">
              Adara roto c'est quoi ?
            </h1>
            <p className=" font-semibold max-w-2xl text-lg text-gray-800 leading-relaxed">
              Adara roto est une entreprise spécialisée dans la vente de
              citernes alimentaires en plastique , spécialement "Polyethylene"
              <br />
              toutes nos citernes ont un nombre de 3 couches:
            </p>
            {/* couches */}
            <div className="flex mx-auto mt-5 justify-evenly">
              <div className="flex flex-col items-center  p-5">
                <p className="text-2xl text-gray-500  mb-2 rounded-lg">
                  Extérieur
                </p>
                <div className="w-20 h-11 rounded-full bg-gray-300" />
                <p className="font-semibold">Gris</p>
              </div>
              <div className="flex flex-col items-center  p-5">
                <p className="text-2xl text-gray-500  mb-2 rounded-lg">
                  Centre
                </p>
                <div className="w-20 h-11 rounded-full bg-black" />
                <p className="font-semibold">Noir</p>
              </div>
              <div className="flex flex-col items-center  p-5">
                <p className="text-2xl text-gray-500  mb-2 rounded-lg">
                  Intérieur
                </p>
                <div className="w-20 h-11 rounded-full bg-white shadow border" />
                <p className="font-semibold">Blanc</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-wrap bg-white">
        <div className="flex flex-col items-center px-3 py-1 ">
          <h2 className="font-semibold lg:text-3xl mt-5">
            {new Date().getFullYear() - 2014} années d'éxperience
          </h2>
          <p className="mt-2">
            sarl adara a fait ses débuts en l'an 2000, grace a la qualitée de
            ses produits <br />
            adara roto est devenu le leader de vente de citerne en algérie
          </p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3204.331100942432!2d2.816552515602864!3d36.57023818830957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128f0b1bbab614c9%3A0xbe107c8812ea8125!2sAdara%20sarl!5e0!3m2!1sfr!2sdz!4v1666011523280!5m2!1sfr!2sdz"
          // width="600"
          // height="450"
          style={{ border: 0 }}
          className="mx-auto my-5 lg:w-1/3 lg:h-[20rem] border-none outline-none"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="google maps adara roto"
        ></iframe>
      </div>

      <Footer />
    </div>
  )
}

export default App
