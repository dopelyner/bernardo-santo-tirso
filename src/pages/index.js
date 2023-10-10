import Head from 'next/head'
import ReactPlayer from 'react-player'
import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect'
import AnimatedText from '@/components/AnimatedText'
import { Stick } from 'next/font/google'
import { DownArrow } from '@/components/Icons'
import { presentation } from '@/constants'

const font = Stick({
  subsets: ["latin"],
  weight: ["400"]
})

export default function Home() {

  const { videoURL } = presentation[0]

  return (
    <>
      <Head>
        <title>Bernardo Santo Tirso</title>
        <meta name="Bernardo Santo Tirso" content="Página Oficial" />
      </Head>

      <TransitionEffect />

      <main className='w-full min-h-screen flex items-center text-dark dark:text-light'>
        <Layout className='pt-0 p-16 sm:pt-8'>

          <AnimatedText
            style={font.style}
            text="Bernardo Santo Tirso"
            className='mb-60 text-[200px] text-center lg:p-8 lg:text-9xl sm:text-6xl xs:text-6xl xs:p-8 xs:mb-40'
          />

          <div className='w-full flex flex-col items-center justify-center '>
            <h2>check this out</h2>
            <DownArrow />
          </div>

          <div className='w-full mt-4 flex items-center justify-center md:w-[600px] sm:w-auto '>
            <ReactPlayer
              url={videoURL}
              width={1280}
              height={720}
            />
          </div>

        </Layout>
      </main>
    </>
  )
}
