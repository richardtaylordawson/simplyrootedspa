import Default from "@/templates/Default"
import Hero from "@/components/Hero"
import Newsletter from "@/components/Newsletter"
import Testimonials from "@/components/Testimonials"

export default function Home() {
  return (
    <Default description="Simply Rooted Spa">
      <Hero />
      <Testimonials />
      <Newsletter />
    </Default>
  )
}
