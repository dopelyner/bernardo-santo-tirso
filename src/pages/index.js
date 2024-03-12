import Layout from '@/components/Layout'
import TitleStickText from '@/components/TitleStickText'
import TransitionEffect from '@/components/TransitionEffect'
import Head from 'next/head'

export default function Home() {

  return (
    <>
      <Head>
        <title>Bernardo Santo Tirso</title>
        <meta name="Bernardo Santo Tirso" content="Página Oficial" />
      </Head>

      <TransitionEffect />

      <main className='relative w-full min-h-96 flex justify-center text-dark dark:text-light sm:justify-center'>
        <Layout className='pt-0'>

          <div aria-hidden className='absolute inset-1/3 rotate-45 -z-10 h-80 rounded-full 
          bg-gradient-to-b dark:from-dark to-light dark:to-darkBlue blur-3xl mx-auto scale-125 opacity-75' />

          <TitleStickText title="Bernardo Santo Tirso" className='mt-16' />

        </Layout>
      </main>
    </>
  )
}
