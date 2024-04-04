import { ArrowHorizontal } from '@/components/Icons'
import Layout from '@/components/Layout'
import TitleStickText from '@/components/TitleStickText'
import TransitionEffect from '@/components/TransitionEffect'
import { homeMedia } from '@/constants'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {

  return (
    <>
      <Head>
        <title>Bernardo Santo Tirso</title>
        <meta name="Bernardo Santo Tirso" content="Página Oficial" />
      </Head>

      <TransitionEffect />

      <main className='relative flex flex-col justify-center text-dark dark:text-light sm:justify-center sm:items-center'>
        <Layout className='w-full min-h-fit p-0 px-0 py-0 xl:p-0 lg:p-0 sm:pl-0 sm:py-0'>

          <div className='absolute sm:flex right-0 -translate-x-6 pt-4 hidden z-50'>
            <ArrowHorizontal />
          </div>

          <div className='w-full h-full lg:min-h-fit sm:flex sm:bottom-0 sm:h-fit absolute left-[50%] translate-x-[-50%] z-20 p-32 xl:p-16 xl:pt-40 sm:p-0 bg-transparent/60 xs:bg-transparent dark:bg-transparent/50'>
            <TitleStickText title="Bernardo Santo Tirso" className='sm:w-fit p-0 text-light sm:scale-90 xs:scale-75' />
          </div>

          <div className='w-screen h-auto flex items-center justify-center sm:justify-normal gap-10 overflow-clip sm:overflow-x-scroll' >
            {homeMedia.map((item, index) => (
              <Image
                priority
                key={index}
                src={item.path}
                width={500}
                height={500}
                title='Bernardo Santo Tirso'
                alt='Bernardo Santo Tirso'
              />
            ))
            }
          </div>
        </Layout>
      </main>
    </>
  )
}
