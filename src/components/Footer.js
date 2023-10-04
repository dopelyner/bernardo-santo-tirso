import React from 'react'
import Layout from './Layout'

const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:border-light dark:text-light sm:text-base'>
            <Layout className='py-10 flex items-center justify-center lg:flex-col lg:py-10'>
                <span>{new Date().getFullYear()} Bernardo Santo Tirso &copy; All rights reserved. </span>
            </Layout>
        </footer>
    )
}

export default Footer