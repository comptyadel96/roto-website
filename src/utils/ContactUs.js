import React, { useRef } from "react"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { FiMail, FiPhone } from "react-icons/fi"
import { ImLocation2, ImClock } from "react-icons/im"
import ReCAPTCHA from "react-google-recaptcha"
import { useTranslation } from "react-i18next"
import axios from "axios"
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"

function ContactUs() {
  const { t } = useTranslation()

  const captchaRef = useRef(null)

  // validation schema
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(5, "votre nom doit contenir aumoins 5 lettres")
      .max(100, "votre nom ne doit pas dépasser les 100 lettres")
      .required("Veuiller saisir votre nom svp"),

    email: Yup.string()
      .email("email invalide")
      .min(10, "l'email doit comporter aumoins 10 lettres")
      .max(100, "l'email ne peut pas dépasser les 100 caractéres")
      .required("veuillez saisir votre e-mail"),
    phoneNumber: Yup.string()
      .min(10, "veuillez saisir un numéro de téléphone valide")
      .max(
        21,
        "vous pouvez envoyer que 2 numéros de téléphone séparer par un '/' ou '-' "
      ),
    subject: Yup.string()
      .min(4, "le sujet de comporter aumoins 4 lettres")
      .max(100, "le sujet ne peut pas dépasser 100 lettres")
      .required("veuiller spécifier un sujet pour votre message"),
    message: Yup.string()
      .min(10, "votre message doit comporter aumoins 10 lettres")
      .max(3000, "votre message ne peut pas dépasser 5000 lettres")
      .required(
        "vous nous pouvez pas envoyer un message vide, veuillez remplire le champ message"
      ),
  })

  const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  }

  return (
    <div className="w-full justify-around flex items-center flex-wrap  lg:mb-24 h-full relative overflow-visible lg:py-10 bg-gray-50">
      <ToastContainer />
      {/* infos */}
      <div className="flex flex-col justify-around border border-[#2d4c78] rounded-xl lg:py-5 py-3 px-2 lg:px-4">
        <p className="inline-flex items-center my-2">
          <FiMail className="mr-2 text-3xl" /> roto@adarasarl.com
        </p>
        <p className="inline-flex items-center my-2">
          <FiPhone className="mr-2 text-3xl" />
          +213 560 97 52 64
        </p>
        <p className="inline-flex items-center my-2">
          <ImLocation2 className="mr-2 text-3xl" /> {t("adresse")}
        </p>
        <p className="inline-flex items-center my-2">
          <ImClock className="mr-2 text-3xl" />
          {t("horairesOuverture")} <br />
          {t("horairesOuvertureSub")}
        </p>
      </div>
      {/* form */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        // onReset={() => window.location.reload(true)}
        onSubmit={async (values) => {
          try {
            let token = captchaRef.current.getValue()
            captchaRef.current.reset()
            var data = {
              service_id: "service_jfyl0rb",
              template_id: "template_zesiuut",
              user_id: "nUPAVDtMin_HDW4gH",
              template_params: {
                ...values,
                "g-recaptcha-response": token,
              },
            }

            await axios.post(
              "https://api.emailjs.com/api/v1.0/email/send",
              data
            )
            toast.success("Votre message a bien été envoyer", {
              position: toast.POSITION.BOTTOM_CENTER,
              hideProgressBar: true,
              draggable: false,
              pauseOnHover: true,
            })
          } catch (error) {
            if (
              error.response &&
              error.response.data ===
                "reCAPTCHA: The g-recaptcha-response parameter not found"
            ) {
              toast.warn(
                "Veuillez cocher la case je ne suis pas un robot afin de pouvoir envoyer le message",
                {
                  position: toast.POSITION.BOTTOM_CENTER,
                  hideProgressBar: true,
                  draggable: false,
                }
              )
            } else if (
              error.message.slice(0, 41) ===
              "reCAPTCHA client element has been removed"
            ) {
              return window.location.reload(true)
            }
          }
        }}
      >
        {({ handleReset }) => (
          <Form className="flex flex-col items-center h-full lg:w-[50%] ">
            <p className="lg:text-3xl text-xl lg:pb-3 pb-1 border-b-2 border-[#2d4c78] text-[#2d4c78]  max-w-fit mx-auto mt-10 mb-5">
              {t("contactUs")}
            </p>
            <p className="text-gray-500 text-center">{t("contactUsSub")}</p>
            <Field
              className="py-2 px-4 border-b border-[#2d4c78] w-full placeholder:text-black bg-transparent outline-none my-2"
              type="text"
              placeholder={t("nomComplet")}
              name="name"
            />
            <ErrorMessage
              name="name"
              render={(msg) => <div className="text-red-500">{msg}</div>}
            />
            <Field
              className="py-2 px-4 border-b border-[#2d4c78] w-full placeholder:text-black bg-transparent outline-none my-2"
              type="email"
              placeholder={t("email")}
              name="email"
            />
            <ErrorMessage
              render={(msg) => <div className="text-red-500">{msg}</div>}
              name="email"
            />
            <Field
              className="py-2 px-4 border-b border-[#2d4c78] w-full placeholder:text-black bg-transparent outline-none my-2"
              placeholder={t("téléphone")}
              name="phoneNumber"
            />
            <ErrorMessage
              render={(msg) => <div className="text-red-500">{msg}</div>}
              name="phoneNumber"
            />
            <Field
              className="py-2 px-4 border-b border-[#2d4c78] w-full placeholder:text-black bg-transparent outline-none my-2"
              placeholder={t("sujet")}
              name="subject"
            />
            <ErrorMessage
              render={(msg) => <div className="text-red-500">{msg}</div>}
              name="subject"
            />
            <Field
              placeholder={t("message")}
              className=" lg:w-full w-[90%] min-h-[8rem]  my-3 border bg-transparent border-[#2d4c78] placeholder:text-black lg:my-2  py-3 px-5 rounded-lg h-1/2 block outline-none "
              name="message"
              as="textarea"
            />
            <ErrorMessage
              name="message"
              render={(msg) => <div className="text-red-500 mb-2">{msg}</div>}
            />
            <ReCAPTCHA
              sitekey={process.env.REACT_APP_RE_CAPTCHA}
              onErrored={handleReset}
              ref={captchaRef}
              onExpired={() => captchaRef.current.reset()}
            />
            <button
              type="submit"
              className="transition-all duration-700 px-3 py-2 lg:text-xl text-[#2d4c78] font-semibold  bg-white cursor-pointer hover:bg-[#2d4c78] rounded-lg hover:text-white border-[#2d4c78] border-2 max-w-fit  my-4"
              // onClick={() => {
              //   handleReset()
              // }}
            >
              {t("envoyer")}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default ContactUs
