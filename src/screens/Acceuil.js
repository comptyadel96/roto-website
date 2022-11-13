import { FiMail, FiPhone } from "react-icons/fi"
import { ImLocation2, ImInstagram } from "react-icons/im"
import { MdOutlineFacebook } from "react-icons/md"
import { useTranslation } from "react-i18next"
import "../App.css"
import "../index.css"
import ContactUs from "../utils/ContactUs"
import Temoignage from "../screens/Temoignage"
import { motion } from "framer-motion"
import TypeEffect from "../components/TypeEffect"

import { useNavigate } from "react-router-dom"
import { HashLink } from "react-router-hash-link"

function Acceuil() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  // scroll with offset
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset
    const yOffset = -130
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" })
  }

  return (
    <div className="h-full flex flex-col bg-white overflow-hidden lg:pt-20 overflow-x-hidden">
      {/* company infos */}
      <div className="lg:flex hidden items-center  w-full bg-[#1d3557] py-1  lg:px-5">
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
          <a
            href="https://www.instagram.com/adara_roto/"
            target="_blank"
            rel="noreferrer"
          >
            <ImInstagram className="text-white text-3xl mx-6 cursor-pointer " />
          </a>
        </div>
      </div>

      {/* header */}
      <div
        id="grad"
        className=" flex items-center flex-wrap-reverse justify-evenly pt-10 lg:pb-10 pb-5 mb-5 bg-[#edf2f4]  border-b relative w-full"
      >
        <div className="flex flex-col relative lg:items-start items-center ">
          {/* animated bubles */}
          <div className="absolute top-1 -left-5  lg:block hidden ">
            <div className="h-3 w-3 mt-1 bg-[#1d3557] rounded-full animate-bounce" />
            <div className="h-3 w-3 mt-1 bg-[#1d3557] rounded-full animate-bounce" />
            <div className="h-3 w-3 mt-1 bg-[#1d3557] rounded-full animate-bounce" />
            <div className="h-3 w-3 mt-1 bg-[#1d3557] rounded-full animate-bounce" />
          </div>

          <TypeEffect />
          <p className=" text-xl lg:max-w-md text-[#2d4c78] lg:mt-5 mt-2  max-w-md text-center ">
            {t("headerSub")}
          </p>
          <div className="flex items-center  flex-wrap lg:self-end self-center lg:mt-[20%] mt-4">
            <button
              onClick={() => navigate("/produits")}
              className=" lg:text-2xl mr-2 border-none px-3 py-1 rounded-md  bg-gray-700 hover:bg-black  text-white "
            >
              {t("découvrer")}
            </button>
            <button className=" hvr-bounce-to-top lg:text-2xl border-none px-3 py-1 rounded-md    ">
              {t("commander")}
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

      <div className="flex flex-col  items-center lg:py-20 py-10 z-10 lg:mb-0">
        <div className="flex flex-col items-center relative lg:px-0 px-4">
          <h1 className="xl:text-5xl text-2xl font-semibold pb-2 max-w-fit lg:mb-3 ">
            {t("adaraCquoi")}
          </h1>
          <p className=" xl:max-w-6xl text-gray-500  max-w-sm xl:text-2xl   text-base text-center  xl:leading-[3rem] leading-7">
            {t("adaraC")}
          </p>
        </div>

        {/* illustration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2.5 }}
          viewport={{ once: true }}
          className="flex items-center flex-wrap mt-10 w-full justify-around lg:mt-24"
        >
          <div className="lg:shadow-md lg:border my-2 px-4 mx-4 flex lg:flex-row lg:flex-wrap flex-col items-center py-3 rounded-xl">
            <img
              src="/images/strong-citern.png"
              alt="citern adara"
              className="object-cover lg:max-h-[10rem] max-h-[8rem] "
            />
            <div className=" flex flex-col items-center lg:ml-3">
              <p className="font-semibold text-xl lg:mb-3 ">
                {t("C'estCostaud")}{" "}
              </p>
              <p className="max-w-[290px] text-center text-gray-500">
                {t("cCostaudSub")}
              </p>
            </div>
          </div>
          <div className="lg:shadow-md lg:border  px-4 mx-4 flex lg:flex-row lg:flex-wrap flex-col items-center pb-3 rounded-xl">
            <img
              src="/images/monnaie-citern.png"
              alt="citern adara"
              className="object-cover lg:max-h-[12rem] max-h-[10rem] "
            />
            <div className=" flex flex-col items-center lg:ml-3">
              <p className="font-semibold text-xl lg:mb-3 ">
                {t("qualitéPrix")}{" "}
              </p>
              <p className="max-w-[270px] text-center text-gray-500">
                {t("qualitéPrixSub")}
              </p>
            </div>
          </div>
          <div className="lg:shadow-md lg:border lg:pt-2 my-2 px-4 mx-4 flex lg:flex-row lg:flex-wrap flex-col items-center pb-3 rounded-xl">
            <img
              src="/images/star-citern.png"
              alt="citern adara"
              className="object-cover lg:max-h-[10rem] max-h-[8rem] lg:mt-0 mt-2"
            />
            <div className=" flex flex-col items-center lg:ml-3">
              <p className="font-semibold text-xl lg:mb-3 ">
                {t("satisfaction")}{" "}
              </p>
              <p className="max-w-[270px] text-center text-gray-500">
                {t("subSatisfaction")}
              </p>
            </div>
          </div>
        </motion.div>
        <p className="lg:mt-10 lg:text-xl text-[#2d4c78] font-bold">
          {t("bienPlus")}
        </p>
      </div>

      {/* type de citerne */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1.5 }}
        viewport={{ once: true }}
        id="grad"
        className="flex flex-col my-10 relative overflow-hidden lg:py-24 py-10 bg-[#edf2f4] "
      >
        <h3 className=" text-center lg:text-4xl text-3xl lg:mb-16 font-semibold ">
          {t("TypesCiternes")}
        </h3>
        {/* <div className="absolute lg:block hidden bottom-0 bg-[#a4e2ff]  h-[150%] w-[120%] z-10 water-wave" /> */}

        <div className="flex items-center flex-wrap my-5 justify-evenly  w-full ">
          <div className="lg:pr-5 lg:pl-20 lg:py-2 py-5 lg:my-0 my-10 flex lg:mx-20 lg:bg-white lg:shadow-md lg:w-[34%] xl:w-1/3   lg:h-[13rem] flex-col items-center  rounded-2xl overflow-visible lg:p-4 relative lg:border ">
            <img
              src="/images/horizontal.png"
              alt=""
              className="lg:max-h-[9rem] xl:max-h-[13rem] lg:max-w-max max-w-[60%]  lg:absolute lg:top-24 xl:-top-24 lg:-left-24 xl:-left-16 object-cover citerne"
            />
            <p className="xl:ml-auto font-semibold mt-2  text-2xl lg:mb-5 mb-2  ">
              {t("hpf")}
            </p>
            <p className="text-center  xl:max-w-[70%] lg:max-w-[75%]  ml-auto">
              {t("hpfSub")}
            </p>
            <button className="lg:ml-auto border-2 max-w-fit mx-auto mt-4 border-[#2d4c78] px-2 rounded-xl text-[#2d4c78] hover:bg-[#2d4c78] transition-all duration-500 hover:text-white lg:mt-auto  font-semibold text-xl">
              <HashLink
                smooth
                to="/produits/#horizontal"
                scroll={(el) => scrollWithOffset(el)}
              >
                Voir le produit
              </HashLink>
            </button>
          </div>
          <div className="lg:px-5 lg:py-2 flex lg:mx-20 lg:bg-white lg:shadow-md lg:w-[34%] xl:w-1/3  lg:h-[13rem] flex-col items-center rounded-2xl overflow-visible lg:p-4 relative lg:border">
            <img
              src="/images/vertical-xl.png"
              alt=""
              className="lg:max-h-[13rem] max-h-[16rem] lg:absolute -top-14 xl:-left-12 lg:-left-16 object-cover citerne2"
            />
            <p className="lg:ml-auto font-semibold xl:mx-auto mt-2 text-2xl lg:mb-5 mb-2 ">
              {t("vgf")}
            </p>
            <p className="text-center  xl:max-w-[70%] lg:max-w-[74%] ml-auto">
              {t("vgfSub")}
            </p>
            <button className="lg:ml-auto border-2 border-[#2d4c78] px-2 rounded-xl text-[#2d4c78] hover:bg-[#2d4c78] transition-all duration-500 hover:text-white lg:mt-auto lg:mb-0 mb-3 mt-3  font-semibold text-xl">
              <HashLink
                to="/produits/#vertical-g"
                smooth
                scroll={(el) => scrollWithOffset(el)}
              >
                Voir le produit{" "}
              </HashLink>
            </button>
          </div>
          <div className="lg:px-5 lg:py-2 flex lg:mx-20 lg:bg-white lg:shadow-md mt-20 lg:w-[34%] xl:w-1/3  lg:h-[13rem] flex-col items-center rounded-2xl overflow-visible lg:p-4 relative lg:border ">
            <img
              src="/images/vertical-s.png"
              alt=""
              className="lg:max-h-[17rem] max-h-[15rem] lg:absolute -top-14 -left-5 object-cover citerne"
            />
            <p className="lg:ml-auto font-semibold xl:mx-auto mt-2 text-2xl mb-5">
              {t("vpf")}
            </p>
            <p className="text-center xl:max-w-[70%] lg:max-w-[80%] ml-auto">
              {t("vpfSub")}
            </p>
            <button className="lg:ml-auto border-2 border-[#2d4c78] px-2 rounded-xl text-[#2d4c78] hover:bg-[#2d4c78] transition-all duration-500 hover:text-white lg:mt-auto lg:mb-0 mb-3 mt-3  font-semibold text-xl">
              <HashLink
                to="/produits/#vertical-p"
                smooth
                scroll={(el) => scrollWithOffset(el)}
              >
                Voir le produit
              </HashLink>
            </button>
          </div>
        </div>
      </motion.div>
      {/* 3 couches */}
      <motion.div
        initial={{  opacity: 0 }}
        whileInView={{  opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-around items-center lg:my-20 relative lg:px-0 px-5"
      >
        <img
          src="/images/3couches.png"
          alt="3 couches citernes polytheline"
          className="xl:max-w-[30rem] lg:max-w-[25rem]"
        />

        <div className="flex flex-col items-center lg:ml-5 lg:mt-0 mt-10 relative content">
          <h2 className="font-bold lg:text-5xl text-3xl absolute lg:right-[25%]  lg:-top-16 -top-9">
            {t("3couches")}
          </h2>
          <h2 className="font-bold lg:text-5xl text-3xl absolute lg:right-[25%]  lg:-top-16 -top-9">
            {t("3couches")}
          </h2>
          <ul className="list-disc">
            <li className="max-w-2xl text-center lg:text-xl text-[#2d4c78] lg:mb-5">
              {t("c1")}
            </li>
            <li className="max-w-2xl text-center lg:text-xl text-[#2d4c78] mb-5">
              {t("c2")}
            </li>
            <li className="max-w-2xl text-center lg:text-xl text-[#2d4c78]">
              {t("c3")}
            </li>
          </ul>
          <p className="border border-[#2d4c78] rounded-lg lg:px-4 py-2 lg:mt-10 mt-6 text-center lg:max-w-xl text-gray-500">
            <span className="font-semibold text-[#2d4c78]">
              {t("important")}{" "}
            </span>
            {t("importantText")}
          </p>
        </div>
      </motion.div>

      {/* temoignages clients */}
      <Temoignage />
      {/*nous contacter */}
      <ContactUs />
    </div>
  )
}

export default Acceuil
