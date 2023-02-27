import { Disclosure } from "@headlessui/react"
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline"

const faqs = [
  {
    id: 1,
    question: "How can I schedule an appointment?",
    answer:
      'You can either <a href="#contact-me" class="text-simplyrooted-800 hover:text-simplyrooted-600">contact me</a> below, or text <a href="tel:801-332-9177" class="text-simplyrooted-800 hover:text-simplyrooted-600">801-332-9177</a> to set up an in person or virtual appointment',
  },
  {
    id: 2,
    question: "What kinds of appointments do you offer?",
    answer:
      "We can meet in person at my home office in Syracuse, Utah or we can do a virtual appointment using Google Meet",
  },
  {
    id: 3,
    question:
      "What does a tax appointment with Balanced Tax Solutions look like?",
    answer:
      "We work around the client and their preferences. If you prefer to meet in person and bring all of your documents to get it done at one time, you can usually plan on spending less than an hour or so for tax preparation and future planning. If you prefer to drop documents off and come back later or even send them digitally, I have a secure portal where you can upload documents and answer questions. I also use this secure portal if you prefer to have everything uploaded a few days before we set up a virtual meeting where we can then review the return and make sure we maximize deductions and answer any questions.",
  },
  {
    id: 4,
    question: "What do I need for my appointment?",
    answer:
      "If you are a new client that has not previously filed your returns with me, please fill out the <a class='text-simplyrooted-800 hover:text-simplyrooted-600' href='/documents/tax_organizer.pdf'>following</a>. For existing clients, feel free to send me a text or email asking for the emailed link that lists pertinent forms based on prior years' returns. It's always safe to bring any documents you think you'll need - better to have it and not need it than need it and not have it!",
  },
  {
    id: 5,
    question: "Where is my refund?",
    answer:
      'You can check the status of your refund by <a class="text-simplyrooted-800 hover:text-simplyrooted-600" target="_blank" href="https://www.irs.gov/refunds">visiting the IRS</a>',
  },
]

export default function Faqs() {
  return (
    <div id="faqs" className="bg-white" style={{ scrollMarginTop: "113px" }}>
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-24 lg:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p
                        className="text-base leading-7 text-gray-600"
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                      ></p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
