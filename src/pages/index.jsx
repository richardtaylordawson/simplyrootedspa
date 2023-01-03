import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Simply Rooted Spa - TODO</title>
        <meta name="description" content="TODO" />
      </Head>
      <Header />
      <main>{/* Content to go here */}</main>
      <Footer />
    </>
  )
}
