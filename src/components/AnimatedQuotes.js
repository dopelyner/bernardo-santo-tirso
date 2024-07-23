import AnimatedText from './AnimatedText'

const AnimatedQuotes = ({ lines, author }) => {
    return (
        <div className='w-full mb-24 xs:-mb-6 flex flex-col lg:p-8 xs:text-6xl xs:p-8'>
            {lines.map((line, index) => (
                <AnimatedText
                    key={index}
                    text={line}
                    className='xs:text-5xl xl:text-7xl lg:text-6xl xs:mr-12 xs:p-4 normal-case italic'
                />
            ))}
            <h2 className='mb-32 text-2xl text-end mr-32 xs:m-0 xs:mb-32'>{author}</h2>
        </div>
    )
}

export default AnimatedQuotes