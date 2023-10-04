import Head from 'next/head'
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import { Montserrat, Roboto_Flex } from "next/font/google"
import { useRouter } from 'next/router'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
})

const roboto = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto"
})

export default function App({ Component, pageProps }) {
  const router = useRouter()
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
        <Navbar />
        <AnimatePresence mode='wait'>
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  )
}
