import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import SeparatorBar from '@/components/SeparatorBar'
import { biographyText, imageLinks, quotes } from '@/constants'
import Head from 'next/head'
import Image from 'next/image'

const Biography = () => {

    return (
        <>
            <Head>
                <title>Bernardo Santo Tirso | Biografia</title>
                <meta name="Bernardo Santo Tirso" content='Biografia...' />
            </Head>

            <main className='w-full flex flex-col items-center min-h-screen justify-center overflow-hidden dark:text-light'>
                <Layout className='pt-16'>

                    <div className='w-full mb-24 flex flex-col lg:p-8 xs:text-6xl xs:p-8'>
                        <AnimatedText
                            text={`“` + quotes.quote1.line1}
                            className='xs:text-5xl xl:text-7xl lg:text-6xl xs:mr-12 xs:p-4 normal-case italic'
                        />
                        <AnimatedText
                            text={quotes.quote1.line2}
                            className='xs:text-5xl xl:text-7xl lg:text-6xl xs:mr-12 xs:p-4 normal-case italic'
                        />
                        <AnimatedText
                            text={quotes.quote1.line3 + `”`}
                            className='xs:text-5xl xl:text-7xl lg:text-6xl xs:mr-12 xs:p-4 normal-case italic'
                        />
                        <h2 className='mb-32 text-2xl text-end mr-32 xs:m-0 xs:mb-32'>{quotes.author} 1/3</h2>
                    </div>

                    <SeparatorBar size="big" />

                    <div className='w-full flex flex-col mb-36 items-center justify-center lg:flex-col'>

                        <AnimatedText
                            text="Biografia"
                            className='w-1/2 mb-16 text-center xs:mb-6 xs:text-7xl lg:text-7xl '
                        />

                        <div className='flex flex-row xl:flex-col justify-center items-center gap-x-6'>
                            <div className='relative w-fit h-fit flex flex-col'>
                                <Image
                                    src={imageLinks.PIC_BIOGRAPHY01}
                                    width="100%"
                                    height="100%"
                                    alt='Bernardo Sto Tirso 1'
                                />
                                <h3 className='absolute bottom-0 w-full text-light 
                                text-center bg-transparent/40 text-xl p-4 hover:bg-transparent/60'>Fotografia de João Pádua</h3>
                            </div>
                            <div className='w-screen flex flex-col max-w-prose text-3xl xs:text-2xl text-justify'>
                                {biographyText.paragraph01.map((paragraph, index) => (
                                    <li
                                        key={index}
                                        className='list-none my-6'
                                    >
                                        {paragraph}
                                    </li>
                                ))}

                                {biographyText.paragraph02.map((paragraph, index) => (
                                    <li
                                        key={index}
                                        className='list-none my-6'
                                    >
                                        {paragraph}
                                    </li>
                                ))}
                            </div>
                        </div>

                    </div>

                </Layout>
            </main >
        </>
    )
}

export default Biography