import React, { useRef } from "react"
import emailjs from "@emailjs/browser"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { FiMail, FiPhone } from "react-icons/fi"
import { ImLocation2, ImClock } from "react-icons/im"
import ReCAPTCHA from "react-google-recaptcha"

function ContactUs() {
  const form = useRef(null)
  const captchaRef = useRef(null)
  const sendEmail = (e) => {
    e.preventDefault()
    console.log(captchaRef.current.getValue())
    captchaRef.current.reset()
    emailjs
      .sendForm(
        "service_jfyl0rb",
        "template_zesiuut",
        form.current,
        "nUPAVDtMin_HDW4gH"
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  const notify = () => {
    toast.success("Votre message a bien été envoyer", {
      position: toast.POSITION.BOTTOM_CENTER,
      hideProgressBar: true,
      draggable: false,
      pauseOnHover: true,
    })
  }
  const recaptchaError = () => {
    toast.warn(
      "Veuillez cocher la case 'je ne suis pas un robot' pour envoyer le message",
      {
        position: toast.POSITION.BOTTOM_CENTER,
        hideProgressBar: true,
        draggable: false,
      }
    )
  }
  return (
    <>
      <form
        onSubmit={sendEmail}
        className="w-full mx-auto  lg:mb-5 h-full relative overflow-visible lg:py-10 bg-gray-50"
        ref={form}
      >
        <ToastContainer />

        <div className="flex justify-around items-center flex-wrap  h-full flex-grow  overflow-visible z-20">
          <div className="flex flex-col justify-around border border-[#2d4c78] rounded-xl lg:py-5 lg:px-4">
            <p className="inline-flex items-center lg:my-2">
              <FiMail className="mr-2 text-3xl" /> roto@adarasarl.com
            </p>
            <p className="inline-flex items-center lg:my-2">
              <FiPhone className="mr-2 text-3xl" />
              +213 560 97 52 64
            </p>
            <p className="inline-flex items-center lg:my-2">
              <ImLocation2 className="mr-2 text-3xl" /> 55, Cité Ben Sallah,
              Oued El Alleug, (W) de Blida
            </p>
            <p className="inline-flex items-center lg:my-2">
              <ImClock className="mr-2 text-3xl" />
              Horaires d'ouverture <br />
              Du dimanche au jeudi de 8:00 heure à 16:30
            </p>
          </div>
          {/* form */}
          <div className="flex flex-col items-center h-full w-1/2">
            <p className="lg:text-3xl  pb-3 border-b-2 border-[#2d4c78] text-[#2d4c78]  max-w-fit mx-auto mt-10 mb-5">
              Contactez-nous
            </p>
            <p className="text-gray-500">
              Pour toute demande ou consultation, remplissez le formulaire
              ci-dessous
            </p>
            <input
              id="name"
              className="py-2 px-4 border-b border-[#2d4c78] w-full placeholder:text-black bg-transparent outline-none my-2"
              type="text"
              placeholder="Nom complet*"
              name="name"
              required
            />
            <input
              id="email"
              className="py-2 px-4 border-b border-[#2d4c78] w-full placeholder:text-black bg-transparent outline-none my-2"
              type="email"
              placeholder="E-mail*"
              name="email"
              required
            />
            <input
              id="phoneNumber"
              className="py-2 px-4 border-b border-[#2d4c78] w-full placeholder:text-black bg-transparent outline-none my-2"
              type={"tel"}
              placeholder="Numéro de téléphone"
              name="phoneNumber"
            />{" "}
            <input
              id="subject"
              className="py-2 px-4 border-b border-[#2d4c78] w-full placeholder:text-black bg-transparent outline-none my-2"
              type="text"
              placeholder="Sujet*"
              name="subject"
              required
            />
            <textarea
              id="message"
              placeholder="Message*"
              className=" w-full border bg-transparent border-[#2d4c78] placeholder:text-black lg:my-2  py-3 px-5 rounded-lg h-1/2 block outline-none "
              name="message"
              required
            />
            <ReCAPTCHA
              sitekey={process.env.REACT_APP_RE_CAPTCHA}
              onErrored={recaptchaError}
              ref={captchaRef}
            />
            <input
              type={"submit"}
              className=" transition-all duration-700 px-3 py-2 lg:text-xl text-[#2d4c78] font-semibold  bg-white cursor-pointer hover:bg-[#2d4c78] rounded-lg hover:text-white border-[#2d4c78] border-2 max-w-fit  my-4"
              placeholder="Envoyer"
            />
            {/* re-captcha */}
          </div>
        </div>
      </form>
      <button className="  px-4 py-2 rounded-xl mx-auto z-20" onClick={notify}>
        Notify
      </button>
    </>
  )
}

export default ContactUs
