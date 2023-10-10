import Head from 'next/head'
import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect'
import ReactPlayer from 'react-player'
import { presentation } from '@/constants'
import AnimatedText from '@/components/AnimatedText'
import { Stick } from 'next/font/google'

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

      {/* <TransitionEffect /> */}

      <main className='w-full min-h-screen flex items-center text-dark dark:text-light'>
        <Layout className='pt-0 p-16 sm:pt-8'>

          <AnimatedText
            style={font.style}
            text="Bernardo Santo Tirso"
            className='mb-16 text-[200px] text-center lg:p-8 xs:text-8xl xs:p-8'
          />

          {/* <div className='w-full flex items-center justify-center md:w-[600px] sm:w-auto '>
              <ReactPlayer
                url={videoURL}
                width={1280}
                height={720}
              />
            </div> */}

        </Layout>
      </main>
    </>
  )
}
