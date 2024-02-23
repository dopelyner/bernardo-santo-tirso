import { socialLinks } from '@/constants'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Layout from './Layout'

const MotionLink = motion(Link)

const Footer = () => {

    const { instagramURL, instagramDeveloper } = socialLinks[0]

    return (
        <footer className='w-full font-medium text-lg sm:text-base'>
            <div className='w-full flex justify-center items-center'>
                <Image
                    src={"../../images/bernardosantotirso.png"}
                    alt='Bernardo Santo Tirso'
                    width={500}
                    height={500}
                />
            </div>
            <Layout className='py-10 flex flex-col items-center justify-center text-center lg:flex-col lg:py-10 border-t-2 border-solid
             border-dark dark:border-light dark:text-light'>
                <span>{new Date().getFullYear()} Bernardo Santo Tirso &copy; Todos os direitos reservados.</span>
                <MotionLink
                    href={instagramDeveloper}
                    target={'_blank'}
                    className='mt-2 hover:-translate-y-0.5'
                >
                    <span className='hover:font-bold'>Developed by Tiago Lino</span>
                </MotionLink>
            </Layout>
        </footer>
    )
}

export default Footer