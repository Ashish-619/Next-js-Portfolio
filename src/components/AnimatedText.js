import React from 'react'
import { motion } from 'framer-motion'

const quote = {
    initial: {
        opactiy: 1,
    },
    animate: {
        opactiy: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 1,
        }
    }
}

const singleWord = {
    initial: {
        opactiy: 0,
        y: 50,
    },
    animate: {
        opactiy: 1,
        y: 0,
        transition: {
            duration: 1,
        }
    }
}


const AnimatedText = ({ text, className = "" }) => {
    return (
        <div className='w-full mx-auto py-2 items-center justify-cneter text-center overflow-hidden'>
            <motion.h1 className={`${className} inline-block w-full text-dark font-bold capitalize text-8xl`}
                variants={quote}
            >
                {
                    text.split(" ").map((word, index) =>
                        <motion.span key={word + '-' + index} className="inline-block"
                            variants={singleWord}
                            initial="initial"
                            animate="animate"
                        >
                            {word}&nbsp;
                        </motion.span>
                    )
                }
            </motion.h1>
        </div>
    )
}

export default AnimatedText
