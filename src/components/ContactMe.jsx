import { useState } from "react"
import {
  EnvelopeIcon,
  PhoneIcon,
  CheckIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline"
import {
  useNetlifyForm,
  NetlifyFormProvider,
  NetlifyFormComponent,
  Honeypot,
} from "react-netlify-forms"
import { useFormik } from "formik"
import * as Yup from "yup"
import MaskedInput from "react-text-mask"
import Modal from "./Modal"

export default function ContactMe() {
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [showErrorModal, setShowErrorModal] = useState(false)

  const phoneNumberMask = [
    "(",
    /[1-9]/,
    /\d/,
    /\d/,
    ")",
    " ",
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ]

  const phoneRegExp = /^\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    phone: Yup.string()
      .required("Phone is required")
      .matches(phoneRegExp, "Phone is not valid"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  })

  const netlify = useNetlifyForm({
    name: "Contact Me",
    action: "/thanks",
    honeypotName: "bot-field",
    onSuccess: () => {
      setShowSuccessModal(true)
    },
    onError: () => {
      setShowErrorModal(true)
    },
  })
  const { handleSubmit, handleChange, handleBlur, touched, errors, values } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      },
      validationSchema,
      onSubmit: (values, { resetForm }) => {
        netlify.handleSubmit(null, values)
        resetForm({ values: "" })
      },
    })

  return (
    <>
      <Modal
        heading="Success!"
        message="I will respond as quickly as possible."
        showModal={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        icon={
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
          </div>
        }
      />
      <Modal
        heading="Error!"
        message="Please try again later."
        showModal={showErrorModal}
        onClose={() => setShowErrorModal(false)}
        icon={
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
            <ExclamationTriangleIcon
              className="h-6 w-6 text-red-600"
              aria-hidden="true"
            />
          </div>
        }
      />
      <div
        id="contact-me"
        className="bg-gray-100"
        style={{ scrollMarginTop: "113px" }}
      >
        <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8">
          <div className="relative bg-white shadow-xl">
            <h2 className="sr-only">Contact Me</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Contact information */}
              <div className="relative overflow-hidden bg-pink-700 py-10 px-6 sm:px-10 xl:p-12">
                <div
                  className="pointer-events-none absolute inset-0 sm:hidden"
                  aria-hidden="true"
                >
                  <svg
                    className="absolute inset-0 h-full w-full"
                    width={343}
                    height={388}
                    viewBox="0 0 343 388"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                      fill="url(#linear1)"
                      fillOpacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear1"
                        x1="254.553"
                        y1="107.554"
                        x2="961.66"
                        y2="814.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#fff" />
                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div
                  className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 sm:block lg:hidden"
                  aria-hidden="true"
                >
                  <svg
                    className="absolute inset-0 h-full w-full"
                    width={359}
                    height={339}
                    viewBox="0 0 359 339"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                      fill="url(#linear2)"
                      fillOpacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear2"
                        x1="192.553"
                        y1="28.553"
                        x2="899.66"
                        y2="735.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#fff" />
                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div
                  className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 lg:block"
                  aria-hidden="true"
                >
                  <svg
                    className="absolute inset-0 h-full w-full"
                    width={160}
                    height={678}
                    viewBox="0 0 160 678"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                      fill="url(#linear3)"
                      fillOpacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear3"
                        x1="192.553"
                        y1="325.553"
                        x2="899.66"
                        y2="1032.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#fff" />
                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-white">
                  Contact information
                </h3>
                <dl className="mt-8 space-y-6">
                  <dt>
                    <span className="sr-only">Phone number</span>
                  </dt>
                  <dd className="flex text-base text-white">
                    <PhoneIcon
                      className="h-6 w-6 flex-shrink-0 text-pink-200"
                      aria-hidden="true"
                    />
                    <span className="ml-3">
                      <a href="tel:8013329177">+1 (801) 332-9177</a>
                    </span>
                  </dd>
                  <dt>
                    <span className="sr-only">Email</span>
                  </dt>
                  <dd className="flex text-base text-white">
                    <EnvelopeIcon
                      className="h-6 w-6 flex-shrink-0 text-pink-200"
                      aria-hidden="true"
                    />
                    <span className="ml-3">
                      <a href="mailto:kylee@balancedtaxutah.com">
                        kylee@balancedtaxutah.com
                      </a>
                    </span>
                  </dd>
                </dl>
                <ul role="list" className="mt-8 flex space-x-8">
                  <li>
                    <a
                      className="text-pink-200 hover:text-pink-100"
                      href="https://www.facebook.com/profile.php?id=100089468934018&mibextid=LQQJ4d"
                      target="_blank"
                    >
                      <span className="sr-only">Facebook</span>
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        aria-hidden="true"
                      >
                        <path
                          d="M22.258 1H2.242C1.556 1 1 1.556 1 2.242v20.016c0 .686.556 1.242 1.242 1.242h10.776v-8.713h-2.932V11.39h2.932V8.887c0-2.906 1.775-4.489 4.367-4.489 1.242 0 2.31.093 2.62.134v3.037l-1.797.001c-1.41 0-1.683.67-1.683 1.653v2.168h3.362l-.438 3.396h-2.924V23.5h5.733c.686 0 1.242-.556 1.242-1.242V2.242C23.5 1.556 22.944 1 22.258 1"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-pink-200 hover:text-pink-100"
                      href="http://instagram.com/balancedtax"
                    >
                      <span className="sr-only">Instagram</span>
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          fill="currentColor"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact form */}
              <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                <h3 className="text-lg font-medium text-gray-900">
                  Send me a message
                </h3>
                <NetlifyFormProvider {...netlify}>
                  <NetlifyFormComponent onSubmit={handleSubmit}>
                    <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                      <Honeypot />
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-gray-900"
                        >
                          First name <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            autoComplete="given-name"
                            className={`block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-pink-500 focus:ring-pink-500 ${
                              touched.firstName &&
                              errors.firstName &&
                              "border-red-500"
                            }`}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.firstName}
                          />
                          {touched.firstName && errors.firstName ? (
                            <p className="mt-1 text-xs text-red-500">
                              {errors.firstName}
                            </p>
                          ) : null}
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-gray-900"
                        >
                          Last name <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            autoComplete="family-name"
                            className={`block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-pink-500 focus:ring-pink-500 ${
                              touched.lastName &&
                              errors.lastName &&
                              "border-red-500"
                            }`}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.lastName}
                          />
                          {touched.lastName && errors.lastName ? (
                            <p className="mt-1 text-xs text-red-500">
                              {errors.lastName}
                            </p>
                          ) : null}
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-900"
                        >
                          Email <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-1">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            className={`block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-pink-500 focus:ring-pink-500 ${
                              touched.email && errors.email && "border-red-500"
                            }`}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                          />
                          {touched.email && errors.email ? (
                            <p className="mt-1 text-xs text-red-500">
                              {errors.email}
                            </p>
                          ) : null}
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-900"
                          >
                            Phone <span className="text-red-500">*</span>
                          </label>
                        </div>
                        <div className="mt-1">
                          <MaskedInput
                            type="text"
                            name="phone"
                            id="phone"
                            autoComplete="tel"
                            className={`block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-pink-500 focus:ring-pink-500 ${
                              touched.phone && errors.phone && "border-red-500"
                            }`}
                            aria-describedby="phone"
                            mask={phoneNumberMask}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.phone}
                          />
                          {touched.phone && errors.phone ? (
                            <p className="mt-1 text-xs text-red-500">
                              {errors.phone}
                            </p>
                          ) : null}
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-gray-900"
                        >
                          Subject <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="subject"
                            id="subject"
                            className={`block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-pink-500 focus:ring-pink-500 ${
                              touched.subject &&
                              errors.subject &&
                              "border-red-500"
                            }`}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.subject}
                          />
                          {touched.subject && errors.subject ? (
                            <p className="mt-1 text-xs text-red-500">
                              {errors.subject}
                            </p>
                          ) : null}
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <div className="flex justify-between">
                          <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-900"
                          >
                            Message <span className="text-red-500">*</span>
                          </label>
                        </div>
                        <div className="mt-1">
                          <textarea
                            id="message"
                            name="message"
                            rows={4}
                            className={`block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-pink-500 focus:ring-pink-500 ${
                              touched.message &&
                              errors.message &&
                              "border-red-500"
                            }`}
                            aria-describedby="message"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.message}
                          />
                          {touched.message && errors.message ? (
                            <p className="mt-1 text-xs text-red-500">
                              {errors.message}
                            </p>
                          ) : null}
                        </div>
                      </div>
                      <div className="sm:col-span-2 sm:flex sm:justify-end">
                        <button
                          type="submit"
                          className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-pink-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 sm:w-auto"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </NetlifyFormComponent>
                </NetlifyFormProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
