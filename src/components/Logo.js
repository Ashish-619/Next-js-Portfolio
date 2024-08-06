import Link from 'next/link'
import React from 'react'
import { useState } from 'react';
import { motion } from "framer-motion";

const MotionLink = motion(Link);
const Logo = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='flex items-center justify-center mt-2'>
            <MotionLink href="/" className='w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold'
                whileHover={{
                    scale: [1, 1.2, 1],
                    transition: {
                        scale: {
                            duration: 0.4,
                            repeat: Infinity,
                            repeatType: "loop",
                        },
                        backgroundColor: {
                            duration: 1.5,
                            repeat: isHovered ? Infinity : 0,
                            repeatType: "loop",
                        },
                    },
                    backgroundColor: isHovered ? [
                        '#FF5733', // Red-Orange
                        '#33FF57', // Green
                        '#3357FF', // Blue
                        '#FF33A1', // Pink
                        '#F5F5F5', // Light Gray
                        '#FFBF00', // Yellow
                        '#8E44AD', // Purple
                        '#1F77B4', // Dark Blue
                        '#2ECC71', // Light Green
                        '#E67E22', // Orange
                    ] : 'bg-black', // comes to original color(default)
                }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
            >AV</MotionLink>
        </div >
    )
}

export default Logo
