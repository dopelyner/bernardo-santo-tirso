import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import { CustomLink } from '@/components/Navbar';
import SeparatorBar from '@/components/SeparatorBar';
import { lightsMedia, menu } from '@/constants';
import Head from 'next/head';
import { ImageGallery } from 'react-image-grid-gallery';

const Light = () => {
    return (
        <>
            <Head>
                <title>Bernardo Santo Tirso | Luz</title>
                <meta name="Bernardo Santo Tirso" content='Projetos de luz...' />
            </Head>

            <main className='w-full mb-16 flex flex-col items-center min-h-screen justify-center overflow-hidden text-dark dark:text-light'>
                <Layout className='pt-16'>

                    <div className='flex flex-col mb-16 '>
                        <AnimatedText
                            text="Luz"
                            className='w-full mb-6 xs:text-5xl text-center'
                        />

                        <SeparatorBar size="big" />
                        <div className='mb-16'>
                            <div className='flex flex-col items-end mb-4 '>
                                <p className='text-3xl sm:text-2xl'>Produção V - OVERDRAMA</p>
                                {/* <p className=' text-2xl sm:text-xl'>Fotografia de José Caldeira</p> */}
                            </div>
                            <ImageGallery
                                imagesInfoArray={lightsMedia.OVERDRAMA}
                                columnWidth={400}
                                gapSize={24}
                            />
                        </div>

                        <SeparatorBar size="small" className="!justify-end mb-8" />
                        <div className='mb-16 '>
                            <div className='flex flex-col items-end mb-4'>
                                <p className='text-3xl sm:text-2xl'>CATARINA FONSECA DANÇA</p>
                                {/* <p className=' text-2xl sm:text-xl'>Fotografia de José Caldeira</p> */}
                            </div>
                            <ImageGallery
                                imagesInfoArray={lightsMedia.CATARINA_FONSECA_DANCA}
                                columnWidth={400}
                                gapSize={24}
                            />
                        </div>

                        <SeparatorBar size="small" className="!justify-end mb-8" />
                        <div className='flex flex-col items-end mb-4'>
                            <p className='text-3xl sm:text-2xl'>MOSTRA-TE 23 - DESENHO DE LUZ</p>
                            {/* <p className=' text-2xl sm:text-xl'>Fotografia de José Caldeira</p> */}
                        </div>
                        <ImageGallery
                            imagesInfoArray={lightsMedia.MOSTRATE23_DESENHO_DE_LUZ}
                            columnWidth={400}
                            gapSize={24}
                        />

                        <SeparatorBar size="big" className="mt-20" />

                        <div className='flex flex-col items-center justify-center'>
                            <div className='flex flex-row xl:flex-col gap-20'>
                                {menu.map((item, index) => (
                                    <>
                                        <CustomLink
                                            index={index}
                                            href={item.href}
                                            title={item.title}
                                            className='w-full text-6xl xs:text-5xl text-center'
                                        />
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>

                </Layout>
            </main>
        </>
    )
}

export default Light