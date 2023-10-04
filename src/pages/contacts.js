import React, { useRef } from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect'
import AnimatedText from '@/components/AnimatedText'

const contacts = () => {

    return (
        <>
            <Head>
                <title>Bernardo Santo Tirso | Contatos</title>
                <meta name="Bernardo Santo Tirso" content='Contatos...' />
            </Head>

            {/* <TransitionEffect /> */}

            <main className='w-full mb-16 min-h-screen flex flex-col items-center justify-center overflow-hidden dark:text-light'>
                <Layout className='pt-16'>

                    <AnimatedText
                        text="Contatos"
                        className='mb-16 lg:p-8 xs:text-7xl xs:p-8'
                    />


                </Layout>
            </main >
        </>
    )
}

export default contacts