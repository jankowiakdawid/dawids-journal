import Head from "next/head"

import "../styles/global.css"

import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Dawid's Journal</title>
      </Head>
      <Header />
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}
