import AnimatedQuotes from '@/components/AnimatedQuotes'
import AnimatedText from '@/components/AnimatedText'
import { ArrowVertical, MinusCircle, PlusCircle } from '@/components/Icons'
import Layout from '@/components/Layout'
import Navbar, { CustomLink } from '@/components/Navbar'
import SeparatorBar from '@/components/SeparatorBar'
import { biographyAccordion, imageLinks, menu, quotes } from '@/constants'
import { Accordion, AccordionItem } from '@nextui-org/accordion'
import Head from 'next/head'
import Image from 'next/image'

const Biography = () => {

    return (
        <>
            <Head>
                <title>Bernardo Santo Tirso | Biografia</title>
                <meta name="description" content="Biografia completa de Bernardo Santo Tirso - Trajetória, conquistas e projetos." />
                <meta property="og:title" content="Bernardo Santo Tirso | Biografia" />
                <meta property="og:description" content="Conheça a biografia completa de Bernardo Santo Tirso." />
                <meta property="og:type" content="website" />
            </Head>
            <Navbar />

            <main className='w-full flex flex-col justify-center items-center min-h-screen overflow-hidden text-dark dark:text-light'>
                <Layout className='pt-16 xs:py-0 xs:pb-6'>

                    <AnimatedQuotes
                        lines={[quotes.quote1.line1, quotes.quote1.line2, quotes.quote1.line3]}
                        author={quotes.author + " 1/3"}
                    />

                    <div className='hidden sm:flex sm:justify-end'>
                        <ArrowVertical />
                    </div>

                </Layout>

                <section className='w-full min-h-full flex flex-row xl:flex-col justify-center items-start gap-x-6 bg-light dark:bg-dark'>
                    <div className='relative w-full min-h-screen'>
                        <Image
                            priority
                            src={imageLinks.BIOGRAPHY}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            alt='Bernardo Santo Tirso profile'
                            className='object-cover'
                        />
                        <h3 className='absolute -bottom-0 bg-dark/60 w-full text-light italic 
                                text-center text-xl p-6 xl:p-2 sm:p-2 sm:text-sm'>Fotografia de João Pádua</h3>
                    </div>

                    <div className='flex flex-col w-full'>
                        <AnimatedText text="Curriculum" className='text-center sm:text-7xl p-16 text-dark' />

                        <div className='flex justify-center items-center'>

                            <Accordion className='flex-1 justify-between'>
                                {biographyAccordion.map((item, index) => (
                                    <AccordionItem
                                        key={index}
                                        aria-label={item.title}
                                        title={item.title}
                                        className='text-6xl px-8 py-4 text-start sm:w-full flex flex-col border-b-gold dark:border-b-dark
                                    hover:text-gold dark:hover:text-gold border-b-2 hover:border-none text-dark dark:text-light '
                                        indicator={({ isOpen }) => (isOpen ? <MinusCircle /> : <PlusCircle />)}
                                    >
                                        {item.content.map((content, i) => (
                                            <p
                                                key={i}
                                                className='text-2xl text-dark dark:text-light py-1 text-justify'>{content}
                                            </p>
                                        ))}
                                    </AccordionItem>
                                ))}
                            </Accordion>

                        </div>
                    </div>
                </section>

                <div className='flex flex-col items-center justify-center mt-40 mb-20  dark:text-dark '>
                    <h3 className='text-5xl italic '>Projetos</h3>
                    <SeparatorBar size="big" className="pt-6" />

                    <div className='flex flex-row xl:flex-col gap-20'>
                        {menu.map((item, index) => (
                            <>
                                <CustomLink
                                    key={item.href || index}
                                    index={index}
                                    href={item.href}
                                    title={item.title}
                                    className='w-full text-6xl xs:text-5xl text-center'
                                />
                            </>
                        ))}
                    </div>
                </div>

            </main >
        </>
    )
}

export default Biography