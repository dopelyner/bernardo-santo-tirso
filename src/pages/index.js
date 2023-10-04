import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import TransitionEffect from '@/components/TransitionEffect'

export default function Home() {

  return (
    <>
      <Head>
        <title>Bernardo Santo Tirso</title>
        <meta name="Bernardo Santo Tirso" content="Página Oficial" />
      </Head>

      {/* <TransitionEffect /> */}

      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 p-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <AnimatedText
              text="Home"
              className='mb-16 lg:p-8 xs:text-7xl xs:p-8'
            />
          </div>
        </Layout>

      </main>
    </>
  )
}
