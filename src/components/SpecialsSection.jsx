import Image from "next/image"
import Spa from "@/images/hero.jpeg"
import PedicureStation from "@/images/spa/pedicure-station.jpeg"
import Products from "@/images/spa/products.jpeg"
import BambooSideTable from "@/images/spa/bamboo-side-table.jpeg"

export default function SpecialsSection() {
  return (
    <div className="overflow-hidden bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <div className="hidden sm:flex">
              <div className="text-md relative mb-8 rounded-full py-1 px-3 leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Spring is here! Limited time specials.{" "}
                <a
                  href="/specials"
                  className="whitespace-nowrap font-semibold text-simplyrooted-600"
                >
                  <span className="absolute inset-0" aria-hidden="true" />
                  View now {`->`}
                </a>
              </div>
            </div>
            <h1 className="font-display text-7xl font-medium tracking-tight text-gray-900">
              <span className="block text-simplyrooted-600 xl:inline">
                Simply Rooted Spa
              </span>
            </h1>
            <p className="font-regular text-md mt-6">
              At Simply Rooted Spa, we believe that simplicity and quality go
              hand in hand. Everything we do is rooted in a commitment to
              excellence. Come see why we're simply the best at what we do. Book
              your appointment today and experience the difference for yourself.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="text-md rounded-md bg-simplyrooted-600 px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-simplyrooted-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-simplyrooted-600"
              >
                Book Appointment
              </a>
              <a
                href="#"
                className="text-lg font-semibold leading-6 text-gray-900"
              >
                Services <span aria-hidden="true">→</span>
              </a>
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
                  src={PedicureStation}
                  alt=""
                  className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <Image
                  src={Products}
                  alt=""
                  className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <Image
                  src={BambooSideTable}
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
