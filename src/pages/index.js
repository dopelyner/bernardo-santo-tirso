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

      <main className='w-full min-h-96 flex  justify-center text-dark dark:text-light sm:justify-center'>
        <Layout className='pt-0'>

          <TitleStickText title="Bernardo Santo Tirso" className='mt-16' />

        </Layout>
      </main>
    </>
  )
}
