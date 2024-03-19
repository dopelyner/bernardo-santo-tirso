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
        <Layout className='pb-0'>

          <div className='w-full flex items-end justify-center'>
            <TitleStickText title="Bernardo Santo Tirso" className='pb-28 ' />

            {/* BERNIE ON THE RIGHT SIDE OF TITLE */}
            <div className='w-full flex '>
              <Image
                title='Bernardo Santo Tirso'
                src={"../../images/bernardosantotirso.png"}
                alt='Bernardo Santo Tirso'
                width={600}
                height={600}
              />
            </div>

          </div>
        </Layout>
      </main>
    </>
  )
}
