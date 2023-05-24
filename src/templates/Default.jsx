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
        <meta
          name="keywords"
          content="spa, at home spa, pedicure, facials, waxing"
        />
        <meta name="author" content="Richard Taylor Dawson" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Simply Rooted Spa" />
        <meta property="og:site_name" content="Simply Rooted Spa" />
        <meta itemProp="name" content="Simply Rooted Spa" />
        <meta name="twitter:title" content="Simply Rooted Spa" />
        <meta name="twitter:text:title" content="Simply Rooted Spa" />
        <meta name="twitter:image:alt" content="Simply Rooted Spa" />
        <meta
          property="og:description"
          content={description}
        />
        <meta
          itemProp="description"
          content={description}
        />
        <meta
          name="twitter:description"
          content={description}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://simplyrootedspa.com/" />
        <meta
          property="og:image"
          content="https://simplyrootedspa.com/images/social-share.jpg"
        />
        <meta
          itemProp="image"
          content="https://simplyrootedspa.com/images/social-share.jpg"
        />
        <meta
          name="twitter:image"
          content="https://simplyrootedspa.com/images/social-share.jpg"
        />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="640" />
        <meta property="og:image:height" content="320" />
        <meta name="twitter:card" content="summary_large_image" />
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
