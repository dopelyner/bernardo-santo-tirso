import { FloatingDock } from '@/components/FloatingDock'
import Footer from '@/components/Footer'
import { dockerMenu } from '@/constants'
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import localFont from 'next/font/local'
import Head from 'next/head'
import { useRouter } from 'next/router'
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"


const EconomicaFont = localFont({ src: '../../public/fonts/Economica-Regular.ttf' })

export default function App({ Component, pageProps }) {
  const router = useRouter()
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${EconomicaFont.className} bg-light dark:bg-dark w-full min-h-screen`}>
        {/* <Navbar /> */}
        <FloatingDock items={dockerMenu} desktopClassName={"flex justify-center w-full absolute z-20 bottom-20 bg-transparent"} />

        <AnimatePresence mode='wait'>
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  )
}
