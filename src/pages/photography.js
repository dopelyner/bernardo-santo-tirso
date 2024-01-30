import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import SeparatorBar from '@/components/SeparatorBar';
import { projects } from '@/constants';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Masonry from 'react-masonry-css'; // Import the Masonry component
import Modal from 'react-modal';

const Photography = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (imageURL) => {
        setSelectedImage(imageURL);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setIsModalOpen(false);
    };


    // Masonry breakpoints
    const breakpoints = {
        default: 3,
        1100: 2,
        700: 1,
    };

    return (
        <>
            <Head>
                <title>Bernardo Santo Tirso | Fotografia</title>
                <meta name="Bernardo Santo Tirso" content='Projetos de fotografia...' />
            </Head>

            <main className='w-full mb-16 flex flex-col items-center min-h-screen justify-center overflow-hidden text-dark dark:text-light'>
                <Layout className='pt-16'>

                    <div className='flex flex-col items-center justify-center lg:mt-0'>

                        <div className='flex flex-col mb-16'>
                            <AnimatedText
                                text="Fotografia"
                                className='w-full mb-6 xs:text-5xl text-center'
                            />
                            <SeparatorBar size="big" />
                        </div>

                        {/* Masonry layout for the image gallery */}
                        <Masonry
                            breakpointCols={breakpoints}
                            className='flex -ml-4 w-auto'
                            columnClassName='bg-clip-padding pl-4'
                        >
                            {projects.map((project) => (
                                <div key={project.id} className="pt-4">
                                    <Image
                                        src={project.imageURL}
                                        alt={project.title}
                                        width={600}
                                        height={project.id % 2 === 0 ? 800 : 400} // Adjust the height based on your requirements
                                        className=" w-full h-auto shadow-[0_2px_4px_rgba(0,0,0,0.1)] rounded-lg hover:opacity-80 hover:cursor-pointer"
                                        onClick={() => openModal(project.imageURL)}
                                    />
                                </div>
                            ))}
                        </Masonry>
                        <Modal
                            isOpen={isModalOpen}
                            onRequestClose={closeModal}
                            contentLabel="Image Modal"
                            className="aabsolute w-full sm:w-5/6 md:w-4/5 lg:w-3/5 xl:w-2/5 h-full sm:h-5/6 md:h-4/5 lg:h-3/5 xl:h-2/5 mx-auto my-auto inset-0"
                            overlayClassName="fixed inset-0 bg-black bg-opacity-50"
                        >
                            {selectedImage && (
                                <Image
                                    src={selectedImage}
                                    alt="Full Screen Image"
                                    layout="fill"
                                    objectFit="contain"
                                />
                            )}
                            <button onClick={closeModal} className="absolute text-white text-xl cursor-pointer top-4 right-4 z-20 ">
                                Close
                            </button>
                        </Modal>
                    </div>

                </Layout>
            </main>
        </>
    );
}

export default Photography