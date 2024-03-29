import AnimatedText from '@/components/AnimatedText'
import { MinusCircle, PlusCircle } from '@/components/Icons'
import Layout from '@/components/Layout'
import { CustomLink } from '@/components/Navbar'
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

            <main className='w-full flex flex-col justify-center items-center min-h-fit overflow-hidden text-dark dark:text-light'>
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

                </Layout>

                <section className='w-full min-h-full flex flex-row xl:flex-col justify-center items-start gap-x-6 bg-dark dark:bg-greyDark'>
                    <div className='relative w-1/2 xl:min-w-max 2xl:w-1/2 sm:w-full flex flex-col self-center'>
                        <Image
                            priority
                            src={imageLinks.BIOGRAPHY}
                            width="100%"
                            height="100%"
                            alt='Bernardo Sto Tirso 1'
                            className='w-max h-max xl:w-max'
                        />
                        <h3 className='absolute -bottom-0 bg-dark/60 w-full text-light italic 
                                text-center text-xl p-6 xl:p-2 sm:p-2 sm:text-sm'>Fotografia de João Pádua</h3>
                    </div>

                    <div className='flex flex-col w-full'>
                        <AnimatedText text="A Grande Caminhada" className='text-center sm:text-7xl p-16 text-light' />

                        <div className='flex justify-center items-center'>
                            <Accordion>
                                {biographyAccordion.map((item, index) => (

                                    <AccordionItem
                                        key={index}
                                        aria-label={item.title}
                                        title={item.title}
                                        className='text-6xl px-8 py-4 text-start sm:w-full flex flex-col border-b-blue
                                    hover:text-blue border-b-2 text-light hover:-translate-y-1'
                                        indicator={({ isOpen }) => (isOpen ? <MinusCircle /> : <PlusCircle />)}
                                    >
                                        <p className='text-2xl text-light pb-2 text-justify'>{item.content[0]}</p>
                                        <p className='text-2xl text-light py-2 text-justify'>{item.content[1]}</p>
                                        <p className='text-2xl text-light py-2 text-justify'>{item.content[2]}</p>
                                        <p className='text-2xl text-light pt-2 text-justify'>{item.content[3]}</p>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </section>

                <div className='flex flex-col items-center justify-center my-20'>
                    <h3 className='text-5xl italic xl:hidden'>Projectos</h3>

                    <div className='flex flex-row xl:flex-col my-12 gap-20'>
                        <CustomLink href="/cinema" title="Cinema" className='w-full text-8xl xs:text-5xl text-center' />
                        <CustomLink href="/theater" title="Teatro" className='w-full text-8xl xs:text-5xl text-center' />
                        <CustomLink href="/light" title="Luz" className='w-full text-8xl xs:text-5xl text-center' />
                        <CustomLink href="/staging" title="Encenação" className='w-full text-8xl xs:text-5xl text-center' />
                    </div>
                </div>

                <div className='w-full flex justify-center items-center'>
                    <Image
                        priority
                        src={"../../images/bernardosantotirso.png"}
                        alt='Bernardo Santo Tirso'
                        width={600}
                        height={600}
                        className='xs:w-[400px]'
                    />

                </div>

            </main >
        </>
    )
}

export default Biography