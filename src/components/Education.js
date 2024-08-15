import React from 'react';
import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import LiIcon from './LiIcon';

const Details = ({ type, time, place, info }) => {
    const ref = useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-c justify-between md:w-[80%]'>
        <LiIcon reference={ref} />
        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}>
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                {type}</h3>
            <span className='capitalize font-medium text-dark/75 xs:text-sm'>
                {time} | {place}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {info}
            </p>
        </motion.div>
    </li>
}

const Education = () => {
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
                Education
            </h2>
            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div style={{ scaleY: scrollYProgress }} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top md:w-[2px] md:left-[30px] xs:left-[20px]' />
                <ul className='w-full flex flex-col items-startjustify-between ml-4 xs:ml-2'>
                    <Details
                        type='MASTER OF COMPUTER APPLICATION'
                        time='2021-2023'
                        place='Savitribai Phule Pune University'
                        info='Relevant courses included Web Programming.'
                    />
                    <Details
                        type='BACHELOR OF SCIENCE IN COMPUTER SCIENCE'
                        time='2018-2021'
                        place='Savitribai Phule Pune University'
                        info='Relevant courses included Data Structures and Algorithms, and Programming languages.' 
                    />
                </ul>
            </div>
        </div>
    )
}

export default Education
