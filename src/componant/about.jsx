"use client"
import React from "react";
import { motion } from 'framer-motion';

function About(){
    return(
        <section
          id="about"
          className="py-12 sm:py-24"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-700 tracking-tighter">
                We Are The Bengal Business Committee
              </h2>
              <p className="mt-6 text-xl text-gray-400">
                We're not just another agency. We're a committee of
                Bengal's top tech and marketing experts with a single
                mission: to provide local businesses with the world-class
                tools they need to win. We believe in execution over
                talk, and partnership over contracts.
              </p>
            </motion.div>
          </div>
        </section>

    )
}

export default About