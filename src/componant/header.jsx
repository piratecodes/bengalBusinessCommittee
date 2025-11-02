"use client"
import React from 'react'
import Link from 'next/link';
import ShinyText from '@/util/shinyText';
import LiquidEther from "@/util/liquidEther"
import { motion } from 'framer-motion';


function Header(){
    const waveAnimation = {
      animate: {
        x: ["0%", "-50%"], // Animate from 0% to -50% (path is 200% wide)
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20, // A slow, subtle, continuous motion
            ease: "linear",
          },
        },
      },
    };

    return(
      <React.Fragment>

        <header id="home" className="relative h-screen min-h-3/5 flex items-center justify-center text-center overflow-hidden">
          {/* Background Gradient */}
          {/* <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/50 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-800/50 rounded-full filter blur-3xl opacity-30 animate-pulse animation-delay-4000"></div>
          </div> */}
          <div className='absolute inset-0 z-0'>
            <LiquidEther colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]} mouseForce={20} cursorSize={100} isViscous={false} viscous={30} iterationsViscous={32} iterationsPoisson={32} resolution={0.5} isBounce={false} autoDemo={true} autoSpeed={0.5} autoIntensity={2.2} takeoverDuration={0.25} autoResumeDelay={3000} autoRampDuration={0.6} />
          </div>

          <div className="relative z-10 max-w-8xl mx-auto px-6">
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-stone-700 tracking-tighter"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              
              <ShinyText text="West Bengal's Businesses," disabled={false} speed={3}  />
              <span className="block mt-3.5 text-purple-500">Digitally Transformed</span>
            </motion.h1>

            <motion.p
              className="mt-6 text-lg md:text-xl text-gray-900 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            >
              We build the high-performance Apps, Websites, and Marketing
              strategies to grow your local business into a global brand.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            >
              <a
                href="#process"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 transition-all duration-200"
              >
                Our 99-Day Plan
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-200"
              >
                Explore Services
              </a>
            </motion.div>
          </div>
          
          <div className='absolute -bottom-1 w-full z-0'>

              <motion.svg
                viewBox="0 0 1440 100" // Base viewport
                preserveAspectRatio="none"
                className="h-20 md:h-28 fill-purple-400/60" // Responsive height of the wave
                fill="currentCotext" // This is key: uses Tailwind's text-color
                style={{ width: '200%' }} // Makes the SVG 200% wide for looping
                variants={waveAnimation}
                animate="animate"
              >
                <path
                  d="M0 50 C 360 100 720 0 1080 50 C 1440 100 1800 0 2160 50 C 2520 100 2880 0 2880 50 L 2880 100 L 0 100 Z"
                />
              </motion.svg>

          </div>

        </header>        
      </React.Fragment>
    )
}

export default Header