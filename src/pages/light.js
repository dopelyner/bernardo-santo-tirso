import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import { CustomLink } from '@/components/Navbar';
import SeparatorBar from '@/components/SeparatorBar';
import { lightsMedia } from '@/constants';
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
                                <p className=' text-2xl sm:text-xl'>Fotografia de José Caldeira</p>
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
                                <p className=' text-2xl sm:text-xl'>Fotografia de José Caldeira</p>
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
                            <p className=' text-2xl sm:text-xl'>Fotografia de José Caldeira</p>
                        </div>
                        <ImageGallery
                            imagesInfoArray={lightsMedia.MOSTRATE23_DESENHO_DE_LUZ}
                            columnWidth={400}
                            gapSize={24}
                        />

                        {/* <div className='flex justify-end sm:justify-center py-16 sm:py-32 '>
                            <Link href="/projects" title='Projects' className='flex flex-col gap-2 items-center hover:-translate-y-1'>
                                <LeftArrow />
                                <h3 className='text-2xl italic hover:font-bold'>Voltar</h3>
                            </Link>
                        </div> */}

                        <SeparatorBar size="big" />

                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='text-2xl italic mb-12'> Outros projectos</h3>
                            <div className='flex flex-row gap-20 lg:flex-col'>
                                <CustomLink href="/cinema" title="Cinema" className='w-full text-8xl xs:text-5xl text-center' />
                                <CustomLink href="/theater" title="Teatro" className='w-full text-8xl xs:text-5xl text-center' />
                                <CustomLink href="/staging" title="Encenação" className='w-full text-8xl xs:text-5xl text-center' />
                            </div>
                        </div>
                    </div>

                </Layout>
            </main>
        </>
    )
}

export default Light