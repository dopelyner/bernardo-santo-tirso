import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Amatic_SC } from 'next/font/google'

const MotionLink = motion(Link)

const amatic = Amatic_SC({
    subsets: ["latin"],
    weight: ["700"]
})

const Logo = () => {

    return (
        <div className='flex items-center justify-center mt-6 sm:mt-2'>
            <MotionLink
                href="/"
                className='w-full flex items-center justify-center 
                 text-4xl font-bold hover:scale-105'
            >
                <h2 style={amatic.style} className='w-full h-auto md:inline-block text-center'>
                    Bernardo Santo Tirso
                </h2>

            </MotionLink>
        </div >
    )
}

export default Logo