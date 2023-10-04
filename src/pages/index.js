import Head from 'next/head'
import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect'
import ReactPlayer from 'react-player'
import { presentation } from '@/constants'

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

          <div className='w-full flex items-center justify-center md:w-[600px] sm:w-auto '>
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
