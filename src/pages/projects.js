import React, { useRef } from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect'
import AnimatedText from '@/components/AnimatedText'
import { biography, imageLinks, videoLinks } from '@/constants'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { LinkArrow } from '@/components/Icons'

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const SeparatorBar = () => (
    <div className="flex justify-center items-center my-20">
        <div className="w-[200px] h-[3px] bg-dark dark:bg-light m-0"></div>
    </div>
);
const projects = () => {
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
                        <h2 className='mb-16 text-2xl text-end mr-32 xs:m-0'>by Ralph Waldo Emerson</h2>
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

                    <div className='w-full flex flex-row items-center justify-center md:flex-col'>
                        <AnimatedText
                            text="Biografia"
                            className='w-1/2 mb-16 xs:mb-6 xs:text-7xl lg:text-7xl'
                        />
                        <div className='w-full mt-32 text-xl xs:text-2xl'>
                            {biography.paragraphs.map((paragraph, index) => (
                                <li
                                    key={index}
                                    className='list-none my-4'
                                >
                                    {paragraph}
                                </li>
                            ))}
                        </div>
                    </div>

                    <SeparatorBar />

                    <div className='w-full flex flex-row mt-40 items-center justify-center md:flex-col'>
                        <AnimatedText
                            text="Momentos"
                            className='w-1/2 mb-16 xs:text-5xl'
                        />
                        <Image
                            src={imageLinks.PIC_1}
                            width={500}
                            className='rounded-lg'
                            alt='pic'
                        />
                    </div>

                </Layout>
            </main>
        </>
    )
}

export default projects