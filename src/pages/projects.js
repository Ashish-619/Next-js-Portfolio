import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icon'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from '../../public/images/projects/movie-app.jpeg'
import project2 from '../../public/images/projects/dashboard.jpeg'
import project3 from '../../public/images/projects/fiverr.jpeg'
import project4 from '../../public/images/projects/blog-card.jpeg'
import project5 from '../../public/images/projects/contact-us-form.jpeg'
import project6 from '../../public/images/projects/product-preview-card.jpeg'
import project7 from '../../public/images/projects/social-links.jpeg'
import project8 from '../../public/images/projects/QR-code.jpeg'
import project9 from '../../public/images/projects/dice-game.jpeg'
import project10 from '../../public/images/projects/home-page.jpeg'
import TransitionEffect from '@/components/TransitionEffect'

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className='w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />
            <Link href={link} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
                <Image src={img} alt={title} className='w-full h-auto' priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl xs:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark sm:text-sm'>{summary}</p>
            </div>
            <div className='mt-2 flex items-center'>
                <Link href={github} target="_blank" className='w-10'><GithubIcon /></Link>
                <Link href={link} target="_blank" className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base'>View Live Project</Link>
            </div>
        </article >
    )
}

const Project = ({ title, type, img, link, github }) => {
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-br-2xl rounded-2xl border border-solid border-dark bg-light p-6 relative xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' />
            <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt={title} className='w-full h-auto' />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl lg:text-lg md:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold lg:text-2xl'>{title}</h2>
                </Link>
            </div>
            <div className='mt-2 flex items-center'>
                <Link href={github} target="_blank" className='w-10 md:w-6'>{' '}<GithubIcon />{' '}</Link>
                <Link href={link} target="_blank" className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold md:text-base'>Live</Link>
            </div>
        </article>
    )
}

const projects = () => {
    return (
        <>
            <Head>
                <title>Ashish's | Projects Page</title>
                <meta name="description" content="Ashish Vaidya Portfolio" />
            </Head>
            <TransitionEffect />
            <main className='w-full mb-16 flex flex-col items-center justify-center'>
                <Layout className='pt-16'>
                    <AnimatedText text="Imagination Trumps Knowledge!" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
                    <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="Movie App"
                                img={project1}
                                summary="This project is a React-based movie application designed to deliver an engaging and comprehensive movie experience similar to IMDb. The app features detailed information about movies, including ratings, trailers, reviews, and cast details, providing users with a robust platform to explore and enjoy cinematic content."
                                link="https://movie-project-eta-navy.vercel.app/"
                                github="https://github.com/Ashish-619/Movie-Project"
                                type="Featured Personal Project"
                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="Analytics Dashboard App"
                                img={project2}
                                summary="Created a React dashboard app for real-time data visualization, featuring interactive charts, a Kanban board, and a calendar module. The app integrates external APIs to enhance data insights and streamline information monitoring and analysis."
                                link="https://dashboard-eight-pearl-41.vercel.app/"
                                github="https://github.com/Ashish-619/Dashboard"
                                type="Featured Personal Project"
                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="Fiverr UI"
                                img={project3}
                                summary="Replicated the Fiverr app's UI, focusing on a clean, modern design with a prominent search bar, hero banner, and a grid layout for service categories. The interface includes key elements such as navigation links, profile icons, and a footer, mirroring Fiverr's visual style without functional features."
                                link="https://fiverr-ui-pi.vercel.app/"
                                github="https://github.com/Ashish-619/Fiverr-UI"
                                type=" Featured Personal Project"
                            />
                        </div>
                        <div className='col-span-6'>
                            <Project
                                title="Dice Game"
                                img={project9}
                                link="https://dice-game-kappa-jade.vercel.app/"
                                github="https://github.com/Ashish-619/Dice-Game"
                                type="Game Based Project"
                            />
                        </div>
                        <div className='col-span-6'>
                            <Project
                                title="Blog Card"
                                img={project4}
                                link="https://blog-card-ochre.vercel.app/"
                                github="https://github.com/Ashish-619/blog-card"
                                type="Design Based Mini Project"
                            />
                        </div>
                        <div className='col-span-6'>
                            <Project
                                title="Contact Us Form"
                                img={project5}
                                link="https://contact-form-khaki-eight.vercel.app/"
                                github="https://github.com/Ashish-619/Contact-form"
                                type="Design Based Mini Project"
                            />
                        </div>
                        <div className='col-span-6'>
                            <Project
                                title="Product Preview Card"
                                img={project6}
                                link="https://responsive-product-preview-card-xi.vercel.app/"
                                github="https://github.com/Ashish-619/responsive-product-preview-card"
                                type="Design Based Mini Project"
                            />
                        </div>
                        <div className='col-span-6'>
                            <Project
                                title="Social Links Profile"
                                img={project7}
                                link="https://social-links-profile-red.vercel.app/"
                                github="https://github.com/Ashish-619/social-links-profile"
                                type="Design Based Mini Project"
                            />
                        </div>
                        <div className='col-span-6'>
                            <Project
                                title="Landing Page"
                                img={project10}
                                link="https://home-page-one-azure.vercel.app/"
                                github="https://github.com/Ashish-619/Home-Page"
                                type="Design Based Mini Project"
                            />
                        </div>
                        <div className='col-span-6'>
                            <Project
                                title="QR Code"
                                img={project8}
                                link="https://qr-code-ten-pied.vercel.app/"
                                github="https://github.com/Ashish-619/QR-Code"
                                type="Design Based Mini Project"
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects
