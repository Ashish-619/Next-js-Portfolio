import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import profilePic from '../../public/images/profile/Photo-2.png'
import { useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'

const AnimatedNumbers = ({ value, decimalPlaces }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 5000 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = latest.toFixed(decimalPlaces);
            }
        });
    }, [springValue, decimalPlaces]);

    return <span ref={ref}></span>
}

const about = () => {
    return (
        <>
            <Head>
                <title>Ashish&apos;s | About Page</title>
                <meta name="description" content="Ashish Vaidya Portfolio" />
            </Head>
            <TransitionEffect />
            <main className="flex w-full flex-col items-center justify-center">
                <Layout className='pt-16'>
                    <AnimatedText text="Code with heart, and the solution will follow." className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
                    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8 '>
                        <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                            <h2 className='mb-4 text-2xl font-bold uppercase text-dark/75'>About Me</h2>
                            <p className='font-medium text-xl'>Hey there! I&apos;m Ashish Vaidya, your go-to Frontend Developer based in Pune, India. My coding adventure began with a deep curiosity about how things work—yes, I&apos;m the kind of person who&apos;ll take gadgets apart just to see what&apos;s inside (and put them back together, of course!). At Sasken Technologies (formerly Singularity Labs), I refined my skills in HTML, CSS, JavaScript, and React.js, transforming complex designs into pixel-perfect, responsive web experiences.
                            </p>
                            <p className='my-4 font-medium text-xl'>
                                I&apos;m skilled at blending functionality with flair using Material UI and Tailwind CSS, ensuring that every project I touch is both visually stunning and highly functional. Whether it&apos;s integrating APIs seamlessly or optimizing performance, I make sure your app looks great on any device and runs like a dream. Projects like an IMDb-like movie app and a user-friendly data dashboard are just a few examples of how I turn technical challenges into engaging solutions.
                            </p>
                            <p className='font-medium text-xl'>
                                Outside of coding, I&apos;ve achieved a Guinness World Record for planting saplings—because saving the planet is the ultimate side quest. I also lead social projects with the National Service Scheme, proving that a bit of heart can make a big difference. If you&apos;re looking for a developer who combines technical prowess with a passion for creating impactful experiences, let&apos;s build something amazing together—one responsive, pixel-perfect app at a time!
                            </p>
                        </div>
                        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 xl:col-span-4 md:order-1 md:col-span-8'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark'
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                            <Image src={profilePic} alt='Ashish Vaidya' className='w-full h-auto rounded-2xl transform scale-105' />
                        </div>
                        <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'><AnimatedNumbers value={4} />+</span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Satisfied Clients</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'><AnimatedNumbers value={15} />+</span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Projects Completed</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'><AnimatedNumbers value={1.6} decimalPlaces={1}/>+</span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Years of Experience</h2>
                            </div>
                        </div>
                    </div>
                    <Skills />
                    <Experience />
                    <Education />
                </Layout>
            </main>
        </>
    )
}

export default about
