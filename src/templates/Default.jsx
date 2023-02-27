import Head from "next/head"
import Script from "next/script"

import Banner from "@/components/Banner"
import Header from "@/components/Header"
import Newsletter from "@/components/Newsletter"
import Footer from "@/components/Footer"

export default function Default({ title, description, children }) {
  return (
    <>
      <Head>
        <title>Simply Rooted Spa{title && ` - ${title}`}</title>
        <meta name="description" content={description} />
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
      {/* <Banner /> */}
      <Header />
      <main>
        {children}
        {/* <Newsletter /> */}
      </main>
      <Footer />
    </>
  )
}