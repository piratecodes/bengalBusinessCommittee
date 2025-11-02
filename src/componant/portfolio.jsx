"use client"
import React from "react";
import { motion } from 'framer-motion';

function Portfolio(){
    return(
        <section
          id="portfolio"
          className="py-12 sm:py-24"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              className="text-center max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-3xl sm:text-4xl font-extrabold text-stone-700 tracking-tighter">
                Our Work: Empowering Bengal's Best
              </h3>
              <p className="mt-4 text-lg text-gray-400">
                We're proud of the businesses we've helped build. Here's a
                look at our solutions in action.
              </p>
            </motion.div>

            {/* Placeholder Grid */}
            <motion.div
              className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="aspect-video bg-gray-900 rounded-2xl border border-gray-700 flex items-center justify-center text-gray-500"
                >
                  <p>Portfolio Project {i + 1}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

    )
}

export default Portfolio