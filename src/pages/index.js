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

      <main className='flex flex-col justify-center text-dark dark:text-light sm:justify-center sm:items-center'>
        <Layout className='relative w-full min-h-fit px-0 py-0 xl:px-0 xl:py-0 lg:py-0 lg:px-0 sm:px-0 sm:py-0'>

          <div className='absolute sm:flex right-0 -translate-x-6 pt-4 hidden z-50'>
            <ArrowHorizontal />
          </div>

          <div className='w-full h-full lg:min-h-fit sm:flex sm:bottom-0 sm:h-fit absolute left-1/2 -translate-x-1/2 z-20 p-32 xl:p-16 xl:pt-40 sm:p-0 bg-transparent/60 xs:bg-transparent dark:bg-transparent/50'>
            <TitleStickText title="Bernardo Santo Tirso" className='sm:w-fit p-0 text-light sm:scale-90 xs:scale-75' />
          </div>

          <div className='w-full h-auto flex items-center justify-center sm:justify-normal gap-10 overflow-clip sm:overflow-x-scroll' >
            {homeMedia.map((item, index) => (
              <>
                <Image
                  priority
                  key={"image-" + index}
                  src={item.src}
                  width={500}
                  height={500}
                  title='Bernardo Santo Tirso'
                  alt='Bernardo Santo Tirso'
                  className='object-cover'
                />
              </>
            ))
            }
          </div>
        </Layout>

      </main >
    </>
  )
}
