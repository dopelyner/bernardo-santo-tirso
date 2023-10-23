import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import SeparatorBar from '@/components/SeparatorBar'
import { biographyText, imageLinks, quotes } from '@/constants'
import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import Modal from 'react-modal';

const Biography = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalImageSrc, setModalImageSrc] = useState(null);

    const openModal = (imageSrc) => {
        setModalImageSrc(imageSrc);
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalImageSrc(null);
        setModalIsOpen(false);
    }

    return (
        <>
            <Head>
                <title>Bernardo Santo Tirso | Biografia</title>
                <meta name="Bernardo Santo Tirso" content='Biografia...' />
            </Head>

            {/* <TransitionEffect /> */}

            <main className='w-full mb-16 flex flex-col items-center min-h-screen justify-center overflow-hidden dark:text-light'>
                <Layout className='pt-16'>

                    <div className='w-full flex flex-col lg:p-8 xs:text-6xl xs:p-8'>
                        <AnimatedText
                            text={`“` + quotes.quote1.quote1_1}
                            className='xs:text-5xl xl:text-7xl lg:text-6xl xs:mr-12 xs:p-4 normal-case italic'
                        />
                        <AnimatedText
                            text={quotes.quote1.quote1_2}
                            className='xs:text-5xl xl:text-7xl lg:text-6xl xs:mr-12 xs:p-4 normal-case italic'
                        />
                        <AnimatedText
                            text={quotes.quote1.quote1_3 + `”`}
                            className='xs:text-5xl xl:text-7xl lg:text-6xl xs:mr-12 xs:p-4 normal-case italic'
                        />
                        <h2 className='mb-32 text-2xl text-end mr-32 xs:m-0 xs:mb-32'>{quotes.author} 1/3</h2>
                    </div>

                    <SeparatorBar />

                    <div className='w-full flex flex-row items-center justify-center lg:flex-col'>
                        <AnimatedText
                            text="Biografia"
                            className='w-1/2 xs:mb-6 xs:text-7xl lg:text-7xl lg:text-center'
                        />
                        <div className='w-full mt-16 text-xl xs:text-2xl'>
                            {biographyText.paragraphs.map((paragraph, index) => (
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

                    <div className='w-full flex flex-row items-center justify-center mt-32 md:flex-col'>
                        <AnimatedText
                            text="Momentos"
                            className='w-full mb-16 xs:text-5xl text-center'
                        />
                    </div>

                    <div className='w-full flex flex-1 items-center justify-center mt-20 gap-20 lg:flex-col'>
                        <div className='flex'>
                            <Image
                                src={imageLinks.PIC_3}
                                width={400}
                                className='rounded-lg cursor-pointer'
                                alt='pic3'
                                onClick={() => openModal(imageLinks.PIC_3)}
                            />
                        </div>
                        <div className='flex'>
                            <Image
                                src={imageLinks.PIC_1}
                                width={400}
                                className='rounded-lg cursor-pointer'
                                alt='pic1'
                                onClick={() => openModal(imageLinks.PIC_1)}
                            />
                        </div>

                        <div className='flex'>
                            <Image
                                src={imageLinks.PIC_2}
                                width={400}
                                className='rounded-lg cursor-pointer'
                                alt='pic2'
                                onClick={() => openModal(imageLinks.PIC_2)}
                            />
                        </div>
                    </div>

                    <div className='w-full items-center justify-center'>
                        <Modal
                            className={`w-[800px] lg:w-[600px] md:w-[400px]`}
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            contentLabel="Image Modal"
                            shouldCloseOnOverlayClick={true}
                            style={{
                                content: {
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                    transform: 'translate(0%, 40%)',
                                },
                            }}
                        >
                            {modalImageSrc && (
                                <div className="modal">
                                    <span className="close" onClick={closeModal}></span>
                                    <Image src={modalImageSrc} alt="Modal Image" />
                                </div>
                            )}
                        </Modal>
                    </div>

                </Layout>
            </main>
        </>
    )
}

export default Biography