import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import { CustomLink } from '@/components/Navbar';
import SeparatorBar from '@/components/SeparatorBar';
import { Timeline } from '@/components/Timeline';
import { theaterMedia } from '@/constants';
import Head from 'next/head';
import Image from 'next/image';
import { ImageGallery } from 'react-image-grid-gallery';
import ReactPlayer from 'react-player';

const data = [
    {
        title: "Histórias em Viagem - Radar 360º",
        content: (
            <div>
                <p className="text-neutral-800 dark:text-neutral-200 md:text-sm font-normal mb-8">
                    Projeto Odisseia | PARTIS – Santarém/Oeiras/Almada/Montijo/Moita/Barreiro-2017
                </p>
                <div className="flex flex-col w-full gap-4">

                    <ReactPlayer
                        url="https://vimeo.com/317700256"
                        controls={true}
                        className=" w-full sm:w-4/5 lg:w-3/5 xl:w-2/5 mb-16"
                    />

                    <p clasName="text-neutral-800 dark:text-neutral-200 md:text-sm font-normal mb-8">
                        Projeto Odisseia | PARTIS – Santarém/Oeiras/Almada/Montijo/Moita/Barreiro-2017
                    </p>

                    <Image
                        priority
                        src="https://assets.aceternity.com/templates/startup-2.webp"
                        alt="startup template"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                </div>
            </div >
        ),
    },
    {
        title: "Early 2023",
        content: (
            <div>
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    I usually run out of copy, but when I see content this big, I try to
                    integrate lorem ipsum.
                </p>
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    Lorem ipsum is for people who are too lazy to write copy. But we are
                    not. Here are some more example of beautiful designs I built.
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <Image
                        priority
                        src="https://assets.aceternity.com/pro/hero-sections.png"
                        alt="hero template"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                    <Image
                        priority
                        src="https://assets.aceternity.com/features-section.png"
                        alt="feature template"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                    <Image
                        priority
                        src="https://assets.aceternity.com/pro/bento-grids.png"
                        alt="bento template"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                    <Image
                        priority
                        src="https://assets.aceternity.com/cards.png"
                        alt="cards template"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                </div>
            </div>
        ),
    },
];

const Theater = () => {
    return (
        <>
            <Head>
                <title>Bernardo Santo Tirso | Teatro</title>
                <meta name="Bernardo Santo Tirso" content='Projetos de teatro...' />
            </Head>

            {/* <main className='w-full mb-16 flex flex-col items-center min-h-screen justify-center overflow-hidden text-dark dark:text-light'>
                <Layout className='flex flex-col items-center justify-center sm:p-0'>
                    <AnimatedText
                        text="Teatro"
                        className='w-full mb-6 xs:text-5xl text-center'
                    />
                    <SeparatorBar size="big" />

                    <div className='w-full flex '>
                        <Timeline data={data} />
                    </div>

                    <SeparatorBar size="big" />

                    <div className='flex flex-col items-center justify-center'>
                        <h3 className='text-2xl italic mb-12'> Outros projectos</h3>
                        <div className='flex flex-row gap-20 lg:flex-col'>
                            <CustomLink href="/cinema" title="Cinema" className='w-full text-8xl xs:text-5xl text-center' />
                            <CustomLink href="/light" title="Luz" className='w-full text-8xl xs:text-5xl text-center' />
                            <CustomLink href="/staging" title="Encenação" className='w-full text-8xl xs:text-5xl text-center' />
                        </div>
                    </div>

                </Layout>
            </main> */}

            <main className='w-full mb-16 flex flex-col items-center min-h-screen justify-center overflow-hidden text-dark dark:text-light'>
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
                            <h3 className='text-2xl italic mb-12'> Outros projectos</h3>
                            <div className='flex flex-row gap-20 lg:flex-col'>
                                <CustomLink href="/cinema" title="Cinema" className='w-full text-8xl xs:text-5xl text-center' />
                                <CustomLink href="/light" title="Luz" className='w-full text-8xl xs:text-5xl text-center' />
                                <CustomLink href="/staging" title="Encenação" className='w-full text-8xl xs:text-5xl text-center' />
                            </div>
                        </div>
                    </div>

                </Layout>
            </main>
        </>
    )
}

export default Theater