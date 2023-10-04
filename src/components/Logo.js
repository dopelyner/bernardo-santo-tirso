import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const MotionLink = motion(Link)

const Logo = () => {

    return (
        <div className='flex items-center justify-center mt-2'>
            <MotionLink
                href="/"
                className='w-48 flex items-center justify-center
                 text-2xl font-bold hover:scale-105 '
            >
                <h2 className='w-full h-auto md:inline-block text-center'>Bernardo Santo Tirso</h2>

            </MotionLink>
        </div >
    )
}

export default Logo