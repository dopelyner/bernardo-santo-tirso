import AnimatedText from '@/components/AnimatedText'
import { ArrowHorizontal, LinkArrow } from '@/components/Icons'
import Layout from '@/components/Layout'
import TitleStickText from '@/components/TitleStickText'
import TransitionEffect from '@/components/TransitionEffect'
import { homeMedia, lightsMedia, projectsSubMenu } from '@/constants'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { ImageGallery } from 'react-image-grid-gallery'

export default function Home() {

  return (
    <>
      <Head>
        <title>Bernardo Santo Tirso</title>
        <meta name="Bernardo Santo Tirso" content="Página Oficial" />
      </Head>

      <TransitionEffect />

      <main className='flex flex-col justify-center text-dark dark:text-light sm:justify-center sm:items-center'>
        <Layout className='relative w-full min-h-fit px-0 py-0 xl:px-0 xl:py-0 lg:py-0 lg:px-0 sm:px-0 sm:py-0'>

          <div className='absolute sm:flex right-0 -translate-x-6 pt-4 hidden z-50'>
            <ArrowHorizontal />
          </div>

          <div className='w-full h-full lg:min-h-fit sm:flex sm:bottom-0 sm:h-fit absolute left-[50%] translate-x-[-50%] z-20 p-32 xl:p-16 xl:pt-40 sm:p-0 bg-transparent/60 xs:bg-transparent dark:bg-transparent/50'>
            <TitleStickText title="Bernardo Santo Tirso" className='sm:w-fit p-0 text-light sm:scale-90 xs:scale-75' />
          </div>

          <div className='w-full h-auto flex items-center justify-center sm:justify-normal gap-10 overflow-clip sm:overflow-x-scroll' >
            {homeMedia.map((item, index) => (
              <Image
                priority
                key={index}
                src={item.path}
                width={500}
                height={500}
                title='Bernardo Santo Tirso'
                alt='Bernardo Santo Tirso'
              />
            ))
            }
          </div>
        </Layout>

        <Layout className='h-fit'>
          <div className='flex flex-col items-center justify-center'>
            <AnimatedText
              className='text-center'
              text="experiências / vivências" />
            <p className='text-2xl pt-8'>Desde &apos;95 a produzir momentos... </p>

            <div className='flex flex-row items-center justify-center xl:flex-wrap md:flex-wrap gap-10   pt-16'>
              {projectsSubMenu.map((projects, index) => (
                <>
                  <div className='relative min-h-40 min-w-72 flex items-center justify-center max-w-96 bg-gradient-to-tr via-dark/60 to-80% from-dirt to-oliveDark/60 shadow-primary shadow-md text-light hover:-translate-y-1 hover:cursor-pointer'>
                    <Link key={index} href={projects.href} className=" w-full h-full">
                      <LinkArrow className="w-8 absolute top-0 right-0 m-2" />
                      <h2 className='text-center text-7xl'>{projects.title}</h2>
                    </Link>
                  </div></>
              ))}

            </div>
          </div>
        </Layout>

      </main >
    </>
  )
}
