import { ArrowHorizontal } from '@/components/Icons'
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

      <main className='text-dark dark:text-light'>
        <div className='relative w-full p-0'>

          <div className='absolute right-0 -translate-x-6 pt-4 hidden sm:flex z-6'>
            <ArrowHorizontal />
          </div>

          <div className='w-full h-full flex bottom-0 sm:h-fit bg-transparent/60 sm:bg-transparent dark:sm:bg-transparent dark:bg-transparent/50 absolute z-5'>
            <TitleStickText title="Bernardo Santo Tirso" className='text-light sm:scale-75' />
          </div>

          <div className='w-full h-auto flex items-center justify-center sm:justify-start gap-10 overflow-x-hidden sm:overflow-x-auto'>
            {homeMedia.map((item, index) => (
              <div key={"image-" + index} className='flex-shrink-0 w-fit sm:w-screen'>
                <Image
                  priority
                  src={item.src}
                  width={500}
                  height={500}
                  title='Bernardo Santo Tirso'
                  alt='Bernardo Santo Tirso'
                  className='object-cover'
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}