/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function Newsletter() {
  return (
    <div className="bg-white sm:py-16 sm:py-24">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-simplyrooted-500 px-6 py-24 sm:rounded-3xl sm:px-24 sm:shadow-2xl xl:py-32">
          <h2 className="font-display text-center text-3xl font-medium tracking-tight text-white lg:text-5xl">
            Get Updates & Specials Delivered to Your Inbox
          </h2>
          <form
            className="mx-auto mt-10 flex max-w-md gap-x-4"
            action="https://squareup.com/outreach/7Ec3pL/subscribe"
            method="POST"
            target="_blank"
          >
            <input type="hidden" name="embed" value="true" />
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email_address"
              type="email"
              autoComplete="email"
              required
              className="text-simplyrooted500 min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 font-medium shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Notify me
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
