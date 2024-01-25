import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import SeparatorBar from '@/components/SeparatorBar'
import { biographyText, quotes } from '@/constants'
import Head from 'next/head'

const Biography = () => {
    return (
        <>
            <Head>
                <title>Bernardo Santo Tirso | Biografia</title>
                <meta name="Bernardo Santo Tirso" content='Biografia...' />
            </Head>

            <main className='w-full mb-16 flex flex-col items-center min-h-screen justify-center overflow-hidden dark:text-light'>
                <Layout className='pt-16'>

                    <div className='w-full mb-24 flex flex-col lg:p-8 xs:text-6xl xs:p-8'>
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

                    <SeparatorBar size="big" />

                    <div className='w-full flex flex-row mb-36 items-center justify-center lg:flex-col'>
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
                </Layout>
            </main>
        </>
    )
}

export default Biography