import Layout from '@/components/Layout'
import TitleStickText from '@/components/TitleStickText'
import TransitionEffect from '@/components/TransitionEffect'
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

      <main className='relative w-full min-h-96 flex justify-center text-dark dark:text-light sm:justify-center'>
        <Layout className='pb-0 xl:pb-0 lg:pb-0 sm:pb-0'>

          <div className='w-full flex flex-col justify-end items-center xl:p-0'>
            <TitleStickText title="Bernardo Santo Tirso" className='pb-28' />

            <Image
              priority
              title='Bernardo Santo Tirso'
              src={"../../images/bernardosantotirso.png"}
              alt='Bernardo Santo Tirso'
              width={600}
              height={600}
            />

          </div>
        </Layout>
      </main>
    </>
  )
}
