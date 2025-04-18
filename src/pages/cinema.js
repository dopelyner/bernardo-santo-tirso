import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import { CustomLink } from '@/components/Navbar';
import SeparatorBar from '@/components/SeparatorBar';
import { cinemaMedia, menu } from '@/constants';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
const ProjectItem = ({ title, subTitle, videoURL }) => {
    return (
        <div className='flex flex-col justify-center items-center mb-24'>
            <AnimatedText
                text={title}
                className='mt-0 italic text-5xl lg:text-6xl xs:text-4xl text-center'
            />
            <h3
                className='mt-0 text-2xl xs:text-xl text-center mb-2'>
                {subTitle}
            </h3>
            <div
                id="video2"
                className='w-[1080px] h-[600px] flex flex-col items-center justify-center xl:w-[720px] xl:h-[500px]
                    lg:w-[600px] lg:h-[400px] sm:w-[400px] sm:h-[200px] sm:self-center xs:w-[280px] xs:h-[200px] my-0 mx-2'
            >
                {videoURL ? (
                    <ReactPlayer
                        url={videoURL}
                        width="100%"
                        height="100%"
                        controls={true}
                        className="w-full sm:w-4/5 lg:w-3/5 xl:w-2/5"
                    />
                ) : (
                    <h3
                        className='text-2xl xs:text text-center text-gray-600'>
                        Video indisponível
                    </h3>
                )}

            </div>
        </div>
    )
}

const Cinema = () => {
    return (
        <>
            <Head>
                <title>Bernardo Santo Tirso | Cinema</title>
                <meta name="Bernardo Santo Tirso" content='Projetos relativos ao cinema...' />
            </Head>

            <main className='w-full flex flex-col items-center min-h-screen justify-center overflow-hidden text-dark dark:text-light'>
                <Layout className='pt-16'>

                    <div className='flex flex-col items-center justify-center lg:mt-0'>

                        <div className='flex flex-col'>
                            <AnimatedText
                                text="Cinema"
                                className='w-full mb-6 xs:text-5xl text-center'
                            />

                            <SeparatorBar size="big" />

                            {cinemaMedia.map((video, index) => (
                                <ProjectItem
                                    key={index}
                                    title={video.title}
                                    subTitle={video.subTitle}
                                    videoURL={video.videoURL}
                                />
                            ))
                            }
                        </div>

                    </div>

                    <SeparatorBar size="big" />

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
                </Layout>
            </main>
        </>
    )
}

export default Cinema