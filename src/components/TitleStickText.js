import AnimatedText from './AnimatedText';

const TitleStickText = ({ font, title, className = "" }) => {
    return (
        <AnimatedText
            text={title}
            className={`${font} ${className} font-stick text-[220px] 
            text-center xl:text-[150px] 2xl:text-[200px] sm:text-[60px]`}
        />
    )
}

export default TitleStickText