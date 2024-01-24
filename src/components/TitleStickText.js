import React from 'react'
import localFont from 'next/font/local'
import AnimatedText from './AnimatedText';

const StickFont = localFont({ src: '../../public/fonts/Stick-Regular.ttf' })

const TitleStickText = ({ title }) => {
    return (
        <AnimatedText
            text={title}
            className={`${StickFont.className} font-stick mb-20 xl:mb-20 2xl:mb-32 text-[150px] text-center xl:text-[150px] 2xl:text-[200px] sm:text-[80px] sm:mb-40 sm:mt-40`}
        />
    )
}

export default TitleStickText