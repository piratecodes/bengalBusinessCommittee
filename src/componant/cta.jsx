"use client"
import React from "react";
import { motion } from 'framer-motion';


function CTA(){
    return(
        <section
          id="contact"
          className="py-24 sm:py-32"
        >
          <motion.div
            className="max-w-4xl mx-auto px-6 lg:px-8 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-stone-700 tracking-tighter">
              Ready to Stop Guessing
              <br />
              and Start Growing?
            </h2>
            <p className="mt-6 text-lg text-gray-400 max-w-xl mx-auto">
              Book a free, no-obligation strategy call with one of our
              experts. Let's build the future of your business, together.
            </p>
            <motion.a
              href="#"
              className="mt-10 inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-white bg-purple-600 rounded-lg shadow-lg hover:bg-purple-700 transition-all duration-200"
              animate={{
                scale: [1, 1.03, 1], // Subtle pulse
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              Book Your Free Strategy Call
            </motion.a>
          </motion.div>
        </section>

    )
}

export default CTA