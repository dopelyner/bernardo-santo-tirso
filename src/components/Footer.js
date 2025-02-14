import { socialLinks } from '@/constants';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FacebookIcon, InstagramIcon, LinkedinIcon, MoonIcon, SunIcon } from './Icons';
import Layout from './Layout';
import useThemeSwitcher from './hooks/useThemeSwitcher';

const MotionLink = motion(Link)

const Footer = () => {
    const [mode, setMode] = useThemeSwitcher()

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
                    <motion.a href={socialLinks.facebookURL} target={'_blank'}
                        className="w-6 mr-3 sm:mx-1"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FacebookIcon className="!fill-dark dark:!fill-light" />
                    </motion.a>

                    <motion.a href={socialLinks.instagramURL} target={'_blank'}
                        className="w-6 mr-3 sm:mx-1"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <InstagramIcon className="!fill-dark dark:!fill-light" />
                    </motion.a>

                    <motion.a href={socialLinks.linkedinURL} target={'_blank'}
                        className="w-6 mr-3 sm:mx-1"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <LinkedinIcon className="!fill-dark dark:!fill-light" />
                    </motion.a>

                    <button
                        aria-label='theme-switcher-button'
                        onClick={() => setMode(mode === "light" ? "dark" : "light")}
                        className={`rounded-full bg-gray-50 dark:bg-neutral-800 px-4 py-4 
                                                    ${mode === "light" ? "bg-neutral-900 text-light" : "bg-light text-light"}`}>
                        {
                            mode === "dark"
                                ? <SunIcon />
                                : <MoonIcon />
                        }
                    </button>
                </div>
            </Layout>
        </footer>
    )
}

export default Footer