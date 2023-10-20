import React, { useRef } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect'
import AnimatedText from '@/components/AnimatedText'
import SeparatorBar from '@/components/SeparatorBar'
import { videoLinks } from '@/constants'

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const Projects = () => {
    return (
        <>
            <Head>
                <title>Bernardo Santo Tirso | Projetos</title>
                <meta name="Bernardo Santo Tirso" content='Projetos...' />
            </Head>

            {/* <TransitionEffect /> */}

            <main className='w-full mb-16 flex flex-col items-center min-h-screen justify-center overflow-hidden dark:text-light'>
                <Layout className='pt-16'>

                    <div className='w-full flex flex-col'>
                        <AnimatedText
                            text="“In art, the hand can never execute anything higher than the heart can imagine.”"
                            className='lg:p-8 xs:text-6xl xs:p-8 normal-case italic'
                        />
                        <h2 className='mb-16 text-2xl text-end mr-32 xs:m-0'>Ralph Waldo Emerson</h2>
                    </div>

                    <SeparatorBar />

                    <div
                        id="video2"
                        className='w-full flex flex-grow-0 items-center justify-center'
                    >
                        <ReactPlayer
                            url={videoLinks.URL_2}
                            width={1280}
                            height={720}
                            controls={true}
                        />
                    </div>

                    <SeparatorBar />

                    <div className='flex flex-col items-center justify-center'>
                        <div className='flex'>
                            <AnimatedText
                                text="Ator ( Teatro & Cinema)"
                                className='w-full mb-32 xs:text-5xl lg:text-center'
                            />
                        </div>
                        <div className='flex'>
                            <AnimatedText
                                text="Designer de Luz"
                                className='w-full mb-32 xs:text-5xl lg:text-center'
                            />
                        </div>
                        <div className='flex'>
                            <AnimatedText
                                text="Fotógrafo"
                                className='w-full mb-32 xs:text-5xl lg:text-center'
                            />
                        </div>
                    </div>

                </Layout>
            </main>
        </>
    )
}

export default Projects