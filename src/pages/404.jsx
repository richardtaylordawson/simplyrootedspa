import Head from "next/head"
import Script from "next/script"

import Hero from "@/components/Hero"
import Footer from "@/components/Footer"

export default function NotFound() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
      <Head>
        <title>Balanced Tax Solutions - Not Found</title>
        <meta name="description" content="Page not found" />
      </Head>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=XXXXXXX`}
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXX', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <main>
        <Hero notFound />
      </main>
      <Footer />
    </>
  )
}
