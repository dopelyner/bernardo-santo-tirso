import AnimatedQuotes from '@/components/AnimatedQuotes'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import { CustomLink } from '@/components/Navbar'
import SeparatorBar from '@/components/SeparatorBar'
import { quotes } from '@/constants'
import Head from 'next/head'
import Image from 'next/image'

const Projects = () => {
    return (
        <>
            <Head>
                <title>Bernardo Santo Tirso | Projetos</title>
                <meta name="Bernardo Santo Tirso" content='Projetos [Cinema, Teatro, Luz, Encenação]' />
            </Head>

            <main className='w-full flex flex-col items-center min-h-screen justify-center overflow-hidden text-dark dark:text-light'>
                <Layout className='pt-16'>

                <AnimatedQuotes
                        lines={[quotes.quote2.line1, quotes.quote2.line2, quotes.quote2.line3]}
                        author={quotes.author + " 2/3"}
                    />

                    <SeparatorBar size="big" />

                    <div className='flex flex-col xl:mb-12 xs:mb-16 items-center justify-center lg:mt-0'>
                        <div className='flex flex-col mt-24 gap-y-12'>
                            <CustomLink href="/cinema" title="Cinema" className='w-full text-8xl xs:text-5xl text-center' />
                            <CustomLink href="/theater" title="Teatro" className='w-full text-8xl xs:text-5xl text-center' />
                            <CustomLink href="/light" title="Luz" className='w-full text-8xl xs:text-5xl text-center' />
                            <CustomLink href="/staging" title="Encenação" className='w-full text-8xl xs:text-5xl text-center' />
                        </div>
                    </div>
                </Layout>

                <div className='w-full flex justify-center items-center'>
                    <Image
                        priority
                        src={"../../images/bernardosantotirso.png"}
                        alt='Bernardo Santo Tirso'
                        width={600}
                        height={600}
                    />
                </div>

            </main>
        </>
    )
}

export default Projects