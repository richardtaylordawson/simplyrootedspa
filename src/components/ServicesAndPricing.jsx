// TODO detail checklists for packages
import { CheckIcon } from "@heroicons/react/20/solid"

const tiers = [
  {
    name: "Personal<br/>&nbsp",
    price: "75 - 200",
    includedFeatures: [
      "Price varies depending on which forms are required",
      "W-2's, investment 1099's, child tax credits, earned income credits, itemized deductions",
    ],
  },
  {
    name: "Sole Proprietor<br/>(Schedule C)",
    price: "150-275",
    includedFeatures: [
      "Includes all items listed under the personal return",
      "Full schedule C for sole proprietor/single member LLC business return including maximizing deductions and tax strategy planning",
    ],
  },
  {
    name: "Partnership<br/>(Multimember LLC)",
    price: 300,
    includedFeatures: [
      "1065 partnership tax return including maximizing deductions and tax strategy planning",
      "K-1 preparation for each partner",
    ],
  },
  {
    name: "S-Corp<br/>&nbsp",
    price: 350,
    includedFeatures: [
      "1120S corporation tax return including maximizing deductions and tax strategy planning ",
      "K-1 preparation for each shareholder",
    ],
  },
]

export default function ServicesAndPricing() {
  return (
    <div
      id="services-and-pricing"
      className="bg-pink-600 text-white"
      style={{ scrollMarginTop: "113px" }}
    >
      <div className="mx-auto max-w-7xl py-24 px-6 lg:px-8">
        <div className="sm:align-center sm:flex sm:flex-col">
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-center">
            Services & Pricing
          </h1>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white shadow-sm"
            >
              <div className="p-6">
                <h2
                  className="text-lg font-medium leading-6 text-gray-900"
                  dangerouslySetInnerHTML={{ __html: tier.name }}
                ></h2>
                <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-bold tracking-tight text-pink-900">
                    ${tier.price}
                  </span>{" "}
                </p>
              </div>
              <div className="px-6 pt-6 pb-8">
                <h3 className="text-sm font-medium text-gray-900">
                  What's included
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {tier.includedFeatures.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <CheckIcon
                        className="h-5 w-5 flex-shrink-0 text-pink-700"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
