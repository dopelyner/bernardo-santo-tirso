import { FloatingDock } from '@/components/FloatingDock'
import TitleStickText from '@/components/TitleStickText'
import TransitionEffect from '@/components/TransitionEffect'
import { dockerMenu, homeMedia } from '@/constants'
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

          <FloatingDock items={dockerMenu} desktopClassName={"flex justify-center w-full absolute z-20 bottom-20 bg-transparent"} />

          <div className='w-screen h-screen flex flex-col justify-center text-center gap-10 items-center bg-transparent/60 dark:bg-transparent/50 absolute z-5'>
            <TitleStickText title="Bernardo Santo Tirso" className='text-light' />
            <p className="text-3xl text-light">
              Luz • Câmera • Ação
            </p>
          </div>

          <div className='w-screen h-screen flex items-center justify-center sm:flex-col'>
            {homeMedia.map((item, index) => (
              <div key={"image-" + index} className='w-screen h-screen sm:h-80'>
                <Image
                  priority
                  src={item.src}
                  width={900}
                  height={500}
                  title='Bernardo Santo Tirso'
                  alt={"image-" + index}
                  className='object-cover h-full sm:gap-0 s '
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}