import Head from 'next/head'
import dynamic from 'next/dynamic'
import localFont from 'next/font/local'
import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect'
import AnimatedText from '@/components/AnimatedText'
import { ScrollIcon } from '@/components/Icons'
import { homePresentationVideo } from '@/constants'
import { useRef } from 'react'

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
const StickFont = localFont({ src: '../../public/fonts/Stick-Regular.ttf' })

export default function Home() {

  const videoSectionRef = useRef(null);
  const scrollToVideo = () => {
    videoSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <title>Bernardo Santo Tirso</title>
        <meta name="Bernardo Santo Tirso" content="Página Oficial" />
      </Head>

      <TransitionEffect />

      <main className='w-full min-h-screen flex items-center justify-center text-dark dark:text-light'>
        <Layout className='pt-0 p-16 xl:p-24 2xl:p-32'>

          <AnimatedText
            text="Bernardo Santo Tirso"
            className={`${StickFont.className} font-stick mb-20 xl:mb-20 2xl:mb-32 text-[150px] text-center xl:text-[150px] 2xl:text-[200px] sm:text-[80px] sm:mb-40 sm:mt-40`}
          />

          <div className='w-full mb-10 xl:mb-20 2xl:mb-32 hidden flex-col items-center justify-center cursor-pointer sm:flex md:flex xl:flex 2xl:flex'>
            <a href='#video'></a>
            <ScrollIcon onClick={scrollToVideo} />
          </div>

          <div
            id="video"
            ref={videoSectionRef}
            className='w-full flex flex-grow-0 items-center justify-center'
          >
            <ReactPlayer
              url={homePresentationVideo.videoURL}
              width={1280}
              height={720}
              controls={true}
            />
          </div>

        </Layout>
      </main>
    </>
  )
}
