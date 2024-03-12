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
                                    className='text-6xl px-8 py-4 text-justify flex flex-col justify-between border-b-purple hover:text-purple border-b-2 text-light hover:-translate-y-1'
                                    indicator={({ isOpen }) => (isOpen ? <MinusCircle /> : <PlusCircle />)}
                                >
                                    <p className='text-2xl text-light pr-16'>{item.content}</p>
                                    {/* <p className='text-2xl text-light'>Bernardo Santo Tirso Ribeiro é ator, nasceu em Aveiro &#8208; São Bernardo, em 1995.
                                    </p>
                                    <p className='text-2xl text-light'>
                                        Concluiu o curso profissional de artes do espetáculo &#8208; interpretação em 2015, no Conservatório de Música da Jobra.
                                    </p>
                                    <p className='text-2xl text-light'>
                                        Frequentou aulas de formação musical e trompete na escola PALCO CENTRAL.
                                    </p>
                                    <p className='text-2xl text-light'>
                                        Frequentou o primeiro ano de Interpretação na ESMAE.
                                    </p> */}
                                </AccordionItem>
                            ))}

                            {/* <AccordionItem
                                key="1"
                                aria-label="Início da Carreira e Educação"
                                title="Início da Carreira e Educação"
                                className='text-6xl px-8 py-4 text-justify flex flex-col justify-between border-b-violet-950 hover:text-violet-950 border-b-2 text-light hover:-translate-y-1'
                                indicator={({ isOpen }) => (isOpen ? <MinusCircle /> : <PlusCircle />)}
                            >

                                <p className='text-2xl text-light'>Bernardo Santo Tirso Ribeiro é ator, nasceu em Aveiro &#8208; São Bernardo, em 1995.
                                </p>
                                <p className='text-2xl text-light'>
                                    Concluiu o curso profissional de artes do espetáculo &#8208; interpretação em 2015, no Conservatório de Música da Jobra.
                                </p>
                                <p className='text-2xl text-light'>
                                    Frequentou aulas de formação musical e trompete na escola PALCO CENTRAL.
                                </p>
                                <p className='text-2xl text-light'>
                                    Frequentou o primeiro ano de Interpretação na ESMAE.
                                </p>
                            </AccordionItem> */}

                            {/* <AccordionItem
                                key="2"
                                aria-label="Formação Avançada e Workshops"
                                title="Formação Avançada e Workshops"
                                className='text-6xl px-8 py-4 text-justify flex flex-col border-b-violet-950 hover:text-violet-950 border-b-2 text-light hover:-translate-y-1'
                                indicator={({ isOpen }) => (isOpen ? (<MinusCircle />) : <PlusCircle />)}
                            >
                                <p className='text-2xl text-light'>Licenciou-se em Teatro &#8208; variante Luz e Som na ESMAE em 2023.
                                </p>
                                <p className='text-2xl text-light'>
                                    Participou em vários workshops, dos quais salienta: Julieta Rodrigues e António Oliveira (Teatro Físico), Marcelo Lafontana, Jordi Bertran, Tommy Luther (Manipulação de Formas Animadas), Paulo Ferreira (Interpretação para câmera).
                                </p>
                                <p className='text-2xl text-light'>
                                    Frequentou a Formação Avançada de Interpretação e Criação Coreográfica (Companhia Instável).
                                </p>
                            </AccordionItem>


                            <AccordionItem
                                key="3"
                                aria-label="Experiência Profissional em Teatro"
                                title="Experiência Profissional em Teatro"
                                className='text-6xl px-8 py-4 text-justify flex flex-col border-b-violet-950 hover:text-violet-950 border-b-2 text-light hover:-translate-y-1'
                                indicator={({ isOpen }) => (isOpen ? <MinusCircle /> : <PlusCircle />)}
                            >
                                <p className='text-2xl text-light'>Como ator, já colaborou com: Viv’arte; Cabeças no Ar e Pés na Terra; ASSéDIO; Radar 360o, Companhia Historioscopio, Companhia do Jogo.
                                </p>
                            </AccordionItem>

                            <AccordionItem
                                key="4"
                                aria-label="Experiência em Cinema e Música"
                                title="Experiência em Cinema e Música"
                                className='text-6xl px-8 py-4 text-justify flex flex-col border-b-violet-950 hover:text-violet-950 border-b-2 text-light hover:-translate-y-1'
                                indicator={({ isOpen }) => (isOpen ? <MinusCircle /> : <PlusCircle />)}
                            >
                                <p className='text-2xl text-light'>No cinema realça a participação no Filme de Animação &#8208; RIDE &#8208; realizado por Paul Bush em 2017 e a primeira curta metragem realizada por Henrique Vilão “O céu aqui é mais baixo”.
                                </p>
                                <p className='text-2xl text-light'>Como possível músico, atuou como baixista em Gold Note Diggers (2012-2015) e foi banjoísta em Mimo’s Dixie Band (2017 &#8208; 2019).
                                </p>
                                <p className='text-2xl text-light'>Assumiu a direção artística do projeto Erasmus+ “Music For Chameleons” (contava com 60 pessoas de 6 países diferentes).
                                </p>
                            </AccordionItem> */}
                        </Accordion>
                    </div>

                </div>
            </main >
        </>
    )
}

export default Biography