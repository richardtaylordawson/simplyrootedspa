import { Disclosure } from "@headlessui/react"
import {
  Bars3Icon,
  XMarkIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline"

import Image from "next/image"
import Logo from "@/images/logos/madi.jpeg"

export default function Header() {
  return (
    <Disclosure
      as="nav"
      className="bg-white shadow"
      style={{
        backgroundColor: "#fff",
        // boxShadow: "0px 3px 5px #ddd",
        position: "fixed",
        top: "0px",
        width: "100%",
        zIndex: "9999999",
      }}
    >
      {({ open }) => (
        <>
          <div
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
            style={{ padding: "16px" }}
          >
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-simplyrooted-400 hover:bg-gray-100 hover:text-simplyrooted-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-simplyrooted-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-shrink-0 items-center">
                  <a href="/">
                    <Image className="block h-16 w-auto" src={Logo} alt="" />
                  </a>
                </div>
                <div
                  className="hidden md:ml-4 md:flex md:space-x-8 lg:ml-12"
                  style={{ marginTop: "8px" }}
                >
                  {/* Current: "border-simplyrooted-500 text-simplyrooted-400-900", Default: "border-transparent text-simplyrooted-400 hover:border-gray-300 hover:text-simplyrooted-400-700" */}
                  <a
                    href="/services"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-xl font-medium text-simplyrooted-400 hover:text-simplyrooted-900"
                  >
                    Services
                  </a>
                  <a
                    href="/specials"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-xl font-medium text-simplyrooted-400 hover:text-simplyrooted-900"
                  >
                    Specials
                  </a>
                  <a
                    href="/documents/menu.pdf"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-xl font-medium text-simplyrooted-400 hover:text-simplyrooted-900"
                  >
                    Menu
                  </a>
                  <a
                    href="/gift-cards"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-xl font-medium text-simplyrooted-400 hover:text-simplyrooted-900"
                  >
                    Gift Cards
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <button
                    type="button"
                    className="relative inline-flex items-center rounded-md border border-transparent bg-simplyrooted-600 px-4 py-2 text-xl font-medium text-simplyrooted-400 shadow-sm hover:bg-simplyrooted-700 focus:outline-none focus:ring-2 focus:ring-simplyrooted-500 focus:ring-offset-2"
                  >
                    <CalendarDaysIcon
                      className="mr-2 h-5 w-5 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span>
                      Book <span className="hidden md:inline">Appointment</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 pt-2 pb-3">
              {/* Current: "bg-simplyrooted-50 border-simplyrooted-500 text-simplyrooted-700", Default: "border-transparent text-simplyrooted-400 hover:bg-gray-50 hover:border-gray-300 hover:text-simplyrooted-400-700" */}
              <Disclosure.Button
                as="a"
                href="/services"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-xl font-medium text-simplyrooted-400 hover:border-gray-300 hover:bg-gray-50 hover:text-simplyrooted-700 sm:pl-5 sm:pr-6"
              >
                Services
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/specials"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-xl font-medium text-simplyrooted-400 hover:border-gray-300 hover:bg-gray-50 hover:text-simplyrooted-700 sm:pl-5 sm:pr-6"
              >
                Specials
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/documents/menu.pdf"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-xl font-medium text-simplyrooted-400 hover:border-gray-300 hover:bg-gray-50 hover:text-simplyrooted-700 sm:pl-5 sm:pr-6"
              >
                Menu
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/gift-cards"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-xl font-medium text-simplyrooted-400 hover:border-gray-300 hover:bg-gray-50 hover:text-simplyrooted-700 sm:pl-5 sm:pr-6"
              >
                Gift Cards
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
