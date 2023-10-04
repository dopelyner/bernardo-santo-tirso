import React, { useRef } from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect'
import AnimatedText from '@/components/AnimatedText'

const works = () => {
    return (
        <>
            <Head>
                <title>Bernardo Santo Tirso | Trabalhos</title>
                <meta name="Bernardo Santo Tirso" content='Trabalhos...' />
            </Head>

            {/* <TransitionEffect /> */}

            <main className='w-full mb-16 flex flex-col items-center min-h-screen justify-center overflow-hidden dark:text-light'>
                <Layout className='pt-16'>

                    <AnimatedText
                        text="Trabalhos"
                        className='mb-16 lg:p-8 xs:text-7xl xs:p-8'
                    />


                </Layout>
            </main>
        </>
    )
}

export default works