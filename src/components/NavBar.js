import React from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { TwitterIcon, DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon } from './Icon'
import { motion } from 'framer-motion'

const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();
    return (
        <motion.a href={href} className={`${className} relative group`} >
            {title}
            <span className={`h-[1px] inline-block w-0 bg-dark left-0 -bottom-0.5 absolute
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
        </motion.a>
    )
}

const NavBar = () => {
    return (
        <header
            className='w-full px-32 py-8 font-medium flex items-center justify-between'>
            <nav>
                <CustomLink href="/" title="Home" className='mr-4' />
                <CustomLink href="/about" title="About" className='mx-4' />
                <CustomLink href="/projects" title="Projects" className='mx-4' />
            </nav>

            <nav className='flex items-center justify-center flex-wrap'>
                <motion.a href="https://github.com" target={"_blank"} whileHover={{ y: -5 }} whileTap={{ scale: 1.5 }} className='w-6 mr-3'><GithubIcon /></motion.a>
                <motion.a href="https://linkedin.com" target={"_blank"} whileHover={{ y: -5 }} whileTap={{ scale: 1.5 }} className='w-6 mx-3'><LinkedInIcon /></motion.a>
                <motion.a href="https://twitter.com" target={"_blank"} whileHover={{ y: -5 }} whileTap={{ scale: 1.5 }} className='w-6 mx-3'> <TwitterIcon /></motion.a>
                <motion.a href="https://pinterest.com" target={"_blank"} whileHover={{ y: -5 }} whileTap={{ scale: 1.5 }} className='w-6 mx-3'><PinterestIcon /></motion.a>
                <motion.a href="https://dribbble.com" target={"_blank"} whileHover={{ y: -5 }} whileTap={{ scale: 1.5 }} className='w-6 ml-3'><DribbbleIcon /></motion.a>
            </nav>
            <div className='absolute left-[50%] top-2 translate-x-[-50%]'> <Logo /></div>
        </header>
    )
}

export default NavBar
