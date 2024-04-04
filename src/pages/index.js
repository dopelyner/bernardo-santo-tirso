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

      <main className='relative w-full min-h-96 flex flex-col justify-center text-dark dark:text-light sm:justify-center sm:items-center'>
        <Layout className='p-0 xl:p-0 lg:p-0 sm:p-0 '>

          <div className='absolute flex right-0 -translate-x-6 p-2'>
            <ArrowHorizontal />
          </div>

          <div className='w-full h-full sm:h-fit absolute z-20 p-32 sm:p-0 bottom-0 bg-transparent/60 dark:bg-transparent/50'>
            <TitleStickText title="Bernardo Santo Tirso" className='text-light sm:scale-90' />
          </div>

          <div className='w-full flex items-center  justify-center gap-10 overflow-clip sm:overflow-x-scroll ' >
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
