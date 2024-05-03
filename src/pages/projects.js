import AnimatedQuotes from '@/components/AnimatedQuotes'
import AnimatedText from '@/components/AnimatedText'
import { ArrowVertical } from '@/components/Icons'
import Layout from '@/components/Layout'
import { CustomLink } from '@/components/Navbar'
import SeparatorBar from '@/components/SeparatorBar'
import { projectsSubMenu, quotes } from '@/constants'
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
                <Layout className='pt-16 xs:py-0 xs:pb-6'>

                    <AnimatedQuotes
                        lines={[quotes.quote2.line1, quotes.quote2.line2, quotes.quote2.line3]}
                        author={quotes.author + " 2/3"}
                    />

                    <div className='hidden sm:flex sm:justify-end'>
                        <ArrowVertical />
                    </div>

                    <SeparatorBar size="big" className="pt-16" />

                    <div className='flex flex-col xl:mb-12 xs:mb-16 items-center justify-center lg:mt-0'>

                        <div className='flex flex-col mt-24 gap-y-12'>
                            {projectsSubMenu.map((item, index) => (
                                <>
                                    <CustomLink
                                        index={index}
                                        href={item.href}
                                        title={item.title}
                                        className='w-full text-8xl xs:text-5xl text-center'
                                    />
                                </>
                            ))}
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