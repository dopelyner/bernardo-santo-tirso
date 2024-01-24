import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import { CustomLink } from '@/components/Navbar'
import TitleStickText from '@/components/TitleStickText'
import { quotes } from '@/constants'
import dynamic from 'next/dynamic'
import Head from 'next/head'

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const ProjectItem = ({ title, subTitle, videoURL }) => {

    return (
        <div className='flex flex-col mb-24'>
            <AnimatedText
                text={title}
                className='mt-0 italic text-5xl xs:text-4xl text-center'
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
                <ReactPlayer
                    url={videoURL}
                    width="100%"
                    height="100%"
                    controls={true}
                    className="w-full sm:w-4/5 lg:w-3/5 xl:w-2/5"
                />
            </div>
        </div>
    )
}

const Projects = () => {
    return (
        <>
            <Head>
                <title>Bernardo Santo Tirso | Projetos</title>
                <meta name="Bernardo Santo Tirso" content='Projetos...' />
            </Head>

            <main className='w-full mb-16 flex flex-col items-center min-h-screen justify-center overflow-hidden text-dark dark:text-light'>
                <Layout className='pt-16'>

                    <div className='w-full flex flex-col lg:p-8 xs:text-6xl xs:p-8'>
                        <AnimatedText
                            text={`“` + quotes.quote3.quote3_1}
                            className='xs:text-5xl xl:text-7xl lg:text-6xl xs:mr-12 xs:p-4 normal-case italic'
                        />
                        <AnimatedText
                            text={quotes.quote3.quote3_2}
                            className='xs:text-5xl xl:text-7xl lg:text-6xl xs:mr-12 xs:p-4 normal-case italic'
                        />
                        <AnimatedText
                            text={quotes.quote3.quote3_3 + `”`}
                            className='xs:text-5xl xl:text-7xl lg:text-6xl xs:mr-12 xs:p-4 normal-case italic'
                        />
                        <h2 className='mb-32 text-2xl text-end mr-32 xs:m-0 xs:mb-32'>{quotes.author} 2/3</h2>
                    </div>

                    <div className='flex flex-col items-center justify-center lg:mt-0'>
                        <div className='flex flex-col mt-64'>
                            <CustomLink href="/cinema" title="Cinema" className='w-full mb-8 text-8xl xs:text-5xl text-center' />
                            <CustomLink href="/theater" title="Teatro" className='w-full mb-8 text-8xl xs:text-5xl text-center' />
                            <CustomLink href="/light" title="Luz" className='w-full mb-8 text-8xl xs:text-5xl text-center' />
                            <CustomLink href="/photography" title="Fotografia" className='w-full mb-8 text-8xl xs:text-5xl text-center' />
                            <CustomLink href="/staging" title="Encenação" className='w-full mb-8 text-8xl xs:text-5xl text-center' />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default Projects