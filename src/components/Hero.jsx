import Image from "next/image"
import Spa from "@/images/hero.jpeg"

/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { CameraIcon } from "@heroicons/react/20/solid"

export default function Example() {
  return (
    <div className="overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl py-16 px-6 lg:px-8">
        <div className="absolute top-0 bottom-0 left-3/4 hidden w-screen bg-gray-50 lg:block" />
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:col-start-2 lg:row-start-1">
            <svg
              className="absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
              />
            </svg>
            <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
              <figure>
                <div className="aspect-w-7 aspect-h-7">
                  <Image
                    src={Spa}
                    className="rounded-lg object-cover object-center"
                    alt="Whitney leaning against a railing on a downtown street"
                  />
                </div>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="px-6 lg:col-span-7 lg:px-0 xl:col-span-6">
              <div className="mx-auto max-w-2xl lg:mx-0">
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
                <h1 className="font-display text-9xl font-medium tracking-tight text-gray-900">
                  <span className="block xl:inline">Simply the Best.</span>{" "}
                  <br />
                  <span className="block text-simplyrooted-600 xl:inline">
                    Rooted in Quality.
                  </span>
                </h1>
                <p className="font-regular text-md mt-6">
                  At Simply Rooted Spa, we believe that simplicity and quality
                  go hand in hand. Everything we do is rooted in a commitment to
                  excellence. Come see why we're simply the best at what we do.
                  Book your appointment today and experience the difference for
                  yourself.
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
