import { ScrollIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import TitleStickText from '@/components/TitleStickText'
import TransitionEffect from '@/components/TransitionEffect'
import { videoLinks } from '@/constants'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRef } from 'react'

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

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

          <TitleStickText title="Bernardo Santo Tirso"/>

          <div className='w-full mb-10 xl:mb-20 2xl:mb-32 hidden flex-col items-center justify-center cursor-pointer sm:flex md:flex xl:flex 2xl:flex'>
            <a href='#video'></a>
            <ScrollIcon onClick={scrollToVideo} />
          </div>

          <div
            id="video"
            ref={videoSectionRef}
            className=' lg:w-max-screen flex flex-grow-0 items-center justify-center'
          >
            <ReactPlayer
              url={videoLinks.URL_1}
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
