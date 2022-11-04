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

import { MessengerChat } from "react-messenger-chat-plugin"

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
    <div className=" h-full flex flex-col bg-white overflow-hidden lg:pt-20">
      <MessengerChat
        pageId="104349362317038"
        language="sv_SE"
        themeColor={"#000000"}
        bottomSpacing={300}
        loggedInGreeting="loggedInGreeting"
        loggedOutGreeting="loggedOutGreeting"
        greetingDialogDisplay={"show"}
        debugMode={true}
        onMessengerShow={() => {
          console.log("onMessengerShow")
        }}
        onMessengerHide={() => {
          console.log("onMessengerHide")
        }}
        onMessengerDialogShow={() => {
          console.log("onMessengerDialogShow")
        }}
        onMessengerDialogHide={() => {
          console.log("onMessengerDialogHide")
        }}
        onMessengerMounted={() => {
          console.log("onMessengerMounted")
        }}
        onMessengerLoad={() => {
          console.log("onMessengerLoad")
        }}
      />
      {/* company infos */}
      <div className="lg:flex hidden items-center  w-full bg-[#1d3557] py-1  px-5">
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

      <div className="flex flex-col  items-center lg:py-20 z-10 ">
        <div className="flex flex-col items-center relative">
          <h1 className="xl:text-5xl text-3xl font-semibold pb-2 max-w-fit lg:mb-3 ">
            {t("adaraCquoi")}
          </h1>
          <p className=" xl:max-w-6xl text-gray-500  max-w-sm xl:text-2xl   text-base text-center  xl:leading-[3rem] leading-7">
            {t("adaraC")}
          </p>
        </div>

        {/* illustration */}
        <motion.div
          initial={{ x: 500, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          viewport={{ once: true }}
          className="flex items-center flex-wrap mt-10 w-full justify-around lg:mt-24"
        >
          <div className="shadow-md border lg:my-2 px-4 mx-4 flex lg:flex-row lg:flex-wrap flex-col items-center py-3 rounded-xl">
            <img
              src="/images/strong-citern.png"
              alt="citern adara"
              className="object-cover lg:max-h-[10rem] "
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
          <div className="shadow-md border lg:my-2 px-4 mx-4 flex lg:flex-row lg:flex-wrap flex-col items-center pb-3 rounded-xl">
            <img
              src="/images/monnaie-citern.png"
              alt="citern adara"
              className="object-cover lg:max-h-[12rem] "
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
          <div className="shadow-md border lg:pt-2 lg:my-2 px-4 mx-4 flex lg:flex-row lg:flex-wrap flex-col items-center pb-3 rounded-xl">
            <img
              src="/images/star-citern.png"
              alt="citern adara"
              className="object-cover lg:max-h-[10rem] "
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
        initial={{ x: 500, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        viewport={{ once: true }}
        id="grad"
        className="flex flex-col lg:my-10 relative overflow-hidden lg:py-24 bg-[#edf2f4] "
      >
        <h3 className=" text-center lg:text-4xl lg:mb-16 font-semibold ">
          {t("TypesCiternes")}
        </h3>
        {/* <div className="absolute lg:block hidden bottom-0 bg-[#a4e2ff]  h-[150%] w-[120%] z-10 water-wave" /> */}

        <div className="flex items-center flex-wrap my-5 justify-evenly  w-full ">
          <div className="lg:pr-5 pl-20 lg:py-2 flex lg:mx-20 bg-white shadow-md lg:w-[34%] xl:w-1/3   h-[13rem] flex-col  rounded-2xl overflow-visible lg:p-4 relative border ">
            <img
              src="/images/horizontal.png"
              alt=""
              className="lg:max-h-[9rem] xl:max-h-[13rem] absolute lg:top-24 xl:-top-24 -left-20 object-cover citerne"
            />
            <p className="lg:ml-auto font-semibold lg:mt-2 lg:text-2xl mb-5 ">
              {t("hpf")}
            </p>
            <p className="text-center  xl:max-w-[70%] lg:max-w-[75%]  ml-auto">
              {t("hpfSub")}
            </p>
            <button className="ml-auto border-2 border-[#2d4c78] lg:px-2 rounded-xl text-[#2d4c78] hover:bg-[#2d4c78] transition-all duration-500 hover:text-white mt-auto font-semibold text-xl">
              <HashLink
                smooth
                to="/produits/#horizontal"
                scroll={(el) => scrollWithOffset(el)}
              >
                Voir le produit
              </HashLink>
            </button>
          </div>
          <div className="lg:px-5 lg:py-2 flex lg:mx-20 bg-white shadow-md lg:w-[34%] xl:w-1/3  h-[13rem] flex-col items-center rounded-2xl overflow-visible lg:p-4 relative border">
            <img
              src="/images/vertical-xl.png"
              alt=""
              className="lg:max-h-[13rem] absolute -top-14 xl:-left-12 lg:-left-16 object-cover citerne2"
            />
            <p className="lg:ml-auto font-semibold xl:mx-auto lg:mt-2 lg:text-2xl mb-5">
              {t("vgf")}
            </p>
            <p className="text-center  xl:max-w-[70%] lg:max-w-[74%] ml-auto">
              {t("vgfSub")}
            </p>
            <button className="ml-auto border-2 border-[#2d4c78] lg:px-2 rounded-xl text-[#2d4c78] hover:bg-[#2d4c78] transition-all duration-500 hover:text-white mt-auto font-semibold text-xl">
              <HashLink
                to="/produits/#vertical-g"
                smooth
                scroll={(el) => scrollWithOffset(el)}
              >
                Voir le produit{" "}
              </HashLink>
            </button>
          </div>
          <div className="lg:px-5 lg:py-2 flex lg:mx-20 bg-white shadow-md mt-20 lg:w-[34%] xl:w-1/3  h-[13rem] flex-col items-center rounded-2xl overflow-visible lg:p-4 relative border ">
            <img
              src="/images/vertical-s.png"
              alt=""
              className="lg:max-h-[17rem] absolute -top-14 -left-5 object-cover citerne"
            />
            <p className="lg:ml-auto font-semibold xl:mx-auto lg:mt-2 lg:text-2xl mb-5">
              {t("vpf")}
            </p>
            <p className="text-center xl:max-w-[70%] lg:max-w-[80%] ml-auto">
              {t("vpfSub")}
            </p>
            <button className="ml-auto border-2 border-[#2d4c78] lg:px-2 rounded-xl text-[#2d4c78] hover:bg-[#2d4c78] transition-all duration-500 hover:text-white mt-auto font-semibold text-xl">
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
        initial={{ x: -500, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.3 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-around items-center lg:my-20 relative"
      >
        <img
          src="/images/3couches.png"
          alt="3 couches citernes polytheline"
          className="xl:max-w-[30rem] lg:max-w-[25rem]"
        />

        <div className="flex flex-col items-center lg:ml-5 relative content">
          <h2 className="font-bold lg:text-5xl absolute lg:right-[25%]  lg:-top-16">
            {t("3couches")}
          </h2>
          <h2 className="font-bold lg:text-5xl absolute lg:right-[25%]  lg:-top-16 ">
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
          <p className="border border-[#2d4c78] rounded-lg lg:px-4 lg:py-2 lg:mt-10 lg:max-w-xl text-gray-500">
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
    </div>
  )
}

export default Acceuil
