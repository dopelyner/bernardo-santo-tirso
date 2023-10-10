import React from 'react'
import Layout from './Layout'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { socialLinks } from '@/constants'

const MotionLink = motion(Link)

const Footer = () => {

    const { instagramURL } = socialLinks[0]

    return (
        <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:border-light dark:text-light sm:text-base'>
            <Layout className='py-10 flex items-center justify-center lg:flex-col lg:py-10'>
                <MotionLink
                    href={instagramURL}
                    target={'_blank'}
                    className='w-full flex items-center justify-center hover:scale-105'
                >
                    <span>{new Date().getFullYear()} Bernardo Santo Tirso &copy; All rights reserved.</span>
                </MotionLink>
            </Layout>
        </footer>
    )
}

export default Footer