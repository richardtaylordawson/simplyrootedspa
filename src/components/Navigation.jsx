import { useState } from "react"
import { Dialog } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import SimplyRootedSpaLogo from "@/images/logos/brown-white-background.jpeg"
import { BookAppointment } from "./Buttons/BookAppointment"

const navigation = [
  { name: "Menu", href: "/documents/menu.pdf", target: "" },
  {
    name: "Gift Cards",
    href: "https://squareup.com/gift/9HXF0XNKEJTQ0/order",
    target: "_blank",
  },
]

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full border-b-2 border-simplyrooted-100 bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex flex-1">
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.target}
                className="text-lg font-medium leading-6 text-simplyrooted-600"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
        <a href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Simply Rooted Spa</span>
          <Image
            className="h-16 w-auto"
            src={SimplyRootedSpaLogo}
            alt="simply rooted spa logo"
          />
        </a>
        <div className="flex flex-1 justify-end">
          <BookAppointment />
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-white px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-1">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Simply Rooted Spa</span>
              <img
                className="h-8 w-auto"
                src={SimplyRootedSpaLogo}
                alt="simply rooted spa logo"
              />
            </a>
            <div className="flex flex-1 justify-end">
              <BookAppointment />
            </div>
          </div>
          <div className="mt-6 space-y-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.target}
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                {item.name}
              </a>
            ))}
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}