import Image from "next/image"
import Kylee from "@/images/kylee.png"

export default function AboutMe() {
  return (
    <div
      id="about-me"
      className="overflow-hidden bg-white py-24 sm:py-32"
      style={{ scrollMarginTop: "113px" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <Image
            className="mx-auto w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            src={Kylee}
            alt=""
            style={{ width: "70%" }}
          />
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-lg font-semibold leading-8 tracking-tight text-pink-600">
                About Me
              </h2>
              <p className="mb-4 mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Kylee Peterson
              </p>
              <div className="mx-auto max-w-prose text-base lg:max-w-none">
                <p className="text-lg text-gray-500">
                  Hi, I’m Kylee! I’ve been doing taxes since 2017 and I LOVE
                  what I do! I especially enjoy interacting with my clients to
                  help them have the best tax preparation experience, while
                  making sure we maximize refunds or reduce tax liabilities to
                  keep every hard earned dollar in their pockets.
                </p>
              </div>
              <div className="prose prose-pink mx-auto mt-5 text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
                <p className="text-lg text-gray-500">
                  I started Balanced Tax Solutions to create a space where
                  professional tax help is affordable and accessible for
                  everyone.
                </p>
              </div>
              <div className="prose prose-pink mx-auto mt-5 text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
                <p className="text-lg text-gray-500">
                  Taxes can be complicated and confusing. It’s always my goal to
                  take the stress out of tax season and simplify your tax
                  experience to make it as painless and pleasant as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
