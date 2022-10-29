import React, { useRef } from "react"
import emailjs from "@emailjs/browser"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { FiMail, FiPhone } from "react-icons/fi"
import { ImLocation2, ImInstagram, ImClock } from "react-icons/im"
function ContactUs() {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()

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

          // toast("Message envoyer avec succées!", {
          //   position: "bottom-right",
          //   autoClose: 5000,
          //   hideProgressBar: true,
          //   closeOnClick: true,
          //   pauseOnHover: true,
          //   draggable: false,
          //   className: "submit-feedback success",
          //   toastId: "notifyToast",
          // })
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
    })
  }

  return (
    <>
      <form
        onSubmit={sendEmail}
        className="w-full mx-auto bg-white lg:mb-10 h-full relative overflow-visible lg:py-20"
        ref={form}
      >
        <ToastContainer />

        <div className="flex justify-around items-center flex-wrap  h-full flex-grow  overflow-visible">
          <div className="flex flex-col  justify-around border lg:py-5 lg:px-4">
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
              <ImClock className="mr-2 text-3xl"/>
              Heure d'ouverture <br />
              Du dimanche au jeudi de 8:00 heure à 16:30
            </p>
          </div>
          <div className="flex flex-col items-center h-full w-1/2">
            <p className="lg:text-3xl  pb-3 border-b-2   max-w-fit mx-auto mt-10 mb-5">
              Nous contacter
            </p>
            <input
              className="py-2 px-4 border w-full outline-none my-2  rounded-lg"
              type="text"
              placeholder="Nom complet*"
              name="name"
              required
            />
            <input
              className="py-2 px-4 border w-full outline-none my-2  rounded-lg"
              type="email"
              placeholder="E-mail*"
              name="email"
              required
            />
            <input
              className="py-2 px-4 border w-full outline-none my-2  rounded-lg"
              type={"tel"}
              placeholder="Numéro de téléphone"
              name="phoneNumber"
            />{" "}
            <input
              className="py-2 px-4 border w-full outline-none my-2  rounded-lg"
              type="text"
              placeholder="Sujet*"
              name="subject"
              required
            />
            <textarea
              placeholder="Message*"
              className=" w-full border  py-3 px-5 rounded-lg h-1/2 block outline-none "
              name="message"
              required
            />
            <input
              type={"submit"}
              className=" transition-all duration-700 px-3 py-2 lg:text-xl text-[#2d4c78] font-semibold  bg-white cursor-pointer hover:bg-[#2d4c78] rounded-lg hover:text-white border-[#2d4c78] border-2 max-w-fit  my-4"
              placeholder="Envoyer"
            />
          </div>
        </div>
      </form>
      <button className="mt-10  px-4 py-2 rounded-xl mx-auto" onClick={notify}>
        Notify
      </button>
    </>
  )
}

export default ContactUs
