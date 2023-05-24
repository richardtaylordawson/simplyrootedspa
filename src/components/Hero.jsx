import Image from "next/image"
import { BookAppointment } from "./Buttons/BookAppointment"
import { Facebook, Instagram } from "@/components/Icons"
import Spa from "@/images/hero.jpeg"
import GiftCards from "@/images/spa/gift-cards.jpeg"
import Pedicure from "@/images/spa/pedicure-in-progress.jpeg"
import Welcome from "@/images/spa/welcome.jpeg"

const navigation = {
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/SimplyRootedSpa",
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/simplyrootedspa/",
      icon: Instagram,
    },
  ],
}

export default function New() {
  return (
    <div className="mt-32 overflow-hidden sm:mt-40">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h1 className="font-display text-3xl font-medium tracking-tight text-gray-900 lg:text-7xl">
              Welcome to <br />
              <span className="block text-simplyrooted-500 xl:inline">
                Simply Rooted Spa
              </span>
            </h1>
            <div className="mt-10 flex items-center gap-x-6">
              <BookAppointment />
              <a
                href="#"
                className="text-lg font-semibold leading-6 text-gray-700 hover:text-gray-900"
              >
                Online Gift Cards <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="mt-10 flex justify-start space-x-10">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-simplyrooted-400 hover:text-simplyrooted-500"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-10 w-10" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <Image
                src={Spa}
                alt=""
                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <Image
                  src={GiftCards}
                  alt=""
                  className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <Image
                  src={Pedicure}
                  alt=""
                  className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <Image
                  src={Welcome}
                  alt=""
                  className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
