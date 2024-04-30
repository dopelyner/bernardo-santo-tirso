import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import SeparatorBar from '@/components/SeparatorBar';
import { emailAddress, quotes } from '@/constants';
import emailjs from 'emailjs-com';
import Head from 'next/head';
import Image from 'next/image';
import { useRef, useState } from 'react';

const ContactForm = () => {

    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                process.env.NEXT_EMAILJS_SERVICE_ID,
                process.env.NEXT_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    to_name: "Bernardo Santo Tirso",
                    from_email: form.email,
                    to_email: emailAddress.email,
                    message: form.message,
                },
                process.env.NEXT_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setLoading(false);
                    alert("Thank you. I will get back to you as soon as possible.");

                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);

                    alert("Ahh, something went wrong. Please try again.");
                }
            );
    };

    return (
        <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8'
        >
            <label className='flex flex-col'>
                <span className='text-dark dark:text-light font-medium mb-4 text-2xl'>Nome</span>
                <input
                    type='text'
                    name='name'
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Bernardo Santo Tirso"
                    className='bg-transparent py-2 text-lg placeholder:text-dark/40 dark:placeholder:text-light/50 text-dark border-b-2 border-primary dark:text-light outline-none font-medium'
                />
            </label>
            <label className='flex flex-col'>
                <span className='text-dark dark:text-light font-medium mb-4 text-2xl'>Email</span>
                <input
                    type='email'
                    name='email'
                    value={form.email}
                    onChange={handleChange}
                    placeholder="bernardo.s.tirso@gmail.com"
                    className='bg-transparent py-2 placeholder:text-dark/40 dark:placeholder:text-light/50 text-dark border-b-2 border-primary dark:text-light outline-none font-medium'
                />
            </label>
            <label className='flex flex-col'>
                <span className='text-dark dark:text-light font-medium mb-4 text-2xl'>Mensagem</span>
                <textarea
                    rows={1}
                    name='message'
                    value={form.message}
                    onChange={handleChange}
                    placeholder='A mensagem...'
                    className='bg-transparent py-2 min-h-fit placeholder:text-dark/40 dark:placeholder:text-light/50 text-dark border-b-2 border-primary dark:text-light outline-none font-medium'
                />
            </label>

            <button
                type='submit'
                className='bg-secondary py-3 px-8 place-self-end outline-none w-fit text-dark dark:text-light font-bold hover:bg-dark hover:text-light shadow-md shadow-primary hover:-translate-y-0.5'
            >
                {loading ? "A enviar..." : "Enviar"}
            </button>
        </form>
    );
};

const contacts = () => {

    return (
        <>
            <Head>
                <title>Bernardo Santo Tirso | Contatos</title>
                <meta name="Bernardo Santo Tirso" content='Contatos...' />
            </Head>

            <main className='w-full min-h-screen flex flex-row items-center justify-center overflow-hidden dark:text-light'>
                <Layout className='pt-16 pb-0 sm:pb-0'>

                    <div className='w-full mb-24 flex flex-col xs:text-6xl'>
                        <AnimatedText
                            text={`“` + quotes.quote3.line1}
                            className='xs:text-5xl xl:text-7xl lg:text-6xl xs:mr-12 xs:p-4 normal-case italic'
                        />
                        <AnimatedText
                            text={quotes.quote3.line2}
                            className='xs:text-5xl xl:text-7xl lg:text-6xl xs:mr-12 xs:p-4 normal-case italic'
                        />
                        <AnimatedText
                            text={quotes.quote3.line3 + `”`}
                            className='xs:text-5xl xl:text-7xl lg:text-6xl xs:mr-12 xs:p-4 normal-case italic'
                        />
                        <h2 className='mb-32 text-2xl text-end mr-32 xs:m-0 xs:mb-32'>{quotes.author} 3/3</h2>
                    </div>

                    <SeparatorBar size="big" />

                    <AnimatedText
                        text="Contatos"
                        className='w-full lg:text-7xl md:text-6xl sm:text-5xl xs:text-6xl text-center'
                    />

                    <div className='mt-32 flex xl:flex-col xl:items-center xl:justify-center md:flex-col-reverse'>
                        <div className='flex flex-col items-center justify-center mr-20 lg:m-0 xl:mr-0 md:w-max'>
                            <div className='w-full flex justify-end items-end 2xl:bottom-0'>
                                <Image
                                    src={"../../images/bernardosantotirso.png"}
                                    alt='Bernardo Santo Tirso'
                                    width={600}
                                    height={600}
                                    className='xs:w-[400px]'
                                />
                            </div>
                        </div>

                        <div className='w-3/5 xl:w-full 2xl:mb-16'>
                            <ContactForm />
                        </div>

                    </div>

                </Layout>
            </main >
        </>
    )
}

export default contacts