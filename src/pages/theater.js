import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import { CustomLink } from '@/components/Navbar';
import SeparatorBar from '@/components/SeparatorBar';
import { menu, theaterMedia } from '@/constants';
import Head from 'next/head';
import { ImageGallery } from 'react-image-grid-gallery';

const Theater = () => {
    return (
        <>
            <Head>
                <title>Bernardo Santo Tirso | Teatro</title>
                <meta name="description" content="Projetos de teatro de Bernardo Santo Tirso." />
                <meta property="og:title" content="Bernardo Santo Tirso | Teatro" />
                <meta name="og:description" content="Todos os projetos de teatro de Bernardo Santo Tirso." />
                <meta property="og:type" content="website" />
            </Head>

            <main className='w-full flex flex-col items-center min-h-screen justify-center overflow-hidden text-dark dark:text-light'>
                <Layout className='pt-16'>

                    <div className='flex flex-col mb-16 '>
                        <AnimatedText
                            text="Teatro"
                            className='w-full mb-6 xs:text-5xl text-center'
                        />
                        <SeparatorBar size="big" />
                        <div className='mb-16 '>
                            <div className='flex flex-col items-end mb-4'>
                                <p className='text-3xl sm:text-2xl'>PROJECTO ODISSEIA - RADAR 360º</p>
                                {/* <p className=' text-2xl sm:text-xl'>Fotografia de José Caldeira</p> */}
                            </div>
                            <ImageGallery
                                imagesInfoArray={theaterMedia.PROJECTO_ODISSEIA_2017}
                                columnWidth={400}
                                gapSize={24}
                            />
                        </div>
                        <SeparatorBar size="small" className="!justify-end mb-8" />
                        <div className='mb-16'>
                            <div className='flex flex-col items-end mb-4 '>
                                <p className='text-3xl sm:text-2xl'>PROJECTO NÓS NOUS - 2022</p>
                                {/* <p className=' text-2xl sm:text-xl'>Fotografia de José Caldeira</p> */}
                            </div>
                            <ImageGallery
                                imagesInfoArray={theaterMedia.PROJECTO_NOSNOUS_2022}
                                columnWidth={400}
                                gapSize={24}
                            />
                        </div>

                        <SeparatorBar size="small" className="!justify-end mb-8" />
                        <div className='mb-16 '>
                            <div className='flex flex-col items-end mb-4'>
                                <p className='text-3xl sm:text-2xl'>OS TRANSPORTADORES - RADAR 360º</p>
                                {/* <p className=' text-2xl sm:text-xl'>Fotografia de José Caldeira</p> */}
                            </div>
                            <ImageGallery
                                imagesInfoArray={theaterMedia.OS_TRANSPORTADORES}
                                columnWidth={400}
                                gapSize={24}
                            />
                        </div>

                        <SeparatorBar size="small" className="!justify-end mb-8" />
                        <div className='mb-16 '>
                            <div className='flex flex-col items-end mb-4'>
                                <p className='text-3xl sm:text-2xl'>A TERRA DA IGUALDADE - JANGADA TEATRO</p>
                                {/* <p className=' text-2xl sm:text-xl'>Fotografia de José Caldeira</p> */}
                            </div>
                            <ImageGallery
                                imagesInfoArray={theaterMedia.A_TERRA_DA_IGUALDADE}
                                columnWidth={400}
                                gapSize={24}
                            />
                        </div>

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

export default Theater