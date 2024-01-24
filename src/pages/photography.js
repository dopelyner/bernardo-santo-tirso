import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import SeparatorBar from '@/components/SeparatorBar';
import { imageLinks, photography } from '@/constants';
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

    const projects = [
        { id: 1, title: "Project 1", imageURL: photography.photo1 },
        { id: 2, title: "Project 2", imageURL: photography.photo2 },
        { id: 3, title: "Project 3", imageURL: photography.photo3 },
        { id: 4, title: "Project 4", imageURL: photography.photo4 },
        { id: 5, title: "Project 5", imageURL: photography.photo5 },
        { id: 6, title: "Project 6", imageURL: photography.photo6 },
        { id: 7, title: "Project 7", imageURL: photography.photo7 },
        { id: 8, title: "Project 8", imageURL: photography.photo8 },
        { id: 9, title: "Project 9", imageURL: photography.photo9 },
        { id: 10, title: "Project 10", imageURL: photography.photo10 },
    ];

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
                            className="absolute w-[80%] flex items-center justify-center inset-0"
                            overlayClassName="fixed inset-0"
                        >
                            {selectedImage && (
                                <Image
                                    src={selectedImage}
                                    alt="Full Screen Image"
                                    className='fill object-contain'
                                />
                            )}
                            <button onClick={closeModal} className="absolute text-[white] text-lg cursor-pointer border-[none] right-5 top-5">
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