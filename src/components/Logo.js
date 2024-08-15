import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { useAudio } from './AudioContext'; // Adjust the path as needed

const MotionLink = motion(Link);

const Logo = () => {
    const { isPlaying, toggleAudio } = useAudio();

    return (
        <div className='flex flex-col items-center justify-center mt-2'>
            <div className="relative flex items-center justify-center">
                {/* Pulsating effect */}
                {isPlaying && (
                    <motion.div
                        className='absolute w-20 h-20 bg-dark rounded-full'
                        animate={{
                            scale: [1, 1.4, 1],
                            opacity: [0.7, 0.3, 0.7],
                        }}
                        transition={{
                            duration: 1.2,
                            repeat: Infinity,
                            repeatType: "loop",
                        }}
                    />
                )}

                <MotionLink
                    href="/"
                    className={`w-16 h-16 bg-dark text-light flex flex-col items-center justify-center rounded-full text-2xl font-bold relative z-10 ${isPlaying ? 'pulse-animation' : ''}`}
                    whileHover={{
                        scale: 1.1,
                        transition: {
                            duration: 0.4,
                        },
                    }}
                    onClick={(event) => {
                        event.preventDefault();
                        toggleAudio();
                    }}
                >
                    <div className="text-center">
                        AV
                    </div>
                    <div className="text-sm text-gray-400">
                        {isPlaying ? '(Stop)' : '(Play)'}
                    </div>
                </MotionLink>

                {isPlaying && (
                    <div className="absolute inset-0 z-0 flex items-center justify-center">
                        {/* Wave effect */}
                        <div className="absolute w-24 h-24 bg-gradient-to-r from-gray-400 to-transparent rounded-full opacity-50 animate-wave" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Logo;
