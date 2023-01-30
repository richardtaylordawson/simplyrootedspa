// TODO hero image
import { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import {
  Bars3Icon,
  BookmarkSquareIcon,
  XMarkIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import Logo from "@/images/logo-reverse.png"
import Image from "next/image"

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ")
}

export default function Hero({ notFound }) {
  const navigation = [
    {
      name: "About Me",
      href: "/#about-me",
    },
    {
      name: "Services & Pricing",
      href: "/#services-and-pricing",
    },
    {
      name: "Testimonials",
      href: "/#testimonials",
    },
    {
      name: "FAQs",
      href: "/#faqs",
    },
    {
      name: "Contact Me",
      href: "/#contact-me",
    },
  ]

  const resources = [
    {
      name: "Where's My Refund?",
      description: "Check the current status of your refund.",
      href: "https://www.irs.gov/refunds",
      icon: QuestionMarkCircleIcon,
    },
    {
      name: "Organizers - New Clients",
      description:
        "If you are a new client that has not previously filed your returns with me, get prepared for your appointment by following the instructions in this document.",
      href: "/documents/tax_organizer.pdf",
      icon: BookmarkSquareIcon,
    },
    {
      name: "Organizers - Existing Clients",
      description:
        "Feel free to send me a text or email asking for the emailed link that lists pertinent forms based on prior years' returns. It's always safe to bring any documents you think you'll need - better to have it and not need it than need it and not have it!",
      icon: BookmarkSquareIcon,
    },
  ]

  return (
    <div className="relative bg-gray-50">
      <Popover
        className="relative bg-white shadow"
        style={{
          position: "fixed",
          width: "100%",
          top: "0",
          zIndex: "9999999",
        }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between py-6 md:space-x-8 lg:justify-start">
            <div className="flex items-center justify-start">
              <a href="/" style={{ marginRight: "1.5rem" }}>
                <span className="sr-only">Balanced Tax Solutions</span>
                <Image className="" src={Logo} alt="" width={75} />
              </a>
              <Popover.Group as="nav" className="hidden space-x-8 lg:flex">
                {navigation.map((current, index) => (
                  <a
                    href={current.href}
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                    key={index}
                  >
                    {current.name}
                  </a>
                ))}

                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? "text-gray-900" : "text-gray-500",
                          "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                        )}
                      >
                        <span>Tools</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? "text-gray-600" : "text-gray-400",
                            "ml-2 h-5 w-5 group-hover:text-gray-500"
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 tranpink-y-1"
                        enterTo="opacity-100 tranpink-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 tranpink-y-0"
                        leaveTo="opacity-0 tranpink-y-1"
                      >
                        <Popover.Panel
                          className="-tranpink-x-1/2 absolute left-1/2 z-10 mt-3 w-screen max-w-md transform px-2 sm:px-0"
                          style={{ left: "-180px" }}
                        >
                          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                              {resources.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                  target="_blank"
                                >
                                  <item.icon
                                    className="h-6 w-6 flex-shrink-0 text-pink-600"
                                    aria-hidden="true"
                                  />
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">
                                      {item.name}
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {item.description}
                                    </p>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </Popover.Group>
            </div>
            <div className="-my-2 -mr-2 lg:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <div className="hidden items-center justify-end lg:flex lg:w-0 lg:flex-1">
              <a
                href="https://calendly.com/kylee-22"
                className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-pink-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-pink-700"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition lg:hidden"
          >
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Image className="" src={Logo} alt="" width={75} />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="space-y-6 py-6 px-5">
                <div className="grid gap-y-4 gap-x-8">
                  {navigation.map((current, index) => (
                    <a
                      href={current.href}
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                      key={index}
                    >
                      <Popover.Button className="text-base font-medium text-gray-900 hover:text-gray-700">
                        {current.name}
                      </Popover.Button>
                    </a>
                  ))}
                </div>
              </div>
              <div className="space-y-6 py-6 px-5">
                <div className="grid gap-y-4 gap-x-8">
                  {resources.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      <item.icon
                        className="h-6 w-6 flex-shrink-0 text-pink-600"
                        aria-hidden="true"
                      />
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">
                          {item.name}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          {item.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

      <main
        className="lg:relative"
        style={{
          marginTop: "113px",
        }}
      >
        {notFound && (
          <div className="min-h-full bg-white py-16 px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
            <div className="mx-auto max-w-max">
              <main className="sm:flex">
                <p className="text-4xl font-bold tracking-tight text-pink-600 sm:text-5xl">
                  404
                </p>
                <div className="sm:ml-6">
                  <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                      Page not found
                    </h1>
                    <p className="mt-1 text-base text-gray-500">
                      Please check the URL in the address bar and try again.
                    </p>
                  </div>
                  <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                    <a
                      href="/"
                      className="inline-flex items-center rounded-md border border-transparent bg-pink-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                    >
                      Go Back Home
                    </a>
                  </div>
                </div>
              </main>
            </div>
          </div>
        )}
        {!notFound && (
          <>
            <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
              <svg
                className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
                viewBox="0 0 1155 678"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                  fillOpacity=".3"
                  d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                />
                <defs>
                  <linearGradient
                    id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                    x1="1155.49"
                    x2="-78.208"
                    y1=".177"
                    y2="474.645"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#9089FC"></stop>
                    <stop offset="1" stopColor="#FF80B5"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
              <div className="px-6 sm:px-8 lg:w-1/2 xl:pr-16">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                  <span className="block xl:inline">Simplified Taxes.</span>{" "}
                  <span className="block text-pink-600 xl:inline">
                    Affordable Prices.
                  </span>
                </h1>
                <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                  Personalized tax preparation services that fit your
                  <br />
                  individual and business needs.
                </p>
                <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="https://calendly.com/kylee-22"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-pink-600 px-8 py-3 text-base font-medium text-white hover:bg-pink-700 md:py-4 md:px-10 md:text-lg"
                    >
                      Book Appointment
                    </a>
                  </div>
                  <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                    <a
                      href="#contact-me"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-pink-600 hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
                    >
                      Contact Me
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                alt=""
              />
            </div>
          </>
        )}
      </main>
    </div>
  )
}
