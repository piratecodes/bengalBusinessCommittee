"use client"
import React from "react";
import Image from 'next/image'
import Link from "next/link";
import Logo from "@/assets/logo2.svg"

import { FaFacebook, FaInstagram } from "react-icons/fa";


function Footer(){
    return(
        <footer className="border-t border-violet-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center gap-2 text-stone-700">
                <Image src={Logo} alt="BBC Logo" height={60} width={60} />
                <span className="font-bold text-lg">
                  BBC - Bengal Business Committee
                </span>
              </div>
              <div className="flex space-x-6 mt-4 md:mt-0">
                {[
                  ['Services', '/#services'],
                  ['Process', '/#process'],
                  ['Contact', '/#contact'],
                  ['Privacy Policy', '/privacy-policy'],
                  ['Terms & Condition', '/terms-and-condition'],
                ].map(([title, url]) => (
                  <a
                    key={title}
                    href={url}
                    className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {title}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap md:justify-between items-center mt-8 pt-8 border-t border-violet-800 text-center text-sm text-gray-500">
              <p>
                &copy; {new Date().getFullYear()} BBC. All rights reserved.
                Based in Kolkata, West Bengal.
              </p>
              {/* Social icons placeholder */}
              <span className="flex flex-wrap space-x-2">
                <Link href="" target="_blank"><FaFacebook className="w-6 h-6" /></Link>
                <Link href="https://www.instagram.com/straxcel_for_bbc/" target="_blank"><FaInstagram className="w-6 h-6" /></Link>
              </span>
            </div>
          </div>
        </footer>
    )
}

export default Footer