import React from 'react';
import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import LiIcon from './LiIcon';

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-c justify-between md:w-[80%]'>
        <LiIcon reference={ref} />
        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}>
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                {position}&nbsp;<a href={companyLink}
                    target="_blank"
                    className='text-primary capitalize'>@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75 xs:text-sm'>
                {time} | {address}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {work}
            </p>
        </motion.div>
    </li>
}

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl w-full text-center mb-32 md:text-6xl xs:text-4xl md:mb-16'>
                Experience
            </h2>
            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div style={{ scaleY: scrollYProgress }} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top md:w-[2px] md:left-[30px] xs:left-[20px]' />
                <ul className='w-full flex flex-col items-startjustify-between ml-4 xs:ml-2'>
                    <Details
                        position='Frontend Developer'
                        company='Freelancing'
                        time='June 2024 - Present'
                        address='Remote, India'
                        work='Crafting responsive and dynamic web experiences as a Freelance Frontend Developer, blending creativity with cutting-edge technology to bring visions to life.'
                    />
                    <Details
                        position='Associate Software Engineer'
                        company='sasken Technologies (Formerly Singularity Labs)'
                        companyLink='https://careers.sasken.com/'
                        time='February 2023 - June 2024'
                        address='Pune, India'
                        work='Responsibilities Included:

As a Frontend Developer at Sasken Technologies, I specialized in building and optimizing interactive web applications using HTML, CSS, JavaScript, and React.js. My work focused on enhancing user experience, reducing page load times, and ensuring mobile compatibility. I collaborated with backend teams to integrate RESTful APIs and worked closely with designers to translate Figma designs into responsive React components. Additionally, I configured Webpack for module bundling, optimized performance with Next.js, and led UI testing to ensure cross-browser and cross-device functionality.'
                    />
                </ul>
            </div>
        </div>
    )
}

export default Experience
