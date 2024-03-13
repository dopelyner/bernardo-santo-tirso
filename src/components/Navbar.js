import { projectsSubMenu, socialLinks } from '@/constants'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { FacebookIcon, InstagramIcon, MoonIcon, SunIcon } from './Icons'
import useThemeSwitcher from './hooks/useThemeSwitcher'

export const CustomLink = ({ href, title, className = "", subMenu }) => {

    const router = useRouter()

    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    let leaveTimeout;

    const handleMouseEnter = () => {
        setIsSubMenuOpen(true);
    };

    const handleMouseLeave = () => {
        // Delay the execution of hiding submenu
        leaveTimeout = setTimeout(() => {
            setIsSubMenuOpen(false);
        }, 300);
    };

    const handleSubMenuMouseEnter = () => {
        // Clear the timeout to prevent hiding the submenu
        clearTimeout(leaveTimeout);
    };

    const handleSubMenuMouseLeave = () => {
        setIsSubMenuOpen(false);
    };

    const handleSubMenuLinkClick = () => {
        // Clear the timeout to prevent hiding the submenu
        clearTimeout(leaveTimeout);
    };

    return (
        <div className={`${className} relative group inline-block`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            {subMenu ? (
                <div
                    className={`group relative inline-block `}
                    onMouseEnter={handleSubMenuMouseEnter}
                    onMouseLeave={handleSubMenuMouseLeave}
                >
                    <Link href={href}>
                        <h3
                            className={`block px-4 text-dark dark:text-light  
                                transition-colors duration-300 cursor-pointer  ${router.asPath == href ? 'underline' : ''
                                }`}
                            onClick={handleSubMenuLinkClick}
                        >
                            {title}
                        </h3>
                    </Link>

                    {isSubMenuOpen && (
                        <div
                            className={`absolute top-full left-0 ml-2 mt-0 flex bg-dark dark:bg-light/75 rounded-lg
                         backdrop-blur-md py-2 ${isSubMenuOpen ? 'flex' : 'hidden'
                                }`}
                            onMouseEnter={handleSubMenuMouseEnter}
                            onMouseLeave={handleSubMenuMouseLeave}
                        >
                            {subMenu.map((item, index) => (
                                <Link key={index} href={item.href}>
                                    <h3
                                        className={`block px-4 py-2 text-light dark:text-dark  
                                        transition-colors duration-300 cursor-pointer hover:underline ${router.asPath == item.href
                                                ? 'font-bold underline'
                                                : ''
                                            }`}
                                        onClick={handleSubMenuLinkClick}
                                    >
                                        {item.title}
                                    </h3>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            ) : (
                <Link href={href} className={`${className} relative group`}>
                    {title}
                    <span className={`h-[2px] inline-block bg-dark absolute left-0 
                -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
                ${router.asPath == href ? 'w-full' : 'w-0'}
                bg-primary dark:bg-primaryDark`}>&nbsp;
                    </span>
                </Link>
            )}
        </div>
    );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {

    const router = useRouter()

    const handleClick = () => {
        toggle()
        router.push(href)
    }

    return (
        <button href={href} className={`${className} relative group text-light text-2xl dark:text-dark my-2`} onClick={handleClick}>
            {title}
            <span className={`h-[2px] inline-block bg-light dark:bg-dark absolute left-0
                -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
                ${router.asPath == href ? 'w-full' : 'w-0'}`}>&nbsp;
            </span>
        </button>
    )
}

const Navbar = () => {

    const { instagramURL, facebookURL } = socialLinks[0]

    const [mode, setMode] = useThemeSwitcher()
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef()

    const handleClick = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen); // Toggle the isOpen state

    }

    return (
        <header className='w-full px-32 py-16 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8'>
            <button className='flex-col justify-center items-center hidden lg:flex group' onClick={handleClick}>
                <span className={`bg-dark dark:bg-light group-hover:bg-dark group-hover:dark:bg-light transition-all duration ease-out block h-0.5 w-6 rounded-sm  ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-dark dark:bg-light group-hover:bg-dark group-hover:dark:bg-light transition-all duration ease-out block h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'} `}></span>
                <span className={`bg-dark dark:bg-light group-hover:bg-dark group-hover:dark:bg-light transition-all duration ease-out block h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>

            <div className='w-full flex justify-between items-center lg:hidden text-2xl'>
                <nav className='flex'>
                    <CustomLink href="/" title="Home" className='mx-2' />
                    <CustomLink href="/biography" title="Biografia" className='mx-2' />
                    <CustomLink href="/projects" title="Projetos" className='mx-2' subMenu={projectsSubMenu} />
                    <CustomLink href="/contacts" title="Contatos" className='mx-2' />
                </nav>


                <nav className='flex items-center justify-center flex-wrap'>
                    <motion.a href={facebookURL} target={'_blank'}
                        className="w-6 mr-3 sm:mx-1"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FacebookIcon className="!fill-dark dark:!fill-light" />
                    </motion.a>

                    <motion.a href={instagramURL} target={'_blank'}
                        className="w-6 mr-3 sm:mx-1"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <InstagramIcon className="!fill-dark dark:!fill-light" />

                    </motion.a>

                    <button
                        onClick={() => setMode(mode === "light" ? "dark" : "light")}
                        className={`ml-3 flex items-center justify-center rounded-full p-1
                    ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}>
                        {
                            mode === "dark"
                                ? <SunIcon className={"fill-dark"} />
                                : <MoonIcon className={"fill-dark"} />
                        }
                    </button>

                </nav>
            </div>

            {
                isOpen ?
                    <motion.div
                        initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
                        animate={{ scale: 1, opacity: 1 }}
                        className='min-w-[70vw] min-h-screen flex flex-col justify-between items-center fixed top-1/2 left-2/3 
                             z-30 bg-dark/90 dark:bg-light/75 backdrop-blur-md py-32'
                        ref={ref}
                    >

                        <nav className='flex flex-col justify-center items-center gap-y-8'>
                            <CustomMobileLink href="/" title="Home" className='text-3xl' toggle={handleClick} />
                            <CustomMobileLink href="/biography" title="Biografia" className='text-3xl' toggle={handleClick} />
                            <CustomMobileLink href="/projects" title="Projetos" className='text-3xl' toggle={handleClick} />
                            <CustomMobileLink href="/contacts" title="Contatos" className='text-3xl' toggle={handleClick} />
                        </nav>

                        <nav className='flex items-center justify-center flex-wrap mt-10'>
                            <motion.a href={facebookURL} target={'_blank'}
                                className="w-6 mr-3 sm:mx-1"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <FacebookIcon className="dark:!fill-dark" />
                            </motion.a>

                            <motion.a href={instagramURL} target={'_blank'}
                                className="w-6 mr-3 sm:mx-1"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <InstagramIcon className="dark:!fill-dark" />
                            </motion.a>

                            <button
                                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                                className={`ml-3 flex items-center justify-center rounded-full p-1
                                    ${mode === "light " ? "bg-dark text-light" : "bg-light text-dark"}`}>
                                {
                                    mode === "dark"
                                        ? <SunIcon className={"fill-dark"} />
                                        : <MoonIcon className={"fill-dark"} />
                                }
                            </button>
                        </nav>
                    </motion.div>
                    :
                    null
            }
            {/* <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div> */}
        </header>
    )
}

export default Navbar