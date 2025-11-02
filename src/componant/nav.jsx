"use client"
import React from 'react'
import Link from 'next/link';
import Image from 'next/image'

import Logo from "@/assets/logo2.svg"

const PitbullLogo = ({ className = 'w-15 h-15' }) => (
  <svg
    className={className}
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M50 85C50 85 45 95 60 95C75 95 70 85 70 85M40 50C40 44.4772 44.4772 40 50 40H70C75.5228 40 80 44.4772 80 50V55H40V50Z"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M30 60C30 43.4315 43.4315 30 60 30C76.5685 30 90 43.4315 90 60V75C90 83.2843 83.2843 90 75 90H45C36.7157 90 30 83.2843 30 75V60Z"
      stroke="currentColor"
      strokeWidth="4"
    />
    <rect
      x="35"
      y="45"
      width="50"
      height="12"
      rx="3"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M70 51H50"
      stroke="#1E293B" // Dark background color for bridge
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

function Nav(){
    return(
        <nav className="sticky w-full z-50 top-0 px-6 lg:px-8 bg-purple-200">
          <div className="flex justify-between items-center h-16 max-w-7xl mx-auto">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 text-white"
              
              aria-label="BBC Homepage"
            >
              {/* <PitbullLogo className="w-8 h-8 text-purple-500" /> */}
              <Image src={Logo} alt="BBC Logo" height={60} width={60} />
              {/* <span className='relative w-20 h-20'><Image src={Logo} alt="BBC Logo" fill objectFit='contain' /></span> */}
              <span className="font-bold text-slate-700 text-xl tracking-tighter">
                BBC
              </span>
            </Link>

            {/* Nav Links (Desktop) */}
            <div className="hidden md:flex items-center space-x-6">
              {[
                ['Home', '#home'],
                ['Services', '#services'],
                ['Our Process', '#process'],
                ['Contact', '#contact'],
              ].map(([title, url]) => (
                <Link
                  key={title}
                  href={url}
                  className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                >
                  {title}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 transition-all duration-200"
            >
              Book Free Call
            </a>

            {/* Mobile Menu Button (Stub) */}
            <div className="md:hidden">
              <button className="text-gray-400 hover:text-white">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
    )
}

export default Nav