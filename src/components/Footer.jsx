import { Facebook, Instagram } from "@/components/Icons"

const navigation = [
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
]

export const Footer = () => (
  <footer className="bg-simplyrooted-500">
    <div className="mx-auto max-w-7xl py-12 px-6 md:flex md:items-center md:justify-between lg:px-8">
      <div className="flex justify-center space-x-6 md:order-2">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-white hover:text-simplyrooted-700"
          >
            <span className="sr-only">{item.name}</span>
            <item.icon className="h-6 w-6" aria-hidden="true" />
          </a>
        ))}
      </div>
      <div className="mt-8 md:order-1 md:mt-0">
        <p className="text-center text-xl font-medium leading-5 text-white">
          &copy; {new Date().getFullYear()} Simply Rooted Spa. All rights
          reserved.
        </p>
      </div>
    </div>
  </footer>
)
