import AnimatedText from '@/components/AnimatedText'
import { MinusCircle, PlusCircle } from '@/components/Icons'
import Layout from '@/components/Layout'
import SeparatorBar from '@/components/SeparatorBar'
import { biographyAccordion, imageLinks, quotes } from '@/constants'
import { Accordion, AccordionItem } from '@nextui-org/accordion'
import Head from 'next/head'
import Image from 'next/image'

const Biography = () => {

    return (
        <>
            <Head>
                <title>Bernardo Santo Tirso | Biografia</title>
                <meta name="Bernardo Santo Tirso" content='Biografia...' />
            </Head>

            <main className='w-full flex flex-col items-center min-h-screen justify-center overflow-hidden text-dark dark:text-light bg-dark'>
                <Layout className='pt-6'>

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
                        <h2 className='text-2xl text-end mr-32 xs:m-0 xs:mb-32'>{quotes.author} 1/3</h2>
                    </div>

                    {/* <SeparatorBar size="big" /> */}
                </Layout>

                <div className='w-full flex flex-row xl:flex-col justify-center items-start gap-x-6'>
                    <div className='relative w-1/2 flex flex-col self-center'>
                        <Image
                            src={imageLinks.PIC_BIOGRAPHY01}
                            width="100%"
                            height="100%"
                            alt='Bernardo Sto Tirso 1'
                            className='max-h-[1200px] w-auto roudned'
                        />
                        <h3 className='absolute -bottom-0 bg-dark/60 w-full text-light italic 
                                text-center text-xl p-6'>Fotografia de João Pádua</h3>
                    </div>

                    <div className='flex flex-col w-full'>
                        <AnimatedText text="A Grande Caminhada" className='text-center p-16 text-light' />

                        <Accordion>
                            {biographyAccordion.map((item, index) => (

                                <AccordionItem
                                    key={index}
                                    aria-label={item.title}
                                    title={item.title}
                                    className='text-6xl px-8 py-4 text-justify flex flex-col justify-between border-b-blue hover:text-blue border-b-2 text-light hover:-translate-y-1'
                                    indicator={({ isOpen }) => (isOpen ? <MinusCircle /> : <PlusCircle />)}
                                >
                                    <p className='text-2xl text-light pr-16 '>{item.content[0]}</p>
                                    <p className='text-2xl text-light pr-16 '>{item.content[1]}</p>
                                    <p className='text-2xl text-light pr-16 '>{item.content[2]}</p>
                                    <p className='text-2xl text-light pr-16 '>{item.content[3]}</p>
                                </AccordionItem>
                            ))}

                        </Accordion>
                    </div>

                </div>
            </main >
        </>
    )
}

export default Biography