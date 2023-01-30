import Head from "next/head"
import Script from "next/script"

import Hero from "@/components/Hero"
import AboutMe from "@/components/AboutMe"
import ServicesAndPricing from "@/components/ServicesAndPricing"
import Testimonials from "@/components/Testimonials"
import Faqs from "@/components/Faqs"
import ContactMe from "@/components/ContactMe"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Head>
        <title>Balanced Tax Solutions - Tax Made Easy</title>
        <meta
          name="description"
          content="Personalized tax preparation services that fit your individual and business needs."
        />
      </Head>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=KNP85N8M2P`}
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KNP85N8M2P', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <main>
        <Hero />
        <AboutMe />
        <ServicesAndPricing />
        <Testimonials />
        <Faqs />
        <ContactMe />
      </main>
      <Footer />
    </>
  )
}
