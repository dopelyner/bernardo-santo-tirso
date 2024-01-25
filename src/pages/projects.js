import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import { CustomLink } from '@/components/Navbar'
import SeparatorBar from '@/components/SeparatorBar'
import { quotes } from '@/constants'
import Head from 'next/head'

const Projects = () => {
    return (
        <>
            <Head>
                <title>Bernardo Santo Tirso | Projetos</title>
                <meta name="Bernardo Santo Tirso" content='Projetos...' />
            </Head>

            <main className='w-full mb-16 flex flex-col items-center min-h-screen justify-center overflow-hidden text-dark dark:text-light'>
                <Layout className='pt-16'>

                    <div className='w-full mb-24 flex flex-col lg:p-8 xs:text-6xl xs:p-8'>
                        <AnimatedText
                            text={`“` + quotes.quote2.quote2_1}
                            className='xs:text-5xl xl:text-7xl lg:text-6xl xs:mr-12 xs:p-4 normal-case italic'
                        />
                        <AnimatedText
                            text={quotes.quote2.quote2_2}
                            className='xs:text-5xl xl:text-7xl lg:text-6xl xs:mr-12 xs:p-4 normal-case italic'
                        />
                        <AnimatedText
                            text={quotes.quote2.quote2_3 + `”`}
                            className='xs:text-5xl xl:text-7xl lg:text-6xl xs:mr-12 xs:p-4 normal-case italic'
                        />
                        <h2 className='mb-32 text-2xl text-end mr-32 xs:m-0 xs:mb-32'>{quotes.author} 2/3</h2>
                    </div>

                    <SeparatorBar size="big" />

                    <div className='flex flex-col xl:mb-12 xs:mb-16 items-center justify-center lg:mt-0'>
                        <div className='flex flex-col mt-24 gap-y-12'>
                            <CustomLink href="/cinema" title="Cinema" className='w-full text-8xl xs:text-5xl text-center' />
                            <CustomLink href="/theater" title="Teatro" className='w-full text-8xl xs:text-5xl text-center' />
                            <CustomLink href="/light" title="Luz" className='w-full text-8xl xs:text-5xl text-center' />
                            <CustomLink href="/photography" title="Fotografia" className='w-full text-8xl xs:text-5xl text-center' />
                            <CustomLink href="/staging" title="Encenação" className='w-full text-8xl xs:text-5xl text-center' />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default Projects