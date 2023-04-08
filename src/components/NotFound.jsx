export default function NotFound() {
  return (
    <main className="grid min-h-full place-items-center bg-white py-24 px-6 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-3xl font-semibold text-simplyrooted-600">404</p>
        <h1 className="mt-4 text-9xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Page Not Found
        </h1>
        <p className="mt-6 text-xl leading-7">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/"
            className="rounded-md bg-simplyrooted-600 px-3.5 py-2.5 text-xl font-medium text-white shadow-sm hover:bg-simplyrooted-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-simplyrooted-600"
          >
            Go Back Home
          </a>
        </div>
      </div>
    </main>
  )
}
