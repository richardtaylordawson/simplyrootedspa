import { Container } from "@/components/Container"

const testimonials = [
  [
    {
      content:
        "Working with Balanced Tax was a fantastic experience. Kylee made doing our taxes easy and straightforward and we were able to save way more than when I had been doing it myself. The whole staff was so friendly and helpful. Can’t wait to work with them again next year! Thank you Balanced Tax!",
      author: {
        name: "Isaac Olson",
      },
    },
    {
      content:
        "Switching from doing taxes via TurboTax to doing them with Kylee was the best choice I ever made. It is so much easier year after year now and she is so much more knowledgeable about all the tax breaks and adjustments we can make to get the biggest return possible.",
      author: {
        name: "Richard Dawson",
      },
    },
  ],
  [
    {
      content:
        "I have been going to Kylee to get my taxes done for the last several years and I have been very impressed. Not only does she charge less than other people I’ve been to, she does an extremely thorough job to get you back as much money as possible. To top it all off she’s just a super cool person that you will enjoy spending time with while she saves you money. I would highly recommend going to Kylee for any tax needs. ",
      author: {
        name: "Cade Kynaston",
      },
    },
    {
      content:
        "The best service EVER. I actually look forward to having my taxes done each year by Kylee 😅",
      author: {
        name: "Sarah Hammon",
      },
    },
  ],
  [
    {
      content:
        "I worked with Kylee for 5 years she did an amazing job doing my taxes! She is honest fair and a wonderful young lady to have on your side. I highly recommend her for any of your tax needs 😊",
      author: {
        name: "Darrell Koplin",
      },
    },
    {
      content:
        "I was a huge fan of turbo tax.  Kylee saved me over $1500 vs turbo tax. The tax software balanced tax uses is far superior to turbo tax.  Add in the fact that Kylee is a seasoned tax professional, she maximizes my return and reduces my tax liability every year. I 100% recommend Balanced Tax for your individual, professional or business tax needs.",
      author: {
        name: "Dave Peterson",
      },
    },
  ],
]

function QuoteIcon(props) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-gray-100 py-20 sm:py-32"
      style={{ scrollMarginTop: "113px" }}
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Loved by my clients.
          </h2>
          <p className="mt-4 text-lg tracking-tight">
            I make it easy to get the best return possible and a fraction of the
            cost to our competitors and self serving tax software.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-pink-900/10">
                      <QuoteIcon className="absolute top-6 left-6 fill-pink-100" />
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-gray-900">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-pink-100 pt-6">
                        <div>
                          <div className="text-base text-pink-900">
                            {testimonial.author.name}
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
