import AnimatedText from '@/components/AnimatedText'
import { LinkArrow } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'

const moments = () => {
    return (
        <>
            <Head>
                <title>Bernardo Santo Tirso | Momentos</title>
                <meta name="Bernardo Santo Tirso" content='Momentos...' />
            </Head>

            {/* <TransitionEffect /> */}

            <main className='w-full mb-16 flex flex-col items-center min-h-screen justify-center overflow-hidden dark:text-light'>
                <Layout className='pt-16'>

                        <AnimatedText
                            text="Momentos"
                            className='lg:p-8 xs:text-6xl xs:p-8 normal-case'
                        />

                </Layout>
            </main>
        </>
    )
}

export default moments