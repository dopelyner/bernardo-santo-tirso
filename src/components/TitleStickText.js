import React from 'react'
import localFont from 'next/font/local'
import AnimatedText from './AnimatedText';

const StickFont = localFont({ src: '../../public/fonts/Stick-Regular.ttf', display: 'swap' })

const TitleStickText = ({ title, className = "" }) => {
    return (
        <AnimatedText
            text={title}
            className={`${StickFont.className} ${className} font-stick text-[220px] 
            text-center xl:text-[150px] 2xl:text-[200px] sm:text-[60px]`}
        />
    )
}

export default TitleStickText