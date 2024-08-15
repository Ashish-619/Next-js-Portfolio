import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg sm:text-base'>
            <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
                <span>{new Date().getFullYear()}&copy; All Rights Reserved.</span>
                <div className='flex items-center lg:py-2'>
                    Crafted with <span className='text-primary text-2xl px-1'>&#10084;</span><Link href="/">By Ashish Vaidya</Link></div>
                <Link href="https://www.google.co.in/maps/place/Pune,+Maharashtra/@18.524545,73.6981509,11z/data=!3m1!4b1!4m6!3m5!1s0x3bc2bf2e67461101:0x828d43bf9d9ee343!8m2!3d18.5204303!4d73.8567437!16zL20vMDE1eTJx?entry=ttu" target="_blank">Pune, India</Link>
            </Layout>
        </footer>
    )
}

export default Footer
