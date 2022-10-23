import React, { useRef } from "react"
import emailjs from "@emailjs/browser"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

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
        className="flex flex-col bg-gray-100 w-full mx-auto lg:my-10 h-full  lg:py-10 relative overflow-hidden"
        ref={form}
      >
        <ToastContainer />

        <p className="  lg:text-3xl  pb-3 border-b-2  max-w-fit mx-auto">
          Nous contacter
        </p>
        <div className="flex  justify-around flex-wrap lg:mt-5 h-full z-20">
          <img
            src="/images/plants.png"
            alt="plants"
            className="lg:block max-h-[20rem] hidden  "
          />

          <div className="flex flex-col items-center h-full  w-[25%] ">
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
            />
            <input
              type={"submit"}
              className=" transition-all duration-700 px-3 py-2 lg:text-xl lg:ml-[30%] bg-white cursor-pointer hover:bg-[#000000] rounded-lg hover:text-white border-black border-2 max-w-fit  my-4"
              placeholder="Envoyer"
            />
          </div>
          <div className="w-[30%] ml-5">
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
