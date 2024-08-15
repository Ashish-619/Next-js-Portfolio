import Head from 'next/head'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from "../../public/images/profile/photo-1.png"
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icon'
import HireMe from '@/components/HireMe'
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg"
import TransitionEffect from '@/components/TransitionEffect'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Ashish&apos;s Portfolio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect />

      <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full'>
              <Image src={profilePic} alt='Ashish Vaidya' className='w-3/4 rounded-full h-auto lg:hidden md:inline-block md:w-full' priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text="Transforming visions into reality through the art of code " className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl' />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                As an adept frontend developer, I specialize in transforming concepts into cutting-edge web applications. Explore my latest projects to see how my proficiency in React.js and web development brings ideas to life.</p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link
                  href="/Ashish-Vaidya-Frontend.pdf"
                  target="_blank"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold border-3 border-transparent hover:bg-gray-950 hover:text-green-400 md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  Resume <LinkArrow className="w-6 ml-1" />
                </Link>

                <Link href="mailto:ashishvaidya2000@gmail.com" target="_blank" className="ml-4 text-lg font-medium capitalize text-dark underline hover:text-green-900 md:text-base">Email</Link>
              </div>

            </div>
          </div>
        </Layout>
        <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
          <Image src={lightBulb} alt="CodeBucks" className="w-full h-auto" />
        </div>
      </main>
    </>
  )
}
