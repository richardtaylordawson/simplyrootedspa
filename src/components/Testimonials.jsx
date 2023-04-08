export default function Testimonials() {
  return (
    <section>
      <div className="mx-auto max-w-7xl md:grid md:grid-cols-2 md:px-6 lg:px-8">
        <div className="px-6 py-12 md:flex md:flex-col md:border-r md:border-simplyrooted-100 md:py-16 md:pl-0 md:pr-10 lg:pr-16">
          <blockquote className="mt-6 md:flex md:flex-grow md:flex-col">
            <div className="relative text-lg font-medium text-simplyrooted-500 md:flex-grow">
              <svg
                className="absolute left-0 top-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-simplyrooted-300"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="relative">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                expedita voluptas culpa sapiente alias molestiae. Numquam
                corrupti in laborum sed rerum et corporis.
              </p>
            </div>
            <footer className="mt-8">
              <div className="flex items-start">
                <div className="text-base font-medium text-simplyrooted-500">
                  Someone Else
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
        <div className="border-t-2 border-simplyrooted-100 px-6 py-12 md:border-l md:border-t-0 md:py-16 md:pl-10 md:pr-0 lg:pl-16">
          <blockquote className="mt-6 md:flex md:flex-grow md:flex-col">
            <div className="relative text-lg font-medium text-simplyrooted-500 md:flex-grow">
              <svg
                className="absolute left-0 top-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-simplyrooted-300"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="relative">
                I recently went to a high end spa in Las Vegas to get a facial
                and it wasn't nearly the type of facial you can get at Simply
                Rooted!
              </p>
            </div>
            <footer className="mt-8">
              <div className="flex items-start">
                <div className="text-base font-medium text-simplyrooted-500">
                  Noelle Stephenson
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
