import { socialLinks } from '@/constants';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { LinkArrow } from './Icons';
import Layout from './Layout';

const MotionLink = motion(Link)

const Footer = () => {

    return (
        <footer className='relative w-full font-medium text-lg sm:text-base'>
            <Layout className='flex flex-row justify-between sm:justify-center xl:p-8 lg:p-16 md:justify-between py-10 text-center md:flex-col sm:flex-row lg:py-10 border-t-2 border-solid
             border-dark dark:border-light dark:text-light'>


                <div className='flex flex-col items-start justify-center sm:items-center'>
                    <span>{new Date().getFullYear()} Bernardo Santo Tirso &copy; Todos os direitos reservados.</span>
                    <MotionLink
                        href={socialLinks.instagramDeveloper}
                        target={'_blank'}
                        className='mt-2 hover:-translate-y-0.5'
                    >
                        <span className='hover:font-bold'>Developed by Tiago Lino</span>
                    </MotionLink>
                </div>

                <div className='flex flex-wrap gap-10 items-center justify-center sm:hidden lg:gap-4'>
                    <MotionLink
                        href={socialLinks.facebookURL}
                        target={'_blank'}
                        className='mt-2 hover:-translate-y-0.5'
                    >
                        <div className='flex flex-row-reverse items-center gap-1'>
                            <LinkArrow className="!w-5" />
                            <span className='hover:font-bold'>Facebook</span>
                        </div>
                    </MotionLink>

                    <MotionLink
                        href={socialLinks.instagramURL}
                        target={'_blank'}
                        className='mt-2 hover:-translate-y-0.5'
                    >
                        <div className='flex flex-row-reverse items-center gap-1'>
                            <LinkArrow className="!w-5" />
                            <span className='hover:font-bold'>Instagram</span>
                        </div>
                    </MotionLink>

                    <MotionLink
                        href={socialLinks.linkedinURL}
                        target={'_blank'}
                        className='mt-2 hover:-translate-y-0.5'
                    >
                        <div className='flex flex-row-reverse items-center gap-1'>
                            <LinkArrow className="!w-5" />
                            <span className='hover:font-bold'>Linkedin</span>
                        </div>
                    </MotionLink>
                </div>


            </Layout>
        </footer>
    )
}

export default Footer