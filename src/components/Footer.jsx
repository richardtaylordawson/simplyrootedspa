import { Facebook, Instagram } from "@/components/Icons"

const navigation = {
  main: [
    { name: "Menu", href: "/documents/menu.pdf", target: "" },
    {
      name: "Gift Cards",
      href: "https://squareup.com/gift/9HXF0XNKEJTQ0/order",
      target: "_blank",
    },
    {
      name: "Privacy Policy",
      href: "/privacy-policy",
    },
  ],
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

export const Footer = () => {
  return (
    <footer className="bg-simplyrooted-500">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-16 sm:py-12 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a
                href={item.href}
                className="text-lg font-medium leading-6 text-simplyrooted-900 hover:text-simplyrooted-950"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-simplyrooted-900 hover:text-simplyrooted-950"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-10 w-10" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-lg font-medium leading-10 text-simplyrooted-900">
          &copy; {new Date().getFullYear()} Simply Rooted Spa. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}
