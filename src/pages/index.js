import Layout from '@/components/Layout'
import TitleStickText from '@/components/TitleStickText'
import TransitionEffect from '@/components/TransitionEffect'
import Head from 'next/head'
import Image from 'next/image'
import { useRef } from 'react'

export default function Home() {

  return (
    <>
      <Head>
        <title>Bernardo Santo Tirso</title>
        <meta name="Bernardo Santo Tirso" content="Página Oficial" />
      </Head>

      <TransitionEffect />

      <main className='w-full min-h-screen flex items-center justify-center text-dark dark:text-light sm:justify-center'>
        <Layout className='p-0'>

          <TitleStickText title="Bernardo Santo Tirso" />

          {/* <div className='w-full flex justify-center items-center'>
            <Image
              src={"../../images/bernardosantotirso.png"}
              alt='Bernardo Santo Tirso'
              width={500}
              height={500}
            />
          </div> */}

        </Layout>
      </main>
    </>
  )
}
