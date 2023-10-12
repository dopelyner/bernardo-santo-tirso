import React, { useRef, useState } from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect'
import AnimatedText from '@/components/AnimatedText'
import emailjs from 'emailjs-com';

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
                    to_email: "taplino@gmail.com",
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
                <span className='text-dark dark:text-light font-medium mb-4'>Nome</span>
                <input
                    type='text'
                    name='name'
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Qual é o teu primeiro nome?"
                    className='bg-grey/30 py-4 px-6 placeholder:text-dark/40 dark:placeholder:text-light text-dark dark:text-light rounded-lg outline-none border-none font-medium'
                />
            </label>
            <label className='flex flex-col'>
                <span className='text-dark dark:text-light font-medium mb-4'>Email</span>
                <input
                    type='email'
                    name='email'
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Qual é o teu email?"
                    className='bg-grey/30 py-4 px-6 placeholder:text-dark/40 dark:placeholder:text-light text-dark dark:text-light rounded-lg outline-none border-none font-medium'
                />
            </label>
            <label className='flex flex-col'>
                <span className='text-dark dark:text-light font-medium mb-4'>Mensagem</span>
                <textarea
                    rows={7}
                    name='message'
                    value={form.message}
                    onChange={handleChange}
                    placeholder='O que tens para me dizer?'
                    className='bg-grey/30 py-4 px-6 placeholder:text-dark/40 dark:placeholder:text-light text-dark dark:text-light rounded-lg outline-none border-none font-medium'
                />
            </label>

            <button
                type='submit'
                className='bg-secondary py-3 px-8 place-self-end rounded-xl outline-none w-fit text-dark dark:text-light font-bold shadow-md shadow-primary'
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

            {/* <TransitionEffect /> */}

            <main className='w-full mb-16 min-h-screen flex flex-row items-center justify-center overflow-hidden dark:text-light'>
                <Layout className='pt-16'>

                    <div className='flex xl:flex-col xl:items-center xl:justify-center'>
                        <div className='w-2/5'>
                            <AnimatedText
                                text="Contatos"
                                className='mb-16 lg:p-8 lg:text-7xl md:text-6xl sm:text-5xl xs:text-4xl xs:p-0'
                            />
                        </div>

                        <div className='w-3/5 mb-20'>
                            <ContactForm />
                        </div>
                    </div>

                </Layout>
            </main >
        </>
    )
}

export default contacts