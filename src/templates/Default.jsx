import Head from "next/head"
import Script from "next/script"

import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"

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
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  )
}
