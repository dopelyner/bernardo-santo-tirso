import React from 'react'
import localFont from 'next/font/local'
import AnimatedText from './AnimatedText';

const StickFont = localFont({ src: '../../public/fonts/Stick-Regular.ttf', display: 'swap', style: 'normal' })

const TitleStickText = ({ title, className = "" }) => {
    return (
        <AnimatedText
            text={title}
            className={`${StickFont.className} ${className} text-[220px] 
            text-center xl:text-[150px] 2xl:text-[200px] sm:text-[75px]`}
        />
    )
}

export default TitleStickText