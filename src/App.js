import Navbar from "./components/Navbar"
import { FiMail, FiPhone } from "react-icons/fi"
import { ImLocation2, ImInstagram } from "react-icons/im"
import { MdOutlineFacebook } from "react-icons/md"
import SlideShow from "./components/SlideShow"
import Footer from "./components/Footer"

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
      <div className="mb-10 bg-white relative w-full">
        <SlideShow />
      </div>
      {/* body */}
      <div className="bg-white lg:w-full lg:py-10 mx-auto p-4 flex flex-col shadow-md border mb-10 relative">
        <div className=" lg:block hidden absolute top-1/2 -translate-y-1/2 left-0 w-0 h-0 border-t-[66px] border-t-transparent border-b-[74px] border-b-transparent border-l-[140px] border-l-emerald-400" />
        <div className="flex justify-center flex-wrap relative">
          <img
            src="/images/citernes.png"
            alt="citernes adara"
            className="lg:max-h-60 max-h-[100%] lg:bg-inherit bg-gray-200  object-cover lg:border-r-2 border-r-green-500 lg:pr-4"
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
      <Footer/>
    </div>
  )
}

export default App
