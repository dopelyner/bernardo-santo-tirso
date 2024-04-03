import AnimatedText from '@/components/AnimatedText'
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

          <div className='w-full h-full absolute flex z-20 pt-32 items-start sm:items-center bg-transparent/60 dark:bg-transparent/50'>
            <TitleStickText title="Bernardo Santo Tirso" className='text-light' />
          </div>

          <div className='w-full flex items-center justify-center gap-10 overflow-clip sm:block'>
            {homeMedia.map((item, index) => (
              <Image
                key={index}
                priority
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
